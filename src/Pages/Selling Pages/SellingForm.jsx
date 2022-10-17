import {Box, Button, FormControl, FormLabel, Grid, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Select, Tab, TabList, TabPanel, TabPanels, Tabs, textDecoration, VStack }from "@chakra-ui/react"
import { Form, Link, Navigate, useNavigate } from "react-router-dom"
import {ArrowBackIcon, CheckIcon} from "@chakra-ui/icons"
import { useContext, useState } from "react"
import { CategoryDataContext } from "../../Context/AuthContext/SellingDetail"
import { Link as ChakraLink, Text } from '@chakra-ui/react'
import { BiRupee } from "react-icons/bi"
import {TbCameraPlus} from "react-icons/tb"
import SelectBrand from "./Form Components/SelectBrand"
import AddTitle from "./Form Components/AddTitle"
import handleAddSellPosts from "./axios.jsx"
import KmInput from "./Form Components/KmInput"
import YearInput from "./Form Components/YearInput"
import DescriptionInput from "./Form Components/DescriptionInput"
import SelectLocation from "./Form Components/SelectLocation"
import PriceInput from "./Form Components/PriceInput"



const SellingForm=()=>{
  const [user, setUser]= useState(
    {
      "id": 1,
      "user_id": "bbdd236b-5dc5-4a85-99dc-2019ee7f1b17",
      "img_url": "https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg",
      "full_name": "Katrina Mills",
      "email_id": "Katrina_Mills@hotmail.com",
      "followers": 338,
      "following": 88,
      "login": false,
      "isPremium": true,
      "favourite_ads": [
        {
          "fav_user_id": "",
          "fav_ad_id": ""
        }
      ],
      "messaged_to": [
        {
          "msg_user_id": ""
        }
      ],
      "published_ads": [
        {
          "ad_id": "b0d96509-e7b7-4e83-a2b5-2e99da32c0dd",
          "ad_active": "active",
          "product_name": "Skoda Fabia",
          "date_from": "JUN 5, 22",
          "date_to": "DEC 8, 22 ",
          "category": "OLX Auto(Cars)",
          "category_type": "Cars",
          "car_name": "Skoda Fabia",
          "car_brand": "Skoda",
          "car_varient": "Passenger Van",
          "year_buy": 2001,
          "fuel": "CNG",
          "transmission": "Manual",
          "km_driven": 89484,
          "no_of_oweners": 3,
          "key_feature": "veniam nostrud est",
          "description": "Iam willing to sell my lovely car due to financial issues want a buyer fast giving amazing offer for first comer.",
          "set_price": 918000,
          "car_images": {
            "img1": "https://apollo-singapore.akamaized.net/v1/files/m8vuc9zh3zzb2-IN/image;s=300x600;q=60",
            "img2": "https://in.fcgapi.com/image/olxautos-prd-inspection-images-ap-southeast-1/21a4a6bf-277a-424c-b02b-e4e153ef661d/209361/850/478?watermark=false&country=in&cache=true",
            "img3": "https://apollo-singapore.akamaized.net/v1/files/ow03morzl3mu3-IN/image;s=400x0"
          },
          "ads_location": {
            "state": "M.P.",
            "city": "Indore",
            "neighbour": "Railway station"
          },
          "likes": 33,
          "views": 45,
          "inspected": true
        },
        {
          "ad_id": "380fcb56-365d-4dee-9472-c86b82408635",
          "ad_active": "inactive",
          "product_name": "Bugatti Model S",
          "date_from": "JUN 5, 22",
          "date_to": "DEC 8, 22 ",
          "category": "OLX Auto(Cars)",
          "category_type": "Cars",
          "car_name": "Bugatti Model S",
          "car_brand": "A4",
          "car_varient": "Convertible",
          "year_buy": 2011,
          "fuel": "Petrol",
          "transmission": "Automatic",
          "km_driven": 55439,
          "no_of_oweners": 1,
          "key_feature": "sunt aute est",
          "description": "Amazing car with good experience of driving not too old with good condition contact me fast for best offer",
          "set_price": 354700,
          "car_images": {
            "img1": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-08.jpg",
            "img2": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-01.jpg",
            "img3": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-07.jpg"
          },
          "ads_location": {
            "state": "Rajasthan",
            "city": "Jaipur",
            "neighbour": "Railway station"
          },
          "likes": 20,
          "views": 17,
          "inspected": true
        },
        {
          "ad_id": "56acebe2-11d5-4f4a-b51b-f98af4ff9a15",
          "ad_active": "inactive",
          "product_name": "Bentley LeBaron",
          "date_from": "NOV 9, 22",
          "date_to": "DEC 8, 22 ",
          "category": "OLX Auto(Cars)",
          "category_type": "Cars",
          "car_name": "Bentley LeBaron",
          "car_brand": "Wrangler",
          "car_varient": "Extended Cab Pickup",
          "year_buy": 2003,
          "fuel": "CNG",
          "transmission": "Manual",
          "km_driven": 30579,
          "no_of_oweners": 1,
          "key_feature": "exercitation proident officia",
          "description": "Want to sell this car, with lot of amazing feature buyer can inspect first then buy call me aor msg me urgent to sell so best deal available.",
          "set_price": 568200,
          "car_images": {
            "img1": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-08.jpg",
            "img2": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-01.jpg",
            "img3": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-07.jpg"
          },
          "ads_location": {
            "state": "M.P.",
            "city": "Bhopal",
            "neighbour": "Railway station"
          },
          "likes": 13,
          "views": 35,
          "inspected": false
        },
        {
          "ad_id": "9b9dad2f-05f9-436c-aa8a-746c97d21d07",
          "ad_active": "active",
          "product_name": "Kia XTS",
          "date_from": "NOV 9, 22",
          "date_to": "DEC 8, 22 ",
          "category": "OLX Auto(Cars)",
          "category_type": "Cars",
          "car_name": "Kia XTS",
          "car_brand": "Fortwo",
          "car_varient": "Minivan",
          "year_buy": 2008,
          "fuel": "CNG",
          "transmission": "Automatic",
          "km_driven": 21763,
          "no_of_oweners": 3,
          "key_feature": "labore non cillum",
          "description": "Want to sell this car, with lot of amazing feature buyer can inspect first then buy call me aor msg me urgent to sell so best deal available.",
          "set_price": 470500,
          "car_images": {
            "img1": "https://imgd.aeplcdn.com/0x0/n/cw/ec/100121/i20-n-line-exterior-right-front-three-quarter-12.jpeg?isig=0",
            "img2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWHQX9wdXc_cRhBFsOT4SKoqI36Rm2WW00G10Lwx2cqfyCd3pEbs9Md3Phmpglqhw6l8&usqp=CAU",
            "img3": "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/09/02/966881-i20nline.jpg"
          },
          "ads_location": {
            "state": "U.P.",
            "city": "Jaunpur",
            "neighbour": "Railway station"
          },
          "likes": 30,
          "views": 21,
          "inspected": false
        },
        {
          "ad_id": "1dd53afe-d9d5-4bfa-8257-f9b5f0ec5f23",
          "ad_active": "active",
          "product_name": "Lamborghini Alpine",
          "date_from": "NOV 9, 22",
          "date_to": "DEC 8, 22 ",
          "category": "OLX Auto(Cars)",
          "category_type": "Cars",
          "car_name": "Lamborghini Alpine",
          "car_brand": "Cruze",
          "car_varient": "Passenger Van",
          "year_buy": 2009,
          "fuel": "Diesel",
          "transmission": "Manual",
          "km_driven": 65785,
          "no_of_oweners": 2,
          "key_feature": "sunt non",
          "description": "Purchased this car on mu birthday but now buying new one bored with this one if you are intrested to buy contact soon cover and interior will be free.",
          "set_price": 421600,
          "car_images": {
            "img1": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-08.jpg",
            "img2": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-01.jpg",
            "img3": "https://www.renderhub.com/markos3d/srt-hellcat-dodge-challenger-2021/srt-hellcat-dodge-challenger-2021-07.jpg"
          },
          "ads_location": {
            "state": "U.P.",
            "city": "Lucknow",
            "neighbour": "Gomti nagar"
          },
          "likes": 23,
          "views": 19,
          "inspected": false
        },
        {
          "ad_id": "UTIBINB1020",
          "category": "Books Sports & Hoobies",
          "category_type": "Books",
          "ad_active": "active",
          "product_name": "cupidatat consectetur proident tempor",
          "ad_title": "cupidatat consectetur proident tempor",
          "description": "Labore sint fugiat sunt nostrud amet eiusmod esse velit et minim deserunt culpa. Aliquip qui do pariatur sint non.",
          "set_price": 200,
          "books_images": {
            "img1": "https://m.media-amazon.com/images/I/51d+PgAtmUL._SY407_BO1,204,203,200_.jpg",
            "img2": "https://images-eu.ssl-images-amazon.com/images/I/71YC9m2412L._AC_UL160_SR160,160_.jpg"
          },
          "ads_location": {
            "state": "U.P.",
            "city": "Jaunpur",
            "neighbour": "Railway station"
          }
        },
        {
          "ad_id": "SBININBB701",
          "ad_active": "active",
          "product_name": "eiusmod sit aliqua minim sunt",
          "category": "Books Sports & Hoobies",
          "category_type": "Books",
          "ad_title": "eiusmod sit aliqua minim sunt",
          "description": "Quis amet veniam minim aliquip elit occaecat anim reprehenderit cillum nostrud. Sit id pariatur consequat nulla cupidatat adipisicing ipsum aliquip in et labore veniam.",
          "set_price": 400,
          "books_images": {
            "img1": "https://images.indianexpress.com/2020/04/books_759.jpg",
            "img2": "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"
          },
          "ads_location": {
            "state": "U.P.",
            "city": "Jaunpur",
            "neighbour": "Railway station"
          }
        },
        {
          "ad_id": "SBININBB798",
          "ad_active": "active",
          "product_name": "minim est eiusmod cupidatat ad in deserunt",
          "category": "Books Sports & Hoobies",
          "category_type": "Books",
          "ad_title": "minim est eiusmod cupidatat ad in deserunt",
          "description": "Amet culpa veniam et do ea duis. Est aute do velit nulla aliquip proident deserunt veniam officia elit. Exercitation dolor cillum tempor ad velit laboris labore labore exercitation nulla ut laborum. Deserunt laborum enim culpa consequat laboris.",
          "set_price": 650,
          "books_images": {
            "img1": "https://m.media-amazon.com/images/I/81CxXmRFnBL.jpg",
            "img2": "https://cdn.shopify.com/s/files/1/0261/7291/5805/products/9781797205151.jpg?v=1635886444"
          },
          "ads_location": {
            "state": "M.P.",
            "city": "Indore",
            "neighbour": "Railway station"
          }
        },
        {
          "ad_active": "active",
          "product_name": "irure voluptate quis anim",
          "ad_id": "AXISINBB067",
          "category": "Books Sports & Hoobies",
          "category_type": "Books",
          "ad_title": "irure voluptate quis anim",
          "description": "Fugiat enim aliquip commodo laborum irure tempor aute do nulla tempor sunt. Nisi sit do nulla adipisicing cupidatat dolore elit ipsum proident eiusmod veniam elit. Nisi irure et laboris ea id. Culpa mollit minim quis ullamco sit veniam aliqua deserunt nulla voluptate.",
          "set_price": 550,
          "books_images": {
            "img1": "https://m.media-amazon.com/images/I/81CxXmRFnBL.jpg",
            "img2": "https://cdn.shopify.com/s/files/1/0261/7291/5805/products/9781797205151.jpg?v=1635886444"
          },
          "ads_location": {
            "state": "M.P.",
            "city": "Indore",
            "neighbour": "Railway station"
          }
        },
        {
          "ad_active": "active",
          "product_name": "Google Pixel 6A.",
          "ad_id": "1FSfyxTv5NHe5jgchbWpWu1UGQ4mwLUDAi",
          "category": "Mobiles",
          "category_type": "Mobile Phones",
          "ad_title": "Google Pixel 6A.",
          "description": "Est adipisicing dolor consectetur sunt eiusmod. Do sint qui cillum proident labore incididunt officia ea Lorem ea.",
          "set_price": 5250,
          "mobile_images": {
            "img1": "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662441614/Croma%20Assets/Communication/Mobiles/Images/249619_by8njn.png/mxw_640,f_auto",
            "img2": "https://images.priceoye.pk/samsung-galaxy-a73-pakistan-priceoye-1y28r.jpg"
          },
          "ads_location": {
            "state": "Jharkhand",
            "city": "Ranchi",
            "neighbour": "Railway station"
          }
        },
        {
          "ad_active": "inactive",
          "product_name": "Google Pixel 6A.",
          "ad_id": "16aHyKWoU8HhKYG5sCMrE8x4RkWM5Badaw",
          "category": "Mobiles",
          "category_type": "Mobile Phones",
          "ad_title": "Google Pixel 6A.",
          "description": "Reprehenderit ex esse sunt et sunt eu commodo dolore officia pariatur ullamco non reprehenderit. Ea adipisicing occaecat nostrud est anim excepteur Lorem aliqua ad eu ullamco ipsum laborum est.",
          "set_price": 5350,
          "mobile_images": {
            "img1": "https://images.hindustantimes.com/img/2021/06/08/1600x900/IMG_5223_1623145084295_1623145098953.jpg",
            "img2": "https://cms-assets.bajajfinserv.in/is/image/bajajfinance/realme-5g-mobile-in-india?scl=1"
          },
          "ads_location": {
            "state": "Jharkhand",
            "city": "Ranchi",
            "neighbour": "Railway station"
          }
        },
        {
          "ad_active": "active",
          "product_name": "OnePlus 9.",
          "ad_id": "1NM3ujHcGuCYa9AdSxbkN6iEACrkSMQ4Nz",
          "category": "Mobiles",
          "category_type": "Mobile Phones",
          "ad_title": "OnePlus 9.",
          "description": "Ad et eu aliquip adipisicing laboris. Tempor consequat do ex enim. Duis est dolore in nostrud aute consectetur aliqua quis tempor ex enim fugiat id velit. Est Lorem Lorem esse sint sint nulla.",
          "set_price": 9000,
          "mobile_images": {
            "img1": "https://images.hindustantimes.com/img/2021/06/08/1600x900/IMG_5223_1623145084295_1623145098953.jpg",
            "img2": "https://cms-assets.bajajfinserv.in/is/image/bajajfinance/realme-5g-mobile-in-india?scl=1"
          },
          "ads_location": {
            "state": "Karnatak",
            "city": "Banglore",
            "neighbour": "Railway station"
          }
        }
      ]
    }  )
    const {categoryObj}=useContext(CategoryDataContext)
    const {category,subcategory}=categoryObj
  const [sellingFormObj, setSellingFormObj] = useState({
      
   

         user_id: "1",
         ad_id: "2e99da32c0dd",
         ad_active: true,
         date_from: "NOV 9, 22",
         date_to: "DEC 8, 22 ",
         category: "OLX Auto(Cars)",
         category_type: "Cars",
         car_name: " Nano",
         car_model: "Nano model",
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
  

  const nav = useNavigate()
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

      handleAddSellPosts(sellingFormObj, user)
      nav('/myads');
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
                <YearInput/>

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

                <KmInput/>

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
                  <DescriptionInput/>
                </Box>
                <hr />
                <PriceInput/>
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
                            <SelectLocation/>
                          </TabPanel>
                          <TabPanel>
                            <SelectLocation/>
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