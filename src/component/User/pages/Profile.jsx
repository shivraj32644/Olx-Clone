import {
  Box,
  Flex,
  Spacer,
  VStack,
  Image,
  Text,
  Button,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import MyCard from "../Iteams/myCard";
import { useEffect } from "react";
import LoadingPage from "../util/Loading";

function Profile({ userData, getUser }) {
  let { loading, error, user } = userData;

  useEffect(() => {
    getUser();
  }, []);

  // img,fav,price,title,date

  if (error) {
    return <h1>error..</h1>;
  }

  if (loading) {
    return <LoadingPage />;
  }

  if (!error && !loading && Object.keys(user).length === 0) {
    return <></>;
  }

  let cardta = user.published_ads.map((el, index) => {
    return (
      <MyCard
        img={el.images.img1}
        fav={el.fav == null || el.fav == false ? false : true}
        date={el.date_from}
        title={el.product_name}
        price={el.set_price}
        getAllData={getUser}
        cardClick={""}
        user={user}
        index={index}
      />
    );
  });

  return (
    <Flex width={"95%"} margin="auto" alignItems={"start"} gap={4}>
      <VStack gap={2} width={"24%"} marginTop={8}>
        <Box margin="auto" position={"relative"}>
          <Image
            borderRadius="full"
            boxSize="184px"
            src={user.img_url}
            padding="5px"
            alt="Dan Abramov"
          />
          <Link to="/editProfile/picture">
            <Flex
              padding={"10px"}
              textAlign={"center"}
              justifyContent="center"
              alignItems={"center"}
              borderBottomRadius="50% 100%"
              margin={"auto"}
              backgroundColor="rgba(0, 0, 0, 0.44)"
              width="100%"
              height={"40%"}
              tabIndex="0"
              role={"button"}
              position={"absolute"}
              top="61%"
            >
              <FaEdit
                textAlign="center"
                width={"35px"}
                color="white"
                fontSize={"45px"}
                backgroundColor="white"
                opacity={1}
              />
            </Flex>
          </Link>
        </Box>
        {/* fllowers */}
        <VStack
          gap={2}
          width="100%"
          paddingBottom={4}
          border={"1px solid #cfcdcd"}
        >
          <Text
            textAlign={"left"}
            width={"100%"}
            backgroundColor="#ebeeef"
            py="4px"
            px="8px"
            as="b"
            fontSize={"sm"}
          >
            FRIENDS
          </Text>

          <Flex gap={4} width="100%" px="8px">
            {" "}
            <Text color={"Gray"} fontSize="small">
              Followers
            </Text>{" "}
            <Spacer></Spacer>{" "}
            <Text as="b" fontSize="xs">
              {user.followers == null || user.followers === ""
                ? 0
                : user.followers}
            </Text>{" "}
          </Flex>

          <Flex gap={4} width="100%" px="8px">
            {" "}
            <Text color={"Gray"} fontSize="small">
              Following
            </Text>{" "}
            <Spacer></Spacer>{" "}
            <Text as="b" fontSize="xs">
              {user.following == null || user.following === ""
                ? 0
                : user.following}
            </Text>{" "}
          </Flex>
        </VStack>
        {/* links */}
        <VStack
          gap={2}
          width="100%"
          paddingBottom={4}
          border={"1px solid #cfcdcd"}
        >
          <Text
            textAlign={"left"}
            width={"100%"}
            backgroundColor="#ebeeef"
            py="4px"
            px="8px"
            as="b"
            fontSize={"sm"}
          >
            Linked accounts
          </Text>

          <Flex gap={4} width="100%" px="8px">
            {" "}
            <Text color={"Gray"} fontSize="small">
              GOOGLE
            </Text>{" "}
            <Spacer></Spacer>{" "}
            <Text as="b" fontSize="20px">
              {user.isEmail ? (
                <AiOutlineCheckCircle />
              ) : (
                <AiOutlineCloseCircle />
              )}
            </Text>{" "}
          </Flex>

          <Flex gap={4} width="100%" px="8px">
            {" "}
            <Text color={"Gray"} fontSize="small">
              PHONE NUMBER
            </Text>{" "}
            <Spacer></Spacer>{" "}
            <Text as="b" fontSize="20px">
              {user.user_number == null || user.user_number === "" ? (
                <AiOutlineCloseCircle />
              ) : (
                <AiOutlineCheckCircle />
              )}
            </Text>{" "}
          </Flex>

          <Flex gap={4} width="100%" px="8px">
            {" "}
            <Text color={"Gray"} fontSize="small">
              EMAIL
            </Text>{" "}
            <Spacer></Spacer>{" "}
            <Text as="b" fontSize="20px">
              {user.email_id == null || user.email_id === "" ? (
                <AiOutlineCloseCircle />
              ) : (
                <AiOutlineCheckCircle />
              )}
            </Text>{" "}
          </Flex>
        </VStack>
        {/* singup Data */}Member since Jul 2020
        <Text as={"b"} color={"black"} fontSize="xs" textAlign={"center"}>
          {user.singUp_date == null || user.singUp_date === ""
            ? ""
            : `Member since ${user.singUp_date}`}
        </Text>
        <Button
          marginTop={5}
          borderRadius={"none"}
          borderBottom="2px solid black"
          px="0px"
          py="0px"
          variant="ghost"
          color={"black"}
          _hover={{ border: "none", variant: "ghost" }}
          fontSize="15px"
        >
          Share Profile Link
        </Button>
      </VStack>

      {/* Rightside userDetails */}
      <VStack width={"75%"} gap={5} textAlign="left">
        <VStack gap={0} width="100%" textAlign="left">
          <Flex gap={5} width="100%" alignItems="center" marginBottom={"-10px"}>
            <Text fontSize={"5xl"}>{user.full_name}</Text>
            <Link to="/editProfile">
              <Button
                size="md"
                borderRadius={"4px"}
                border="2px"
                color={"black"}
                borderColor="black"
                background={"white"}
                _hover={{ border: "5px solid black", backgroundColor: "white" }}
              >
                Edit profile
              </Button>
            </Link>
          </Flex>

          <Text color={"black"} width="100%">
            {user.user_about}
          </Text>
        </VStack>

        <Divider size={"1px"} color={"black"} colorScheme={"black"}></Divider>

        {/* Published Ads aria */}

        <Text as="b" fontSize={"lg"} width={"100%"} textAlign="left">
          Published Ads
        </Text>

        {/* templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',xl:'repeat(3, 1fr)'}} */}
        <Grid
          marginTop={6}
          templateColumns="repeat(3, 1fr)"
          gap={6}
          width="100%"
        >
          {/* img,fav,price,title,date */}

          {cardta}
        </Grid>
      </VStack>
    </Flex>
  );
}

export default Profile;
