import { Box, Container, Input, Stack ,Grid, GridItem} from "@chakra-ui/react";
import React from "react";
import { Accordian } from "./Accordian";
import { Card } from "./Card";
import { SortMenu } from "./SortMenu";
import { Divider } from '@chakra-ui/react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, getData } from "../redux/action";
import { Link } from "react-router-dom";

export const ProducPage = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((store) => store);


  const params = {
    id: 1,
    
  }

  function getparams(payload) {
    
    return {}
  }

  useEffect(() => {
    dispatch(fetchData({_page:1,_limit:10,_sort:"published_ads.cars[0].set_price",_order:"asc" ,id:""}));
    // dispatch(fetchData({_page:1,_limit:30,_sort:"",_order:"" }));
  },[])

  return (
    <Container mt={10} maxW="84%">
      <Grid
        templateAreas={`"nav footer" "nav main"`}
        gridTemplateColumns={"304px 1fr"}
        gridTemplateRows={"30px 1fr 30px"}
       
        gap="2"
      
      >
        <GridItem  pl="2"  area={"nav"}>

          <Accordian></Accordian>
          
        </GridItem>
        <GridItem pr="5" borderBottom=" 1px solid  rgba(0, 0, 0, 0.30)" textAlign="right" area={"footer"}>

          <SortMenu />
          
        </GridItem>

        <Divider orientation='horizontal' />

        <GridItem display="grid"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          columnGap="15px"
          rowGap="15px" pl="2"  area={"main"}>

          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}

           {
            data?.map((e) => (
              
              <Card key={e.id} img={e.published_ads.cars[0].car_images.img1}
                des={e.published_ads.cars[0].description}
                price={e.published_ads.cars[0].set_price}
                city={e.published_ads.cars[0].ads_location.city }
                state={e.published_ads.cars[0].ads_location.state}
                date={e.published_ads.cars[0].date_from}
                premium={e.isPremium}
              />
              
            ))
          } 

        </GridItem>
      </Grid>

      <Stack direction="row">
        <Box maxH="fit-content" w="25%">
          
        </Box>
       
        <Box
          w="90%"
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          columnGap="15px"
          rowGap="15px"
        >
         
        </Box>
      </Stack>
    </Container>
  );
};
