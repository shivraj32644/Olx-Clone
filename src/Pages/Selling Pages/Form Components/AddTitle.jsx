import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
// import {useState} from "react"

export default function AddTitle({
  input,
  textAreaCount,
  isError,
  handleInputChange,
}) {
  return (
    <FormControl isInvalid={isError} mb="15px">
      <FormLabel fontSize="12px" mb="1px">
        Ad title *
      </FormLabel>
      <Input
        maxLength={70}
        fontSize="12px"
        h="32px"
        borderRadius="2px"
        name="key_feature"
        type="text"
        value={input}
        pr="55px"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />

      <HStack justifyContent="space-between">
        {!isError ? (
          <FormHelperText fontSize="8px">
            Mention the key features of your item (e.g. brand, model, age, type)
          </FormHelperText>
        ) : (
          <FormErrorMessage mt="5px" fontSize="8px">
            A minimum length of 10 characters is required. Please edit the
            field.
          </FormErrorMessage>
        )}
        <FormLabel fontSize="10px" pt="3px">
          {textAreaCount}/70
        </FormLabel>
      </HStack>
    </FormControl>
  );
}
