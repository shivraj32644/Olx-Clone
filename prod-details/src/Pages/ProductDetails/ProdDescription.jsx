import { AspectRatio, Box, Button, Text } from "@chakra-ui/react"
import { BiShareAlt } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { MdArrowForwardIos } from "react-icons/md"
import { GiCircle } from "react-icons/gi"

function ProdDescription() {
    return (
        <Box>
            <Box
                boxShadow='xs' p='6' rounded='md' bg='white'
                border="1px solid #ecebeb" height="10%"
                width="100%">
                <Box display="flex" justifyContent="space-between">
                    <Text as="b" fontSize='1xl'>₹ 14000</Text>

                    <Box display="flex" gap="2">
                        <Text fontSize='3xl'><BiShareAlt /></Text>
                        <Text fontSize='3xl'><AiOutlineHeart /></Text>
                    </Box>
                </Box>
                <Text fontSize='md'>Rent for 3BHK Flate for family/ bachelor/whare house</Text><br />
                <Box display="flex" justifyContent="space-around">
                    <Text fontSize='xs'>South Pateri, Satna, Madhya Pradesh</Text>
                    <Text fontSize='xs'>3 Days Ago</Text>
                </Box>
            </Box>

            <br />

            <Box
                boxShadow='xs' p='6' rounded='md' bg='white'
                border="1px solid #ecebeb" height="170px"
                width="100%">
                <Text fontSize='lg'>Seller Description</Text>
                <Box display="flex" justifyContent="space-between"
                    textAlign="left">
                    <Box marginTop="7px"><GiCircle fontSize="30px" /></Box>
                    <Box >
                        <Text as='b'>User Name</Text><br />
                        <Text fontSize='xs'>Member Since {"data to be fetched"}</Text>
                    </Box>
                    <Box>
                        <Box marginTop="7px"><MdArrowForwardIos fontSize="15px" /></Box>
                    </Box>
                </Box>
                <Box textAlign="center">
                    <Button
                        size='md'
                        height='48px'
                        width='300px'
                        border='2px'
                        borderColor='002f34.500'
                        _hover={{ border: "4px solid #002f34" }}
                        _active={{
                            bg: '#dddfe2',
                            transform: 'scale(0.98)',
                            // borderColor: '#bec3c9',
                        }}
                       

                    >
                        Chat With Seller
                    </Button>
                </Box>
            </Box><br />
            
            <Box boxShadow='xs' p='6' rounded='md' bg='white'
                border="1px solid #ecebeb" 
             padding="10px" alignContent="center" height="240px" width="100%">
                <Text as="b">Posted In</Text>
                <Text fontSize='xs'>South Pateri, Satna, Madhya Pradesh</Text>
                <AspectRatio ratio={16 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96237.7898914364!2d80.75351566396952!3d24.57265753729708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f12a0d55141%3A0xa6208334386e35e2!2sSatna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1665818720941!5m2!1sen!2sin" title="map" 
                style={{width:"366px" ,height:"166px" ,style:"border:0;" ,allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                </AspectRatio>
            </Box>
        </Box>
    )
}
export default ProdDescription