import {
    Box, HStack, Image, Input, InputGroup, InputLeftAddon, PinInput, Button,
    PinInputField, Text, useToast
} from "@chakra-ui/react"
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Component/ContextModal";
// import { Popover } from "@chakra-ui/react";

const GenOtp = (otpLength) => {
    let digits = [1,2,3,4,5,6,7,8,9]
    let otp = [];

    for (let i = 0; i < otpLength; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return Number(otp);
}

const LoginMobile = () => {
    const { isAuth, handleLogin } = useContext(AuthContext);
    const toast = useToast()

    if (isAuth) {
        return <Navigate to="/homepage" />;
      } 
    return (
        <Box
            textAlign='center'
            width="100%"
            height="90vh"
        >
            <Box >
                <Image
                    boxSize='200px'
                    height="60px"
                    width="80px"
                    // objectFit='cover'
                    src='https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png'
                    alt='Dan Abramov'
                    // alignContent="center"
                    marginLeft='35%'
                />
            </Box>
            <Box>
                <Text as='b'>Enter Your Phone Number</Text>
            </Box>
            <br />
            <InputGroup>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='phone number' maxLength="10" />
            </InputGroup>
            <br />

            <Button
                onClick={() =>
                    toast({
                        title: 'Generated OTP',
                        description: `${GenOtp(4)}`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                        position: 'top'
                    })
                }
            >
                <Text fontSize='sm'>Generate OTP </Text>
            </Button>

            {/* <Text as='b' cursor="pointer">Regenerate OTP</Text> */}
            <br /><br />
            <Text as='b'>Enter 4-Digit OTP</Text><br /><br />
            <Box display="flex" justifyContent="center">
                <HStack>
                    <PinInput type='alphanumeric' borderColor="#00a49f">
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
            </Box> <br />
            <Box>
                <Button colorScheme='teal' size='md'
                    height='48px'
                    width='300px'
                    border='2px'
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </Box>
    )
}
export default LoginMobile;