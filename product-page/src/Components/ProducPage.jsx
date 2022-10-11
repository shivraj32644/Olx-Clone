import { Box, Container, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { Accordian } from "./Accordian";
import { Card } from "./Card";
import { SortMenu } from "./SortMenu";

export const ProducPage = () => {
  const inpref = useRef(null)

  // function handleFocus(e) {
  //   console.log();
  //   // e.target.style="border:5px solid black"
  // }


  return (
    <Container mt={10} maxW="83.2%">

      {/* <Input 
        onFocus={handleFocus}
      ref={inpref}
        placeholder='Here is a sample placeholder'
        size='sm'
      /> */}


      <Stack direction="row">
        <Box maxH="fit-content" w="25%">
          <Accordian></Accordian>
        </Box>
        {/* <Box>
          <SortMenu />
        </Box> */}
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
        </Box>
      </Stack>
    </Container>
  );
};
