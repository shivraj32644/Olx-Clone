import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    path: "#",
    title: "Cars",
  },
  {
    path: "#",
    title: "Motorcycles",
  },
  {
    path: "#",
    title: "Mobile Phones",
  },
  {
    path: "#",
    title: "For Sale: Houses & Apartments",
  },
  {
    path: "#",
    title: "Scooters",
  },
  {
    path: "#",
    title: "Commercial & Other Vehicles",
  },
  {
    path: "#",
    title: "For Rent: Houses & Apartments",
  },
];

const styles = {
  _hover: {
    color: "red",
  },
};

const DownNavbar = () => {
  return (
    <Box>
      <HStack mt="5px" border="1px solid green">
        <Box>
          <Link></Link>
        </Box>
        <HStack shadow="md" lineHeight="3rem">
          {links.map((link) => (
            <Box className="navbox" style={styles}>
              <Link style={{ textDecoration: "none" }} to={link.path}>
                {link.title}
              </Link>
            </Box>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};

export default DownNavbar;
