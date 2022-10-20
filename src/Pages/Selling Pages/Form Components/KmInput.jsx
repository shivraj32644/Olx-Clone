import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react"


function KmInput({input,isError,handleInputChange}) {
  
    return (
      <FormControl isInvalid={isError} mb="15px">
        <FormLabel fontSize="12px" mb="1px" >KM driven *</FormLabel>
        <Input fontSize="12px" h="38px" borderRadius="2px" name="km_driven" type='number' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText fontSize="12px">
            
          </FormHelperText>
        ) : (
          <FormErrorMessage mt="5px" fontSize="8px">Km is mandatory. Please complete the required field.</FormErrorMessage>
        )}
      </FormControl>
    )
  }
  export default KmInput