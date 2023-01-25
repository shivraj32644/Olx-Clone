import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Textarea,
} from "@chakra-ui/react";
// import {useState} from "react"

export default function DescriptionInput({
  input,
  textAreaCount,
  isError,
  handleInputChange,
}) {
  return (
    <FormControl isInvalid={isError} mb="15px">
      <FormLabel fontSize="12px" mb="1px">
        Description *
      </FormLabel>
      <Textarea
        resize="none"
        maxLength={4096}
        fontSize="12px"
        h="32px"
        name="description"
        borderRadius="2px"
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
            Include condition, features and reason for selling
          </FormHelperText>
        ) : (
          <FormErrorMessage mt="5px" fontSize="8px">
            A minimum length of 10 characters is required. Please edit the
            field.
          </FormErrorMessage>
        )}
        <FormLabel fontSize="10px" pt="3px">
          {textAreaCount}/4096
        </FormLabel>
      </HStack>
    </FormControl>
  );
}
