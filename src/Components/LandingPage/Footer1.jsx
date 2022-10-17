import { Box, SimpleGrid, Image, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import phone from "./Images/phone-app.png";
import playStore from "./Images/playstore_2x.png";
import playStoreApple from "./Images/appstore_2x.png";
const Footer1 = () => {
  return (
    <div>
      <Box mt="2rem" bg="#f7f8f9">
        <SimpleGrid columns={[1, 2, 3]} spacing="30px">
          <Box>
            <img src={phone} alt="phone" />
          </Box>
          <Box my="1rem">
            <Heading as="h1" size="xl">
              TRY THE OLX APP
            </Heading>
            <Text fontSize="25px" my="15px">
              Buy, sell and find just about anything using the app on your
              mobile.
            </Text>
          </Box>
          <Box borderLeft="2px solid gray" mx="1rem" my="1rem">
            <Box width="80%" margin="auto" my="2rem">
              <Heading as="h4" size="md" mb="10px">
                GET YOUR APP TODAY
              </Heading>
              <Flex>
                <Image width="130px" src={playStore} alt="phone" />

                <Image
                  px="5px"
                  width="130px"
                  src={playStoreApple}
                  alt="phone"
                />
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Footer1;
