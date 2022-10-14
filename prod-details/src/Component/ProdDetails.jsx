import { Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

const Slider= ()=>{
  return(
    <Box>
    <Carousel autoPlay >
    <div>
      <img
        alt=""
        src="https://statics.olx.in/external/base/img/loginEntryPointPost.webp"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img
        alt=""
        src="https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp"
      />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img
        alt=""
        src="https://statics.olx.in/external/base/img/loginEntryPointChat.webp"
      />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
    </Box>
  )
}
export default Slider