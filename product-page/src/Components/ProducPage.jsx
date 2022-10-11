import { Box, Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Accordian } from "./Accordian";
import { Card } from "./Card";
import { SortMenu } from "./SortMenu";

export const ProducPage = () => {
  return (
    <Container mt={10} maxW="83.2%">
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
