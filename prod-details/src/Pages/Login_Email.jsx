import { Image, Box, Input, Button, Text } from "@chakra-ui/react"
// import { useContext } from "react"
import {Link} from "react-router-dom"
// import { ContextModal } from "../Component/ContextModal"


function LoginEmail() {

    // const {pages,setCurrPage,currPage} = useContext(ContextModal)

    return (
        <Box boxSize='sm'
            textAlign='center'
            border='1px solid black'
            height='90vh'
        >
            <Image boxSize='100px'
                objectFit='cover'
                src='https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-768x768.jpg'
                alt='Dan Abramov'
                marginLeft='35%'
            />
            <Text fontSize='1xl' as='b'>Enter Your Email To Login</Text><br /><br />
            <Box>

            <Input placeholder='Email' focusBorderColor="#00a49f" type={'email'} />
            </Box><br />

            <Box bg='#fefbf0' w='100%' p={1} color='black' >
                <span>
                    If you are a new user please select any other login option from previous page.
                </span>
            </Box><br />
        <Link to="/loginemailpassword">
            <Button colorScheme='teal' size='md'
                height='48px'
                width='300px'
                border='2px' >
                Next
            </Button>
            
        </Link>
            <br /><br />
            <Text fontSize='xs'> Your email is never shared with external parties nor do we use it to spam you in any way.</Text>
            


        </Box>
    )
}

export default LoginEmail;