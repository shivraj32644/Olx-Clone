import { Box, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

function ProdBanner() {
    return (
        <Box >
            <Box
            boxShadow='xs' p='6' rounded='md' bg='white'
            width="100%"
            margin="auto"
           
            >
                <Carousel autoPlay
                    height="200px"
                    width="700px"
                >
                    <div>
                        <img
                            alt=""
                            src="https://apollo-singapore.akamaized.net/v1/files/8vmbf07qk7uv2-IN/image;s=780x0;q=60"
                        />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://apollo-singapore.akamaized.net/v1/files/8vmbf07qk7uv2-IN/image;s=780x0;q=60"
                        />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://apollo-singapore.akamaized.net/v1/files/8vmbf07qk7uv2-IN/image;s=780x0;q=60"
                        />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </Box>


            <Box
                boxShadow='xs' p='6' rounded='md' bg='white'
                border="1px solid black" height="0%"
                width="100%">
                <Text as='b' fontSize='xl'>Details</Text>

                <Box >
                    <Box display="flex" justifyContent="space-between" gap="10">

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
                    </Box>

                    <hr />
                    <Box>
                        <Text as='b' fontSize='xl'>Description</Text>
                        <Text fontSize='sm'>New construction house for rent Sherganj near AKS University Satna</Text>
                    </Box>
                </Box>

                <Box textAlign="center">

                </Box>
            </Box>
        </Box>
    )
}
export default ProdBanner