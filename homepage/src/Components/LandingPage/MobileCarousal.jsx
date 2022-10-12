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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

function MobileCarousal() {
  const [appliances, setappliances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 3.7, itemsToScroll: 3.5 },
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
        mt="10px"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        p="1"
        bg="white"
      >
        <Box w="90%" m="auto">
          <Carousel breakPoints={breakPoints}>
            {appliances.map((item) => (
              <Box
                m="5px"
                alignItems="center"
                textAlign={"center"}
                key={item.item_id}
              >
                <Img
                  w="120px"
                  h="200px"
                  m="auto"
                  _hover={{ transform: "scale(1.1)" }}
                  p="10px"
                  src={item.img_url}
                  alt=""
                />
                <Text> {item.title}</Text>
                <Text>₹ {item.price}</Text>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </div>
  );
}

export default MobileCarousal;
