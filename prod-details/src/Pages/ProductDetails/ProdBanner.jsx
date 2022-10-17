import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function ProdBanner() {
    // const axios = require('axios').default;
    const [myData, setMyData] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/product/1')
            .then((response) => {
                // setUser(response.data)
            setMyData(response.data.published_ads)
            })
            .catch((err) => console.log(err))

            .finally(() => console.log("success"))
    }, [])
    // console.log()
    // console.log(user.full_name,
    //     "baar nhi chal rha")
    // published_ads.cars[0].car_images.img1, 
    if (myData === undefined
        // &&
        // user !== undefined
    ) {
        return <h1>Loading</h1>
    }
    const carImages = (myData.cars[0].car_images)

    // console.log(carImages, "sab bhadiya hai");
    // const {} = myData
    return (
        <Box >

            <Box
                boxShadow='xs' p='3' rounded='md' bg='white'
            // key={id}
            // height="200px"
            // width="50%"
            >
                <Carousel autoPlay >

                    <div>
                        <img
                            alt="Prod-1"
                            src={carImages.img1}
                        />
                    </div>

                    <div>
                        <img
                            alt="Prod-2"
                            src={carImages.img2}
                        />

                    </div>

                    <div>
                        <img
                            alt="Prod-3"
                            src={carImages.img3}

                        />
                    </div>
                </Carousel>
            </Box>


            <Box marginTop=" 20px"
                boxShadow='xs' p='6' rounded='md' bg='white'
                border="1px solid black" height="0%"
                width="100%">
                <Text as='b' fontSize='xl'>Details
                    {/* {full_name} */}
                </Text>

                <Box >
                    <SimpleGrid columns={[1, 2, 4]} justifyContent="space-between" gap="5">

                        <Box>
                            <Text fontSize='sm'>Furnishing</Text>
                            <Text fontSize='sm'>Super Builtup area (ft²)</Text>
                            <Text fontSize='sm'>Maintenance (Monthly)</Text>
                            <Text fontSize='sm'>Washrooms</Text>
                        </Box>
                        <Box>
                            <Text fontSize='sm'>Furnishing</Text>
                            <Text fontSize='sm'>Super Builtup area (ft²)</Text>
                            <Text fontSize='sm'>Maintenance (Monthly)</Text>
                            <Text fontSize='sm'>Washrooms</Text>
                        </Box>
                        <Box>
                            <Text fontSize='sm'>Furnishing</Text>
                            <Text fontSize='sm'>Super Builtup area (ft²)</Text>
                            <Text fontSize='sm'>Maintenance (Monthly)</Text>
                            <Text fontSize='sm'>Washrooms</Text>
                        </Box>
                        <Box>
                            <Text fontSize='sm'>Furnishing</Text>
                            <Text fontSize='sm'>Super Builtup area (ft²)</Text>
                            <Text fontSize='sm'>Maintenance (Monthly)</Text>
                            <Text fontSize='sm'>Washrooms</Text>
                        </Box>
                    </SimpleGrid>

                    <hr />
                    <Box>
                        <Text as='b' fontSize='xl'>Description</Text>
                        <Text fontSize='sm'>New construction house for rent Sherganj near AKS University Satna</Text>
                    </Box>
                </Box>

                <Box textAlign="center">

                </ Box>
            </Box>
        </Box>
    )
}
export default ProdBanner