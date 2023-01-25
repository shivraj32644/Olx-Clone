import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
const links = [
  {
    path: "/cars",
    title: "Cars",
  },
  {
    path: "#",
    title: "Motorcycles",
  },
  {
    path: "/mobile",
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

const DownNavbar = () => {
  const [isLargerThan425] = useMediaQuery("(min-width: 776px)");

  if (isLargerThan425) {
    return (
      <Box mt={10}>
        <HStack padding="25px 16px 0" boxShadow=" 0 1px 4px 0 rgb(0 0 0 / 10%)">
          <Box>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                fontWeight="700"
              >
                ALL CATEGORIES
                <ChevronDownIcon fontSize="20px" />
              </MenuButton>
              <MenuList sixe="2xl" zIndex="600">
                <SimpleGrid
                  columns={[1, 2, 4]}
                  spacing="50px"
                  mx="2rem"
                  my="1rem"
                >
                  {/* 1st column */}
                  <Box>
                    <Box _hover={{ color: "#319795" }}>
                      <Text as="b">
                        <Link to="/cars">OLX Autos (Cars)</Link>
                      </Text>
                    </Box>
                    <Box my="1rem">
                      <Box
                        as="b"
                        _hover={{ color: "#319795" }}
                        mt="3rem"
                        mb="1rem"
                      >
                        <Link to="#">Properties</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">For Sale: Houses & Apartments</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">For Rent: Houses & Apartments</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Lands & Plots</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">For Rent: Shops & Offices</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">For Sale: Shops & Offices</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">PG & Guest Houses</Link>
                      </Box>
                    </Box>
                    {/* second row */}
                    <Box my="15px">
                      <Box
                        as="b"
                        _hover={{ color: "#319795" }}
                        mt="3rem"
                        mb="1rem"
                      >
                        <Link to="/mobile">Mobiles</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="/mobile">Mobile Phones</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Accessories</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Tablets</Link>
                      </Box>
                    </Box>
                  </Box>
                  {/* 2nd column */}
                  <Box>
                    <Box>
                      <Box as="b" _hover={{ color: "#319795" }} mb="1rem">
                        <Link to="#">Jobs</Link>
                      </Box>

                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Data entry & Back office</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Sales & Marketing</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">BPO & Telecaller</Link>
                      </Box>

                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Delivery & Collection</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Teacher</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Cook</Link>
                      </Box>

                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Other</Link>
                      </Box>
                    </Box>
                    <Box mt="1rem">
                      <Box as="b" _hover={{ color: "#319795" }} mb="15px">
                        <Link to="#">Bikes</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Motorcycles</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Scooters</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Bicycles</Link>
                      </Box>
                    </Box>
                  </Box>
                  {/* 3rd column */}
                  <Box>
                    <Box mb="15px">
                      <Box mb="15px" as="b" _hover={{ color: "#319795" }}>
                        <Link to="#">Electronics & Appliances</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">TVs, Video - Audio</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Kitchen & Other Appliances</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Computers & Laptops</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Washing Machines </Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Cameras & Lenses</Link>
                      </Box>
                    </Box>

                    <Box>
                      <Box mb="15px" as="b" _hover={{ color: "#319795" }}>
                        <Link to="#"> Furniture</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#"> Sofa & Dining</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Beds & Wardrobes</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Home Decor & Garden </Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#"> Kids Furniture </Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Other Household Items</Link>
                      </Box>
                    </Box>
                  </Box>
                  {/* 4th column */}

                  <Box>
                    <Box mb="15px">
                      <Box mb="15px" as="b" _hover={{ color: "#319795" }}>
                        <Link to="/books">Books, Sports & Hobbies</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="/books">Books</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Gym & Fitness</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Musical Instruments</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#"> Sports Equipment</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Other Hobbies</Link>
                      </Box>
                    </Box>

                    <Box>
                      <Box mb="15px" as="b" _hover={{ color: "#319795" }}>
                        <Link to="#">Fashion</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Men</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Women</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Kids</Link>
                      </Box>
                    </Box>

                    <Box>
                      <Box mb="15px" as="b" _hover={{ color: "#319795" }}>
                        <Link to="#">Services</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Electronics & Computer</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Education & Classes</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Drivers & Taxi</Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Health & Beauty </Link>
                      </Box>
                      <Box _hover={{ color: "#319795" }}>
                        <Link to="#">Other Services</Link>
                      </Box>
                    </Box>
                  </Box>
                </SimpleGrid>
              </MenuList>
            </Menu>
          </Box>
          <HStack lineHeight="3rem">
            {links.map((link) => (
              <Box
                className="navbox"
                _hover={{ color: "#23e5db" }}
                spacing="10px"
              >
                <Link
                  style={{ textDecoration: "none", paddingRight: "5px" }}
                  to={link.path}
                >
                  {link.title}
                </Link>
              </Box>
            ))}
          </HStack>
        </HStack>
      </Box>
    );
  }
};

export default DownNavbar;
