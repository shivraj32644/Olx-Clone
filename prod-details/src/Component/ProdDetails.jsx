import { Box } from "@chakra-ui/react";
import ProdBanner from "../Pages/ProductDetails/ProdBanner";
import ProdDescription from "../Pages/ProductDetails/ProdDescription";
const ProductDetails = () => {
  return (
    <Box  
    gap="6"
    display="flex"
    justifyContent="center"
      paddingLeft="50px"
      paddingRight="50px"
      // width="100%"
      bg="#f2f4f5"
    //  const breakpoints = {{
    //   sm: '30em',
    //   md: '48em',
    //   lg: '62em',
    //   xl: '80em',
    //   '2xl': '96em',
    //  }} 
    >


      <Box width="-moz-min-content">
        <ProdBanner />
      </Box>

      <Box>
        <ProdDescription />
      </Box>
    </Box>
  )
}
export default ProductDetails

