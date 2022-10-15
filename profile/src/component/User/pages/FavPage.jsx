
import {Tabs, TabList,Tab, Flex, VStack} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function FavPage() {
  return (
    <>
    <VStack width={"95%"} margin="auto">

    <Flex width={"100%"}  >
     <Tabs width={"200px"}>
        <TabList>
          <Tab  color={"black"} fontSize="16px" >ADS</Tab>
         <Link to="/myfavorites">  <Tab>FAVORITES</Tab></Link>
        </TabList>
      </Tabs>
     </Flex>
     

   
      <Outlet/>

    </VStack>
   

    </>
  );
}
export default FavPage;
