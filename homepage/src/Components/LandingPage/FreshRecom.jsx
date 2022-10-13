import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Flex,
  Badge,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action";

const FreshRecom = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  console.log("data is looks like ", data);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      {/* "id": "506f8533-bb31-4d87-abd6-bd4e76a26a3b", "img_url":
      "https://apollo-singapore.akamaized.net/v1/files/jis4lvkn2k2s2-IN/image;s=300x600;q=60",
      "price": 7500, "title": "Fantastic Soft Pizza", "address": "1824 Caterina
      Ville", "post_date": "9 Aug 2025" }, */}

      <div>
        <Box px="4rem">
          <Heading as="h3" size="md" py="1rem" flexDirection="row">
            Fresh recommendations
          </Heading>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
            {data.map((elem) => {
              return (
                // <Box key="elem.id" border="1px solid gray" pr="1rem" pl="1rem">
                //   <Box
                //     border="1px solid green"
                //     display="flex"
                //     justifyContent="flex-end"
                //   >
                //     <FaRegHeart />
                //   </Box>
                //   <Box
                //     m="1rem"
                //     mt="10px"
                //     Height="100px"
                //     border="1px solid gray"
                //   >
                //     <Image
                //       src={elem.img_url}
                //       alt="product"
                //       //   height="100px"
                //       width="fit-content-width"
                //     />
                //   </Box>
                //   <Box>
                //     <Box>{elem.price}</Box>
                //     <Text>{elem.title}</Text>
                //     <Box>
                //       <Text>{elem.address}</Text>
                //       <Text>{elem.post_date}</Text>
                //     </Box>
                //   </Box>
                // </Box>

                <Box
                  key={elem.id}
                  width="100%"
                  h="270px"
                  borderWidth="2px"
                  borderRadius="md"
                  border="1px solid rgba(0, 0, 0, 0.30)"
                  overflow="hidden"
                >
                  <Flex
                    position="relative"
                    height="160px"
                    margin="8px"
                    justifyContent="center"
                    // align="start"
                  >
                    {/* {premium ? (
                      <Badge
                        zIndex={580}
                        position="absolute"
                        left={1}
                        px="2"
                        bg="#ffce32"
                        color="black"
                      >
                        Featured
                      </Badge>
                    ) : null} */}

                    <Image height="160px" src={elem.img_url} alt="product" />

                    <Badge
                      zIndex={580}
                      position="absolute"
                      right={1}
                      px="2"
                      bg="white"
                      //   color="black"
                    >
                      <FaRegHeart />
                    </Badge>

                    {/* <FaRegHeart
                      zIndex={580}
                      position="absolute"
                      left={1}
                      px="2"
                      bg="#ffce32"
                      color="black"
                    /> */}
                  </Flex>

                  <Box h="72px" p="2" pl="4">
                    <Box
                      fontSize="20px"
                      color="002f34"
                      fontWeight="700"
                      lineHeight="23pxpx"
                    >
                      ₹ {new Intl.NumberFormat("en-IN").format(elem.price)}
                    </Box>

                    <Box
                      mt="1"
                      as="h4"
                      lineHeight="16px"
                      fontSize="16px"
                      noOfLines={1}
                      color="002f34"
                      opacity="64%"
                    >
                      {elem.title}
                    </Box>

                    <Box
                      display="flex"
                      mt="2"
                      fontSize="11px"
                      alignItems="center"
                      justifyContent="space-between"
                      color="002f34"
                      opacity="64%"
                    >
                      {elem.address}
                      <Box
                        as="span"
                        ml="2"
                        fontSize="11px"
                        color="002f34"
                        opacity="64%"
                      >
                        {elem.post_date}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </div>
    </>
  );
};

export default FreshRecom;
