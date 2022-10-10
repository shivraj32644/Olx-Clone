import {useContext}from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import React from 'react'
  import { Input } from '@chakra-ui/react'
  import {InputGroup} from "@chakra-ui/react"
  import { InputRightElement } from "@chakra-ui/react"
  import {Box} from "@chakra-ui/react"
  import {Button} from "@chakra-ui/react"

  export default function LoginForm() {
    const {toggleAuth}=useContext(AuthContext)

    const [input, setInput] = React.useState('')
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
        <Box bg='black' w='40%' p={4} color='white'>
            <FormControl isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
           </FormControl>
           <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme='blue' onClick={toggleAuth}>Login</Button>

        </Box>

    )
  }

  
  
  
  
  
  