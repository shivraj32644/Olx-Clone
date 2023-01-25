import {
  Box,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
// import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function ProdBanner({ id }) {
  // const axios = require('axios').default;
  const [myData, setMyData] = useState();

  useEffect(() => {
    axios
      .get(`https://olx-database-3xly.onrender.com/allOlxData/${id}`)
      .then((response) => {
        // setUser(response.data)
        setMyData(response.data.published_ads.cars[0]);
        // console.log(response.data.published_ads, "dikh rha kyaa")
      })
      .catch((err) => console.log(err))

      .finally(() => console.log("success"));
  }, []);

  if (myData === undefined) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={20} spacing="4" />
      </Box>
    );
  }
  const carImages = myData.car_images;

  return (
    <Box>
      <Box boxShadow="xs" p="3" rounded="md" bg="white">
        <img
          style={{
            objectFit: "contain",
            width: "700px",
          }}
          alt="Prod-1"
          src={carImages.img1}
        />
      </Box>

      <Box
        marginTop=" 20px"
        boxShadow="xs"
        p="6"
        rounded="md"
        bg="white"
        border="1px solid #ecebeb"
        height="20%"
        width="100%"
      >
        <Text as="b" fontSize="xl">
          Details
          {/* {full_name} */}
        </Text>

        <Box>
          <SimpleGrid
            columns={[1, 2, 3]}
            justifyContent="space-between"
            gap="5"
          >
            <Box>
              <Text fontSize="sm">{myData.car_name}</Text>
              <Text fontSize="sm">{myData.car_model}</Text>
              <Text fontSize="sm">{myData.car_varient}</Text>
            </Box>
            <Box>
              <Text fontSize="sm">{myData.year_buy}</Text>
              <Text fontSize="sm">{myData.fuel}</Text>
              <Text fontSize="sm">{myData.transmission}</Text>
            </Box>
            <Box>
              <Text fontSize="sm">{myData.km_driven}</Text>
              <Text fontSize="sm">{myData.no_of_oweners}</Text>
              <Text fontSize="sm">{myData.key_feature}</Text>
            </Box>
            {/* <Box>
                            <Text fontSize='sm'>Furnishing</Text>
                            <Text fontSize='sm'>Super Builtup area (ft²)</Text>
                            <Text fontSize='sm'>Maintenance (Monthly)</Text>
                            <Text fontSize='sm'>Washrooms</Text>
                        </Box> */}
          </SimpleGrid>

          <hr />
          <Box>
            <Text as="b" fontSize="xl">
              Description
            </Text>
            <Text fontSize="sm">
              {myData.description}New construction house for rent Sherganj near
              AKS University Satna
            </Text>
          </Box>
        </Box>

        <Box textAlign="center"></Box>
      </Box>
    </Box>
  );
}
export default ProdBanner;
