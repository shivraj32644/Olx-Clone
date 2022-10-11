import { Box, Container, Input, Stack ,Grid, GridItem} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { Accordian } from "./Accordian";
import { Card } from "./Card";
import { SortMenu } from "./SortMenu";
import { Divider } from '@chakra-ui/react'
export const ProducPage = () => {
  const inpref = useRef(null);

  // function handleFocus(e) {
  //   console.log();
  //   // e.target.style="border:5px solid black"
  // }

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

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

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
