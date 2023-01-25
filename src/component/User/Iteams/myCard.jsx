import { Box, Text, Image, VStack } from "@chakra-ui/react";

import { RiHeartFill, RiHeartLine } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { OnSuccess } from "../../../Redux/UserProfile/Action";

function MyCard({
  img,
  fav,
  price,
  title,
  date,
  getAllData,
  cardClick,
  user,
  index,
}) {
  let dispater = useDispatch();

  //add fav

  const AddFav = () => {
    let newUser = user;

    newUser.published_ads[index].fav = true;

    let obj = newUser.published_ads[index];
    obj.user_id = newUser.user_id;
    newUser.favourite_ads.push(obj);

    favUpdater(user.id, newUser);
  };
  //remove fav
  const RemoveFav = () => {
    let newUser = user;

    newUser.published_ads[index].fav = false;

    newUser.favourite_ads.splice(index, 1);

    favUpdater(user.id, newUser);
  };

  //  fun forfavupdate

  const favUpdater = async (id, newuser) => {
    try {
      var data = await fetch(
        `https://olx-database-3xly.onrender.com/data/${id}`,

        {
          method: "PATCH",
          body: JSON.stringify(newuser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let r = await data.json();

      console.log(r);
      dispater(OnSuccess(r));
    } catch (e) {
    } finally {
    }
  };

  return (
    <VStack
      gap={4}
      position="relative"
      border={"1px solid #cfcdcd"}
      alignItems="center"
      borderRadius={"4"}
      padding={"8px"}
    >
      <Image src={img} alt="Dan Abramov" height="160px" />

      <Box position={"absolute"} top="2px" right={"10px"}>
        {fav ? (
          <RiHeartFill
            cursor={"pointer"}
            onClick={RemoveFav}
            fontSize={"25px"}
          />
        ) : (
          <RiHeartLine
            cursor={"pointer"}
            color="black"
            onClick={AddFav}
            fontSize={"25px"}
          />
        )}
      </Box>

      <VStack spacing={"2px"} width={"100%"} px="8px">
        <Text as="b" width="100%" fontSize={"18px"} textAlign={"left"}>
          ₹ {new Intl.NumberFormat("en-IN").format(price)}
        </Text>
        <Text color={"gray"} fontSize={"14px"} width="100%" textAlign={"left"}>
          {title}
        </Text>
        <Text fontSize={"10px"} color={"gray"} width="100%" textAlign={"right"}>
          {" "}
          {date}
        </Text>
      </VStack>
    </VStack>
  );
}

export default MyCard;
