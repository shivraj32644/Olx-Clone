import { Container, Box, Image } from "@chakra-ui/react";
import React from "react";
import DownNavbar from "../Navbar/DownNavbar";
import UpNavbar from "../Navbar/UpNavbar";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import FreshRecom from "./FreshRecom";
import poster from "./Images/land.png";
import MobileCarousal from "./MobileCarousal";
const Home = () => {
  return (
    <div>
      <UpNavbar />
      <DownNavbar />
      <img src={poster} alt="poster" />
      <MobileCarousal />
      <FreshRecom />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
