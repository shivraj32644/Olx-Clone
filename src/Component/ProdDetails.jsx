import { Box, useMediaQuery } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import UpNavbar from "../Components/Navbar/UpNavbar";
import ProdBanner from "../Pages/ProductDetails/ProdBanner";
import ProdDescription from "../Pages/ProductDetails/ProdDescription";


const ProductDetails = () => {
  const [isLessThan426] = useMediaQuery('(max-width: 426px)')
  const {product_id} = useParams();
  const val = Number(product_id)
  const fullScreen = {
    columnGap :"20px",
      display : "flex",
      justifyContent:"center",
      paddingRight: "50px",
      paddingLeft : "50px",
      backgroundColor:  "#f2f4f5"
      // backgroundColor:" red"
    }

    const medScreen= {
      display: "grid",
      gridTemplateColumns: "repeat(1,1fr)",
     paddingLeft: "20px",
     paddingRight: "20px",
     backgroundColor: "aliceblue",
      height: "100vh",
      width: "100%"
    }

  return (
    <>
      <UpNavbar/>
    <Box
      mt="90px"
      style={isLessThan426 ? 
        medScreen
        :
        fullScreen
         }
    >

      <Box >
        <ProdBanner id={val} />
      </Box>

      <Box>
        <ProdDescription id={val} />
      </Box>
      </Box>
      </>
  )
}
export default ProductDetails

