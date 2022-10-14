import {Box, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Select, VStack }from "@chakra-ui/react"
import { Form, Link } from "react-router-dom"
import {ArrowBackIcon, CheckIcon} from "@chakra-ui/icons"
import { useContext } from "react"
import { CategoryDataContext } from "../../Context/AuthContext/SellingDetail"
import { Link as ChakraLink } from '@chakra-ui/react'
import InputBox from "./Form Components/inputBox"
import { BiRupee } from "react-icons/bi"

const SellingForm=()=>{
    const {categoryObj}=useContext(CategoryDataContext)
    const {category,subcategory}=categoryObj
    console.log(category)
    console.log(subcategory)
    const fuelBoxStyle={
        h:"32px",
        w:"max-content", 
        padding:"8px 16px 8px 16px",
        margin:"0 8px 8px 0",
         _hover:{bg:"#C8F8F6"},
          border:"1px solid #cecece",
        borderRadius:"3px", display:"flex", 
        justifyContent:"center", alignItems:"center",
        
    }

    return(
       <Box>
          <Box position="fixed" zIndex={1} top={0} w="100%" h="48px" bg="#EDF2F7" >
           <Box ml={15} mr={20} my="10px" h="28px" w="auto" >
            <Link  to="/sellcategories"> <ArrowBackIcon w="32px"/></Link>
           </Box>
          </Box>
        <VStack  fontFamily="Arial" color="#002F34" w="760px" display="block" margin="auto" mt={14} marginBottom="40px">
          <Box color="#002F34" fontSize="24px" fontWeight="bold" textAlign="center" >POST YOUR ADS</Box> 
          <VStack fontFamily="sans-serif" fontSize="16px" border="1px solid #cecece"  borderRadius="5px" display="block">
            <Box fontSize="16px" fontWeight="bold" lineHeight="24px" my="5px" px="16px" color="#002F34" >SELECTED CATEGORY</Box>
            <Box fontSize="9px" pb="16px" px="16px" color="#002F34" >
             {category} / {subcategory} <ChakraLink textDecoration="underline" fontWeight={700} ml={3}>Change</ChakraLink>
            </Box>
            <hr/>
            <FormControl>
              <Box w="430px" py="30px" px="32px" >
                <Box fontSize="16px" fontWeight="bold" lineHeight="24px" my="5px" pb="16px" >INCLUDE SOME DETAILS</Box>
                <FormControl  color="#002F34" mb="15px">
                  <FormLabel fontSize="12px" mb="1px" >Brand *</FormLabel>
                  <Select fontSize="12px" height="40px">
                    <option>Maruti</option>
                    <option>Honda</option>
                    <option>Renault</option>
                    <option>BMW</option>   
                  </Select>
                </FormControl>
                <InputBox/>
                <Box mb="15px">
                 <Box fontSize="12px" mb="1px" >Fuel *</Box>
                 <Box fontSize="12px" display="flex"  flexWrap="wrap">
                   <Box {...fuelBoxStyle}>CNG & Hybrid</Box>
                   <Box {...fuelBoxStyle}>Diesel</Box>
                   <Box {...fuelBoxStyle}>LPG</Box>
                   <Box {...fuelBoxStyle}>Petrol</Box>
                   <Box {...fuelBoxStyle}>Electric</Box>
                 </Box>
                </Box>
                <Box mb="15px">
                 <Box fontSize="12px" mb="1px" >Transmission *</Box>
                 <Box fontSize="12px" display="flex"  flexWrap="wrap">
                  <Box {...fuelBoxStyle}>Automatic</Box>
                  <Box {...fuelBoxStyle}>Manual</Box>
                 </Box>
                </Box>
                <InputBox/>
                <Box mb="15px">
                  <Box fontSize="12px" mb="1px" >No. of owners *</Box>
                  <Box fontSize="12px" display="flex"  flexWrap="wrap">
                    <Box {...fuelBoxStyle}>1st</Box>
                    <Box {...fuelBoxStyle}>2nd</Box>
                    <Box {...fuelBoxStyle}>3rd</Box>
                    <Box {...fuelBoxStyle}>4th</Box>
                    <Box {...fuelBoxStyle}>4+</Box>
                  </Box>
                </Box>
                <hr mb="15px"/>
                <InputGroup mb="15px">
                   
                   <InputLeftElement
                     pointerEvents='none'
                     color='gray.300'
                     fontSize='1.2em'
                     children={<BiRupee h="8px" w="8px" />}
                   />
                   <Input  type="number" placeholder='Enter amount' />
                   
                </InputGroup>
                <hr mt="15px" mb="15px"    />
              </Box>
              <hr/>                    
              
            </FormControl> 
          </VStack>
        </VStack>
        <HStack bg="#002F34" h="38px" w="100%" color="white" spacing="50px" justifyContent="space-around" alignItem="centre" fontSize="10px">
         <Box>Other Countries Pakistan - South Africa - Indonesia</Box>
         <Box>Free Classifieds in India. © 2006-2022 OLX</Box>
        </HStack>
      </Box>
    )
}
export default SellingForm