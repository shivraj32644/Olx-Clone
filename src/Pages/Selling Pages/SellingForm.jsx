import {Box, Button, FormControl, FormLabel, Grid, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Select, Tab, TabList, TabPanel, TabPanels, Tabs, textDecoration, VStack }from "@chakra-ui/react"
import { Form, Link } from "react-router-dom"
import {ArrowBackIcon, CheckIcon} from "@chakra-ui/icons"
import { useContext, useState } from "react"
import { CategoryDataContext } from "../../Context/AuthContext/SellingDetail"
import { Link as ChakraLink, Text } from '@chakra-ui/react'
import InputBox from "./Form Components/inputBox"
import { BiRupee } from "react-icons/bi"
import {TbCameraPlus} from "react-icons/tb"
import SelectBrand from "./Form Components/SelectBrand"
import AddTitle from "./Form Components/AddTitle"
import handleAddSellPosts from "./axios.jsx"

const SellingForm=()=>{
    const {categoryObj}=useContext(CategoryDataContext)
    const {category,subcategory}=categoryObj
    const [sellingFormObj, setSellingFormObj]=useState({

         user_id: "f1b17",
         ad_id: "2e99da32c0dd",
         ad_active: true,
         date_from: "NOV 9, 22",
         date_to: "DEC 8, 22 ",
         category: "OLX Auto(Cars)",
         category_type: "Cars",
         car_name: " Beetle",
         car_model: "PT Cruiser",
         car_varient: "Passenger Van",
         year_buy: 2001,
         fuel: "CNG",
         transmission: "Manual",
         km_driven: 89484,
         no_of_oweners: 3,
         key_feature: "veniam nostrud est",
         description: "Iam willing to sell my lovely car due to financial issues want a buyer fast giving amazing offer for first comer.",
         set_price: 918000,
         car_images: {
           img1: "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-08.jpg",
           img2: "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-01.jpg",
           img3: "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-07.jpg"
         },
         ads_location: {
           state: "M.P.",
           city: "Indore",
           neighbour: "Railway station"
         },
         likes: 33,
         views: 45,
         inspected: true
    })
    // console.log(category)
    // console.log(subcategory)
    const fuelBoxStyle={
        h:"32px",
        w:"max-content", 
        padding:"8px 16px 8px 16px",
        margin:"0 8px 8px 0",
         _hover:{bg:"#C8F8F6"},
          border:"1px solid #cecece",
        borderRadius:"3px", display:"flex", 
        justifyContent:"center", alignItems:"center",
        cursor:"pointer",
    }

    const handleFormSubmit=(e)=>{
      e.preventDefault()
      // console.log(":submit button is active")
      handleAddSellPosts(sellingFormObj)
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
            <FormControl >
              <Box w="430px" py="30px" px="32px" >
                <Box fontSize="16px" fontWeight="bold" lineHeight="24px" my="5px" pb="16px" >INCLUDE SOME DETAILS</Box>
                <SelectBrand/>
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
                <Box>
                  <AddTitle/>
                </Box>
                <hr />
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
                <hr my="15px" />
                <FormControl mb="20px">
                 <Box fontSize="16px" fontWeight="bold" lineHeight="24px" mt="15px" pb="10px" >UPLOAD UPTO 20 PHOTOS</Box>
                 <Grid templateColumns='repeat(4, 1fr)' gap="8px">
                   
                     <Box  h="100px" w="100px" border="2px solid black" display="flex" justifyContent="center" alignItems="center" cursor="pointer" >
                       <label for="productImg">
                        <VStack h="90px" w="90px"pt="20%" >
                         <Icon as={TbCameraPlus}  h="28px" w="28px"/> 
                         <Text fontSize='12px'>Add Photos</Text>
                        </VStack>
                       </label>
                       <Input type="file" id="productImg" name="img" style={{display:"none", visibility:"none"}}/>  
                     </Box>

                   </Grid>
                </FormControl>
                <hr/>
                <FormControl my="15px">
                   <Box fontSize="16px" fontWeight="bold" lineHeight="24px" mt="15px" pb="10px" >CONFIRM YOUR LOCATION</Box>
                   <Tabs isLazy>
                        <TabList>
                          <Tab fontWeight={700} _selected={{color:"black" }}>LIST</Tab>
                          <Tab  fontWeight={400} _selected={{color:"black"}}>CURRENT LOCATION</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            
                          </TabPanel>
                          <TabPanel>
                            {/*append text selct box here  */}
                          </TabPanel>
                        </TabPanels>
                   </Tabs>
                </FormControl>
                <hr/>
                <FormControl my="15px">
                  <Box fontSize="16px" fontWeight="bold" lineHeight="24px" mt="15px" pb="10px" >REVIEW YOUR DETAILS</Box>
                </FormControl>
                <hr/>
                <Box my="15px">
                 <Button fontSize="10px" px="7px" py="4px" borderRadius="3px" colorScheme='blue' onClick={handleFormSubmit}>POST NOW</Button>
                </Box>
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