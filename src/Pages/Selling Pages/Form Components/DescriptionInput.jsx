import { FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, Textarea } from "@chakra-ui/react"
import {useState} from "react"

export default function DescriptionInput(){

    const [input, setInput] = useState('')
    const [textAreaCount,settextAreaCount]=useState(0)

  
    const handleInputChange = (e) => {
        setInput(e.target.value)
        settextAreaCount(e.target.value.length)
        
    }
    let isError=false
    if(textAreaCount>0 && textAreaCount<10) { isError= true} 

  
    return (
      <FormControl isInvalid={isError}  mb="15px">
        <FormLabel fontSize="12px" mb="1px" >Description *</FormLabel>
        <Textarea resize="none" maxLength={4096} fontSize="12px" h="32px" borderRadius="2px" type='text' value={input} pr="55px" onChange={(e)=>{
            handleInputChange(e)
        }} />
      
       <HStack justifyContent="space-between">
        {!isError  ? (
          <FormHelperText fontSize="8px">
            Include condition, features and reason for selling
          </FormHelperText>
        ) : (
          <FormErrorMessage mt="5px" fontSize="8px">
            A minimum length of 10 characters is required. Please edit the field.
          </FormErrorMessage>
        )}
        <FormLabel fontSize="10px" pt="3px">{textAreaCount}/4096</FormLabel>
        </HStack>

      </FormControl>
    )



}


