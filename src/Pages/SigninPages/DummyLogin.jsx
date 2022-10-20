// import { useContext } from "react"
// import { ContextModal } from "../Context_V/ContextModal"


import { Link } from "react-router-dom"

import { Box, Button, 
    // Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
     Text, 
    //  useDisclosure
     } from "@chakra-ui/react"
import Carousel from "react-elastic-carousel";
import { AiOutlineMobile } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"



const items =
    [{
        link: "https://statics.olx.in/external/base/img/loginEntryPointPost.webp",
        title: "Help us become one of the safest places to buy and sell"
    },
    {
        link: "https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp",
        title: "Close deals from the comfort of your home."
    },
    {
        link: "https://statics.olx.in/external/base/img/loginEntryPointChat.webp",
        title: "Keep all your favourites in one place."
    }
    ]



const DummyLogin = () => {

    // const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box className="App">
                {/* <hr className="seperator" /> */}
                {/* <div className="carousel-wrapper"> */}
                <Carousel>
                    {items.map((item) => (
                        <Box>
                            <Box key={item} style={{ display: "flex", justifyContent: "center" }}                                    >
                                <img style={{ height: "200px", width: "50%" }} src={item.link} alt="login-img" />
                            </Box>
                            <p style={{ textAlign: "center" }}>{item.title}</p>
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <br />
            <Box>
                <Link to="/contwithphone" >
                <Button
                    size='md'
                    height='45px'
                    width='400px'
                    border='2px'
                    borderColor='#002F34.500'
                    gap={2}
                    // variant='ghost'
                    // onClick={onOpen}
                    >
                    <span>
                        <AiOutlineMobile />
                    </span>Continue With Phone</Button>
                </Link>             

            </Box><br />
            <Box>
                <Button
                    size='md'
                    height='45px'
                    width='400px'
                    border='2px'
                    borderColor='#002F34.500'
                    gap={3}>
                    <span><FcGoogle /></span>
                    Continue With Google
                </Button>
            </Box>
            <p style={{ textAlign: "center", textTransform: "uppercase" }}>or</p>
            <Box textAlign='center'>

                <Link to ="/contwithemail">
                <Text
             
                >Login With Email</Text>
             
                    </Link>

                <br />
                <Text fontSize='xs'>All Your Presonal Details Are Safe With Us</Text><br />
                <Text fontSize='xs'>If you continue, you are accepting { }

                    <Link color='blue.500' href='https://help.olx.in/hc/en-us'>
                        OLX Terms and Conditions and Privacy Policy
                    </Link>
                </Text>

            </Box>
        </>
    )
}
export default DummyLogin