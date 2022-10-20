import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BiRupee } from "react-icons/bi"

const PriceInput=({input,isError,handleInputChange})=>{

  console.log("priceInput="+typeof input)
  
    return(
        <FormControl mb="15px" isInvalid={isError}>
          <Box fontSize="16px" fontWeight="bold" lineHeight="24px" mt="15px" pb="10px" >SET A PRICE</Box>
          <FormLabel fontSize="12px" mb="1px">Price *</FormLabel>
          <InputGroup>
             <InputLeftElement
               pointerEvents='none'
               color='gray.300'
               fontSize='1.2em'
               children={<BiRupee/>}  
             />
             
             <Input  type="number" name="set_price" value={input}  onChange={handleInputChange}/>
             
          </InputGroup>
          {!isError ? (
            <FormHelperText fontSize="12px">
              
            </FormHelperText>
          ) : (
            <FormErrorMessage mt="5px" fontSize="8px">This filed is mandatory.</FormErrorMessage>
          )}
      </FormControl>  
        )
}
export default PriceInput