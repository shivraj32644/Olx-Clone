import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
// import { useRef, useState } from "react"

function YearInput({ input, isError, handleInputChange }) {
  return (
    <FormControl isInvalid={isError} mb="15px">
      <FormLabel fontSize="12px" mb="1px">
        Year *
      </FormLabel>
      <Input
        fontSize="12px"
        h="38px"
        borderRadius="2px"
        name="year_buy"
        type="number"
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText fontSize="12px"></FormHelperText>
      ) : (
        <FormErrorMessage mt="5px" fontSize="8px">
          Year is mandatory. Please complete the required field.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
export default YearInput;
