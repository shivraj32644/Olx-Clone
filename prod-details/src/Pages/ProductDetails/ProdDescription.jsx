import { Box, Button, Text } from "@chakra-ui/react"
import { BiShareAlt } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { MdArrowForwardIos } from "react-icons/md"
import { GiCircle } from "react-icons/gi"

function ProdDescription() {
    return (
        <Box>
            <Box
                boxShadow='dark-lg' p='6' rounded='md' bg='white'
                border="1px solid black" height="100%"
                width="50%">
                <Box display="flex" justifyContent="space-around">
                    <Text fontSize='3xl'>₹ 350000</Text>

                    <Box display="flex" gap="2">
                        <Text fontSize='3xl'><BiShareAlt /></Text>
                        <Text fontSize='3xl'><AiOutlineHeart /></Text>
                    </Box>
                </Box>
                <Text fontSize='md'>agricultural land on SH 11 maihar- barhi road</Text>
            </Box>
            <br />
            <Box
                boxShadow='dark-lg' p='6' rounded='md' bg='white'
                border="1px solid black" height="200px"
                width="100%">
                <Text fontSize='xl'>Seller Description</Text>
                <Box display="flex" justifyContent="space-around">
                    <Box><GiCircle fontSize="50px" /></Box>
                    <Box>
                        <Text as='b'>User Name</Text><br />
                        <Text as='samp'>Member Since {"data to be fetched"}</Text>
                    </Box>
                    <Box>
                        <Box><MdArrowForwardIos fontSize="50px" /></Box>
                    </Box>
                </Box>
                <Box textAlign="center">
                    <Button
                        size='md'
                        height='48px'
                        width='200px'
                        border='2px'
                        borderColor='green.500'
                    >
                        Chat With Seller
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
export default ProdDescription