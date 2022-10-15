import { Box, Button, Text } from "@chakra-ui/react"
import { BiShareAlt } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { MdArrowForwardIos } from "react-icons/md"
import { GiCircle } from "react-icons/gi"

function ProdDescription() {
    return (
        <Box>
            <Box
                boxShadow='xs' p='6' rounded='md' bg='white'
                border="1px solid grey" height="100px"
                width="100%">
                <Box display="flex" justifyContent="space-around">
                    <Text as="b" fontSize='1xl'>₹ 14000</Text>

                    <Box display="flex" gap="2">
                        <Text fontSize='3xl'><BiShareAlt /></Text>
                        <Text fontSize='3xl'><AiOutlineHeart /></Text>
                    </Box>
                </Box>
                <Text fontSize='md'>Rent for 3BHK Flate for family/ bachelor/whare house</Text>
            </Box>
            <br />

            <Box
                boxShadow='xs' p='6' rounded='md' bg='white'
                border="1px solid grey" height="170px"
                width="100%">
                <Text fontSize='xl'>Seller Description</Text>
                <Box display="flex" justifyContent="space-around"
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
                            borderColor: '#bec3c9',
                        }}
                        _focus={{
                            boxShadow:
                                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}

                    >
                        Chat With Seller
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
export default ProdDescription