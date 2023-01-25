import { Tabs, TabList, Tab, Flex, VStack } from "@chakra-ui/react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import UpNavbar from "../../../Components/Navbar/UpNavbar";
// import MyFav from "./MyFav";

function FavPage() {
  //   let {loading,error,user} = userData

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      <UpNavbar />
      <VStack width={"95%"} margin="auto">
        <Flex width={"100%"}>
          <Tabs variant="unstyled">
            <TabList borderBottom="1px solid #cfcdcd">
              <Link to="/myads">
                <Tab
                  fontSize={"14px"}
                  _selected={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "",
                    borderBottom: "5px solid",
                  }}
                >
                  ADS
                </Tab>
              </Link>
              <Link to="/myfavorites">
                <Tab
                  fontSize={"14px"}
                  _selected={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "",
                    borderBottom: "5px solid",
                  }}
                >
                  FAVOURITES
                </Tab>
              </Link>
            </TabList>
          </Tabs>
        </Flex>

        <Outlet />
      </VStack>
    </>
  );
}
export default FavPage;
