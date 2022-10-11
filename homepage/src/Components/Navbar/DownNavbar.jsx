import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuDivider,
  SimpleGrid,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              // borderWidth="1px"
              // _hover={{ bg: "gray.400" }}
              // _expanded={{ bg: "blue.400" }}
              // _focus={{ boxShadow: "outline" }}
              fontWeight="700"
            >
              ALL CATEGORIES
              <ChevronDownIcon fontSize="20px" />
            </MenuButton>
            <MenuList sixe="xl">
              <SimpleGrid columns={[1, 2, 4]}>
                <Box>
                  <MenuItem>OLX Autos (Cars)</MenuItem>
                </Box>
                <Box>
                  <MenuItem>Cars</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                </Box>
                <Box>
                  <MenuItem>Electronics & Appliances</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                </Box>
                <Box>
                  <MenuItem>Fashion</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                  <MenuItem>Jobs</MenuItem>
                </Box>
              </SimpleGrid>
            </MenuList>
          </Menu>
        </Box>
        <HStack shadow="md" lineHeight="3rem">
          {links.map((link) => (
            <Box
              className="navbox"
              _hover={{ color: "#23e5db" }}
              spacing="15px"
            >
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
