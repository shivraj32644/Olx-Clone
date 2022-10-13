import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Img,
  SkeletonCircle,
  SkeletonText,
  Text,
  WrapItem,
  Flex,
  Badge,
  Image,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { FaRegHeart } from "react-icons/fa";

function MobileCarousal() {
  const [appliances, setappliances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
  ];
  const getMobile = () => {
    setLoading(true);
    fetch("http://localhost:5000/homedata")
      .then((res) => res.json())
      .then((res) => setappliances(res))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getMobile();
  }, []);
  console.log(appliances, "dd");
  if (loading) {
    return (
      <>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="100" />
          <SkeletonText mt="4" noOfLines={8} spacing="4" />
        </Box>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Alert status="error" w="70%" m="auto" textAlign={"center"}>
          <AlertIcon />
          <AlertTitle>Opps!</AlertTitle>
          <AlertDescription>Please Refresh and try again.</AlertDescription>
        </Alert>
      </>
    );
  }
  return (
    <div>
      <Box
        mt="20px"
        mb="10px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        p="1"
        bg="white"
        // border="1px solid black"
      >
        <Box
          w="95%"
          m="auto"
          // border="1px solid black"
          my="1rem"
          bg="
#ebeeef"
        >
          <Heading as="h3" size="md" py="1rem" ml="2rem">
            Based on your last search
          </Heading>
          <Carousel breakPoints={breakPoints}>
            {appliances.map((elem) => (
              // <Box
              //   m="5px"
              //   alignItems="center"
              //   textAlign={"center"}
              //   key={elem.id}
              // >
              //   <Img
              //     w="120px"
              //     h="200px"
              //     m="auto"
              //     _hover={{ transform: "scale(1.1)" }}
              //     p="10px"
              //     src={elem.img_url}
              //     alt="product"
              //   />
              //   <Text> {elem.title}</Text>
              //   <Text>₹ {elem.price}</Text>
              // </Box>

              <Box
                key={elem.id}
                width="95%"
                h="270px"
                borderWidth="2px"
                borderRadius="md"
                border="1px solid rgba(0, 0, 0, 0.30)"
                overflow="hidden"
                bg="white"
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
            ))}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
}

export default MobileCarousal;
