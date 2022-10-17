import { FormControl,Box, FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BiRupee } from "react-icons/bi";

const PriceInput=()=>{
    return(
        <FormControl mb="15px">
        <Box fontSize="16px" fontWeight="bold" lineHeight="24px" mt="15px" pb="10px" >SET A PRICE</Box>
        <FormLabel fontSize="12px" mb="1px">Price *</FormLabel>
        <InputGroup >
           <InputLeftElement
             pointerEvents='none'
             color='gray.300'
             fontSize='1.2em'
             children={<BiRupee/>}
           />
           
           <Input  type="number" placeholder='Enter amount' />
           
        </InputGroup>
      </FormControl>  
        )
}
export default PriceInput