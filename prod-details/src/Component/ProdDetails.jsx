import { Box} from "@chakra-ui/react";
// import { GiCircle } from "react-icons/gi";
// import { MdArrowForwardIos } from "react-icons/md";
import ProdBanner from "../Pages/ProductDetails/ProdBanner";
import ProdDescription from "../Pages/ProductDetails/ProdDescription";
const ProductDetails = () => {
  return (
    <Box display="flex" justifyContent="space-between" gap="10"
    paddingLeft="50px"
   paddingRight="50px" >


      <Box >
        <ProdBanner />
      </Box>
         
          <Box>
            <ProdDescription />
          </Box>
    </Box>
  )
}
export default ProductDetails

