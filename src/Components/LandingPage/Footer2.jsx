import { Box, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import playstore from "./Images/playstore.png";
import playtoreapple from "./Images/appstore.png";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiInstagramLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { MdOutlinePlayCircle } from "react-icons/md";
const Footer2 = () => {
  return (
    <div>
      <Box bg="#ebeeef" border="1px solid #ebeeef">
        <SimpleGrid columns={[1, 2, 4, 5]} spacing="20px" mx="2rem" my="1rem">
          <Box>
            <Box>
              <Text as="b">POPULAR LOCATIONS</Text>
            </Box>
            <Box>
              <Link to="#">Kolkata</Link>
            </Box>
            <Box>
              <Link to="#">Mumbai</Link>
            </Box>
            <Box>
              <Link to="#">Chennai</Link>
            </Box>
            <Box>
              <Link to="#">Pune</Link>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text as="b">TRENDING LOCATIONS</Text>
            </Box>
            <Box>
              <Link to="#">Bhubaneshwar</Link>
            </Box>
            <Box>
              <Link to="#">Hyderabad</Link>
            </Box>
            <Box>
              <Link to="#">Chandigarh</Link>
            </Box>
            <Box>
              <Link to="#">Nashik</Link>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text as="b">ABOUT US</Text>
            </Box>
            <Box>
              <Link to="#">About OLX Group</Link>
            </Box>
            <Box>
              <Link to="#">Careers</Link>
            </Box>
            <Box>
              <Link to="#">Contact Us</Link>
            </Box>
            <Box>
              <Link to="#">OLXPeople</Link>
            </Box>
            <Box>
              <Link to="#">Waah Jobs</Link>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text as="b">OLX</Text>
            </Box>
            <Box>
              <Link to="#">Help</Link>
            </Box>
            <Box>
              <Link to="#">Sitemap</Link>
            </Box>
            <Box>
              <Link to="#">Legal & Privacy information</Link>
            </Box>
            <Box>
              <Link to="#">Blog</Link>
            </Box>
          </Box>
          <Box>
            <Box>
              {/* Folloe us section */}

              <Text as="b">FOLLOW US</Text>
              <Box mt="3px" mb="55px">
                <Flex gap="2">
                  <Link to="https://www.facebook.com/olxindia/">
                    <TiSocialFacebookCircular size="20px" color="#557477" />
                  </Link>
                  <Link to="https://www.instagram.com/olx_india/">
                    <RiInstagramLine size="20px" color="#557477" />
                  </Link>
                  <Link to="https://twitter.com/OLX_India">
                    <TiSocialTwitterCircular size="20px" color="#557477" />
                  </Link>
                  <Link to="https://www.youtube.com/user/OLXInTv">
                    <MdOutlinePlayCircle size="20px" color="#557477" />
                  </Link>
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <Link to="https://play.google.com/store/apps/details?id=com.olx.southasia">
                    <Image width="130px" src={playstore} alt="phone" />
                  </Link>

                  <Link to="https://itunes.apple.com/in/app/olx-buy-sell-near-you/id913492792?mt=8">
                    <Image
                      height="35px"
                      px="5px"
                      width="130px"
                      src={playtoreapple}
                      alt="phone"
                    />
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        bg="
#002f34"
      >
        {" "}
        <Box mx="2rem" display="flex" pt="1rem" pb="1rem">
          <Text color="white">
            Other Countries Pakistan - South Africa - Indonesia
          </Text>
          <Spacer />
          <Text color="white">All rights reserved © 2006-2022 OLX</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Footer2;
