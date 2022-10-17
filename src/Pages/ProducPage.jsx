import {
  Box,
  Container,
  Input,
  Stack,
  Grid,
  GridItem,
  Button,
  getSlideTransition,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Accordian } from "../Components/Accordian";
import { Card } from "../Components/Card";
import { SortMenu } from "../Components/SortMenu";
import { Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooks,
  fetchCars,
  fetchData,
  fetchMobile,
  getData,
} from "../data_redux/action";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { ParamContext } from "../Context/CarParamContext";
import { SkelotonCard } from "../Components/Skeleton";
// import { useContext } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { CarDrawer } from "../Components/CarDrawer";
import UpNavbar from "../Components/Navbar/UpNavbar";
import DownNavbar from "../Components/Navbar/DownNavbar";
import SellButton from "../Components/LandingPage/SellButton";
import Footer2 from "../Components/LandingPage/Footer2";
import Footer1 from "../Components/LandingPage/Footer1";
// import {CarParamContext} from '../Context/CarParamContext'

export const ProducPage = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.reducer);
  const { globalParams } = useSelector((store) => store.ParamReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const { axiosObject } = useContext(ParamContext);
  const { setLimit } = useContext(ParamContext);
  // console.log(axiosObject);
  useEffect(() => {
    setSearchParams(globalParams);
  }, [globalParams]);

  useEffect(() => {
    dispatch(fetchData(axiosObject));
  }, [axiosObject]);

  return (
    <>
      <UpNavbar />
      <SellButton/>
      <Box mt={1}>
      <DownNavbar />

      </Box>
      <Container mt={10} maxW="84%">
        <Grid
          templateAreas={`"nav footer" "nav main"`}
          gridTemplateColumns={{
            base: "0",
            sm: "0 ",
            md: "303px 1fr",
            lg: "303px 1fr",
          }}
          gridTemplateRows={"30px 1fr 30px"}
          gap="2"
        >
          {variant ? (
            <>
              <GridItem
                pr="5"
                borderBottom=" 1px solid  rgba(0, 0, 0, 0.30)"
                // textAlign="right"
                area={"footer"}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <CarDrawer />
                <SortMenu />
              </GridItem>

              <Divider orientation="horizontal" />

              <GridItem
                display="grid"
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                columnGap="15px"
                rowGap="15px"
                pl="2"
                area={"main"}
              >
                {loading ? (
                  <>
                    {" "}
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                  </>
                ) : (
                  data?.map((e) => (
                    <NavLink key={e.id} to={`/productDetails/${e.id}`}>
                      <Card
                        key={e.id}
                        img={e.published_ads.cars[0].car_images.img1}
                        des={e.published_ads.cars[0].car_name}
                        price={e.published_ads.cars[0].set_price}
                        city={e.published_ads.cars[0].ads_location.city}
                        state={e.published_ads.cars[0].ads_location.state}
                        date={e.published_ads.cars[0].date_from}
                        premium={e.isPremium}
                      />
                    </NavLink>
                  ))
                )}
              </GridItem>
            </>
          ) : (
            <>
              <GridItem pl="2" area={"nav"}>
                <Accordian></Accordian>
              </GridItem>

              <GridItem
                pr="5"
                borderBottom=" 1px solid  rgba(0, 0, 0, 0.30)"
                textAlign="right"
                area={"footer"}
              >
                <SortMenu />
              </GridItem>

              <Divider orientation="horizontal" />

              <GridItem
                display="grid"
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                columnGap="15px"
                rowGap="15px"
                pl="2"
                area={"main"}
              >
                {loading ? (
                  <>
                    {" "}
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                    <SkelotonCard loading={loading} />
                  </>
                ) : (
                  data?.map((e) => (
                    <NavLink key={e.id} to={`/productDetails/${e.id}`}>
                      <Card
                        key={e.id}
                        img={e.published_ads.cars[0].car_images.img1}
                        des={e.published_ads.cars[0].car_name}
                        price={e.published_ads.cars[0].set_price}
                        city={e.published_ads.cars[0].ads_location.city}
                        state={e.published_ads.cars[0].ads_location.state}
                        date={e.published_ads.cars[0].date_from}
                        premium={e.isPremium}
                      />
                    </NavLink>
                  ))
                )}
              </GridItem>
              {/* <Box w={"20%"} m="auto" mb="80px"> 
              <Button mb="80px" mt={"20px"} colorScheme='blackAlpha' variant='outline' border="4px solid black"  onClick={()=>setLimit(50)} >Load More</Button>


                </Box> */}
            </>
          )}
        </Grid>

      </Container>
      <Footer1/>
      <Footer2/>
    </>
  );
};
