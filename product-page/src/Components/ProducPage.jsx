import { Box, Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Accordian } from "./Accordian";
import { Card } from "./Card";

export const ProducPage = () => {
  return (
    <Container mt={10} maxW="90%"  border="1px solid black">
      <Stack spacing={1} direction="row"  border="1px solid black">
        <Box maxH="fit-content" w="30%" border="1px solid black">
          <Accordian></Accordian>
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(3,1fr)" gap={5} h={1200} width="70%" border="1px solid black">




          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Box>
      </Stack>
    </Container>
  );
};
