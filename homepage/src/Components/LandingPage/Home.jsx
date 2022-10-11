import { Container, Box, Image } from "@chakra-ui/react";
import React from "react";
import UpNavbar from "../Navbar/UpNavbar";
import poster from "./land.png";
const Home = () => {
  return (
    // <Container minW="xl" border="1px solid green">
    //   <Image src={poster} />
    // </Container>
    <div>
      <img src={poster} alt="poster" />
    </div>
  );
};

export default Home;
