import { Container, Box, Image } from "@chakra-ui/react";
import React from "react";
import DownNavbar from "../Navbar/DownNavbar";
import UpNavbar from "../Navbar/UpNavbar";
import FreshRecom from "./FreshRecom";
import poster from "./land.png";
import MobileCarousal from "./MobileCarousal";
const Home = () => {
  return (
    // <Container minW="xl" border="1px solid green">
    //   <Image src={poster} />
    // </Container>
    <div>
      <UpNavbar />
      <DownNavbar />
      <img src={poster} alt="poster" />
      <MobileCarousal />
      <FreshRecom />
    </div>
  );
};

export default Home;
