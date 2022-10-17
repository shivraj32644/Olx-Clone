import { AspectRatio, Box, Button, Image, Text } from "@chakra-ui/react"
import { BiShareAlt } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai"
import { MdArrowForwardIos } from "react-icons/md"
import { useEffect, useState } from "react"
import axios from "axios"


// let DateGenerator = require('random-date-generator');
// DateGenerator.getRandomDate(); // random date

// let startDate = new Date(2017, 2, 2);
// let endDate = new Date(2017, 3, 3);
// DateGenerator.getRandomDateInRange(startDate, endDate)
// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }
// let res = randomDate(new Date(2012, 0, 1), new Date())

function ProdDescription() {
        const [user, setUser] = useState("");


    useEffect(() => {
        axios.get('http://localhost:5000/product/1')
            .then((response) => {
                setUser(response.data)
                // console.log(response.data)
})
            .catch((err) => console.log(err))
            .finally(() => console.log("success"))
    }, [])

    if (
        user === undefined
    ) {
        return <h1>Loading</h1>
    }
    const { full_name, img_url } = user

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
                border="1px solid #ecebeb" height="190px"
                width="100%">
                <Text fontSize='lg' marginBottom="10px">Seller Description</Text>
                <Box display="flex" justifyContent="space-between"
                    alignItems="center"
                    // border="1px solid teal"
                    >
                    <Box ><Image src={img_url} alt="user" borderRadius="50%" height="40px" width="40px" /></Box>
                    <Box >
                        <Text as='b'>{full_name}</Text><br />
                        <Text fontSize='xs'>Member Since {"Dummy Data 2022"}</Text>
                    </Box>
                    <Box>
                        <Box ><MdArrowForwardIos fontSize="15px" /></Box>
                    </Box>
                </Box>
                <Box textAlign="center" marginTop={2}>
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
            margin="auto"
                border="1px solid #ecebeb" 
             padding="10px" alignContent="center" height="240px" width="100%">
                <Text as="b">Posted In</Text>
                <Text fontSize='xs'>South Pateri, Satna, Madhya Pradesh</Text>
                <AspectRatio ratio={16 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96237.7898914364!2d80.75351566396952!3d24.57265753729708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f12a0d55141%3A0xa6208334386e35e2!2sSatna%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1665818720941!5m2!1sen!2sin" title="map" 
                style={{ margin:"auto",width:"100%" ,height:"166px" ,style:"border:0;" ,allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                </AspectRatio>
            </Box>
        </Box>
    )
}
export default ProdDescription