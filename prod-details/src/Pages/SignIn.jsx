import Carousel from "react-elastic-carousel";
import { Box, Button } from "@chakra-ui/react"
import {AiOutlineMobile} from "react-icons/ai"
import {FcGoogle} from 'react-icons/fc'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  // PopoverHeader,
  PopoverBody,
  // PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  // PopoverAnchor,
} from '@chakra-ui/react'
// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//     { width: 768, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 4 }
//   ];

const items =
  [{
    link: "https://statics.olx.in/external/base/img/loginEntryPointPost.webp",
    title: "Help us become one of the safest places to buy and sell"
  },
  {
    link: "https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp",
    title: "Close deals from the comfort of your home."
  },
  {
    link: "https://statics.olx.in/external/base/img/loginEntryPointChat.webp",
    title: "Keep all your favourites in one place."
  }
  ]



function Login() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button style={{ textAlign: "center" }}>Login</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
        <PopoverBody>
          <Box className="App">
            {/* <hr className="seperator" /> */}
            {/* <div className="carousel-wrapper"> */}
            <Carousel >
              {items.map((item) => (
                <Box key={item}>
                  <img src={item.link} alt="login-img" />
                  <p>{item.title}</p>
                </Box>
              ))}
            </Carousel>
          </Box><br />
          <Box>
            <Button
              size='md'
              height='48px'
              width='280px'
              border='2px'
              borderColor='#002F34.500'
              gap={2}
            >
              <span>
                <AiOutlineMobile/>
                </span>
                Continue With Phone
            </Button>
          </Box><br />
          <Box>
            <Button
              size='md'
              height='48px'
              width='280px'
              border='2px'
              borderColor='#002F34.500'
              gap={3}
            >
              <span><FcGoogle/></span>
              Continue With Google
            </Button>
          </Box>
            <p>OR</p> 

        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
  //fetch array data 
}

export default Login;