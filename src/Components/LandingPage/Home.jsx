import { Button } from "@chakra-ui/react";
import React from "react";
import DownNavbar from "../Navbar/DownNavbar";
import UpNavbar from "../Navbar/UpNavbar";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import FreshRecom from "./FreshRecom";
import poster from "./Images/land.png";
import MobileCarousal from "./MobileCarousal";
import SellButton from "./SellButton";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  return (
    <div className="Container">
      {/* Scroll to top button */}

      <ScrollToTop
        smooth="true"
        top={80}
        style={{
          marginBottom: "450px",
          marginRight: "50%",
          borderRadius: "60px",
        }}
        component={
          <Button
            style={{
              color: "#002f34",
              boxShadow: "0 2px 8px 0 rgb(0 0 0 / 15%)",
              paddingX: "10px",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "50px",
              backgroundColor: "white",
            }}
          >
            <IoIosArrowUp Size="15px" paddingRight="3px" /> Back to top
          </Button>
        }
      />

      <SellButton />
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
