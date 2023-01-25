import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  SkeletonCircle,
  SkeletonText,
  Flex,
  Badge,
  Image,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

function MobileCarousal() {
  const [appliances, setappliances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [setIsFaver] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 406, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
  ];
  const getMobile = () => {
    setLoading(true);
    fetch("https://olx-database-3xly.onrender.com/homedata")
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

                  {/* <Badge
                    zIndex={580}
                    position="absolute"
                    right={1}
                    px="2"
                    bg="white"
                    //   color="black"
                  >
                    <FaRegHeart />
                  </Badge> */}

                  <Badge
                    zIndex={580}
                    position="absolute"
                    right="0.1px"
                    bg="none"
                  >
                    <button
                      type="button"
                      title="Favourite"
                      tabIndex="0"
                      onClick={() => setIsFaver(true)}
                      // className={styles.heartBtn}
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 1024 1024"
                        fill-rule="evenodd"
                        className="heartIcon"
                      >
                        <path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path>
                      </svg>
                    </button>
                  </Badge>
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
