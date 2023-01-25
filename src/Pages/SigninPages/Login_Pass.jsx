import { Box, Input, Text } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const UserName = ({ input, setInput }) => {
  // const [input, setInput] = useState('')
  const [textAreaCount, settextAreaCount] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    settextAreaCount(e.target.value.length);
  };
  let isError = false;
  if (textAreaCount > 0 && textAreaCount < 4) {
    isError = true;
  }

  return (
    <Box textAlign="center">
      <Box>
        <br />
        {/* <hr style={{
                    width:"30%",
                    border: "4px solid #012f35",
                }} /> */}
        <Text as="b" fontSize="3xl">
          What's Your Name ?{" "}
        </Text>
        <Text>"Stranger" ,Feels so impersonal, you Know ?</Text>
        <br />

        {/* <InputGroup size='md'>
                    <Input
                        width="95%"
                        pr='4rem'
                        placeholder='Name Or NickName'
                        marginLeft="2%"
                        focusBorderColor="#00a49f"
                    />
                </InputGroup> */}

        <FormControl isInvalid={isError} mb="15px">
          {/* <FormLabel fontSize="12px" mb="1px" >Ad title *</FormLabel> */}
          <Input
            maxLength={30}
            fontSize="12px"
            h="32px"
            borderRadius="2px"
            type="text"
            colorScheme="blackAlpha"
            value={input}
            pr="55px"
            focusBorderColor="#00a49f"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />

          <HStack justifyContent="space-between">
            {!isError ? (
              <FormHelperText fontSize="8px"></FormHelperText>
            ) : (
              <FormErrorMessage mt="5px" fontSize="8px">
                Username is required. Please edit the field.
              </FormErrorMessage>
            )}
            <FormLabel fontSize="10px">{textAreaCount}/30</FormLabel>
          </HStack>
        </FormControl>
      </Box>
      {/* <Button colorScheme='teal' size='md'
                height='48px'
                width='300px'
                border='2px'>
                Continue
            </Button> */}
    </Box>
  );
};
export default UserName;
