import {Box,Button,Image, Input, InputGroup, InputRightElement,Text} from "@chakra-ui/react"
import { useState } from "react"
import {BsEye,BsEyeSlash} from "react-icons/bs"
import { Link } from "react-router-dom"

const LoginPass=()=>{
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)


    return(
        <Box  
        textAlign='center'
        width="100%"
        border="1px solid black">
            
            <Image boxSize='100px'
                objectFit='cover'
                src='https://pixlok.com/wp-content/uploads/2021/04/OLX-Logo-PNG-768x768.jpg'
                alt='Dan Abramov'
                alignContent="center"
                marginLeft='35%'
                 />
            
                 {/* Input Password Starts Here */}
            <Box>
             <Text as='b'>Enter Your Password</Text>
                    <Text>Welcome Back { }
                        <Text as='b'>
                            mail id
                        </Text>
                    </Text><br />
                <InputGroup size='md'>
                    <Input
                    width="95%"
                        pr='4rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        marginLeft="2%"
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? <BsEyeSlash/> : <BsEye/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box><br /><br /><br/>
            <Button colorScheme='teal' size='md'
                height='48px'
                width='300px'
                border='2px'>
                Next
            </Button><br /><br />
            <Link to='/'>Forgot Your Password</Link>
            <hr /><br /><br />
        </Box>   
    )
}
export default LoginPass