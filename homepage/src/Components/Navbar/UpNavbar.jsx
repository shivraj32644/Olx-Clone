import {
  Box,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftElement,
  Button,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import {
  ChevronDownIcon,
  CheckIcon,
  Search2Icon,
  AddIcon,
} from "@chakra-ui/icons";

import DownNavbar from "./DownNavbar";

const UpNavbar = () => {
  return (
    <Box>
      <HStack p="2" bg="#eff1f3" spacing="18px">
        <Box>
          <Link to="#" cursor="pointer">
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
              color="#002f34"
            >
              <path
                class="rui-4K4Y7"
                d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
              ></path>
            </svg>
          </Link>
        </Box>
        <Box>
          <InputGroup border="2px solid #002f34" borderRadius="4px">
            <InputLeftElement
              pointerEvents="initial"
              children={<Search2Icon color="gray.500" />}
            />
            <Input
              type="text"
              borderRadius="none"
              placeholder="Search city, area or locality.."
              bg="white"
              focusBorderColor="#23e5db"
            />
          </InputGroup>
        </Box>
        <Box width="50%">
          <Flex
            border="2px solid #002f34"
            alignItems="center"
            borderRadius="4px"
            width="100%"
          >
            <Input
              placeholder="Find Cars, Mobile Phones and more..."
              borderRadius="none"
              bg="white"
              focusBorderColor="#23e5db"
            />
            <span>
              <Button
                bg="#002f34"
                border="none"
                borderRadius="none"
                _hover="none"
                cursor="pointer"
              >
                <Search2Icon color="white" />
              </Button>
            </span>
          </Flex>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              display="flex"
              transition="all 0.2s"
              borderRadius="md"
              fontWeight="600"
            >
              ENGLISH <ChevronDownIcon fontSize="30px" />
            </MenuButton>

            <MenuList>
              <MenuItem>
                ENGLISH <Spacer />
                <span>
                  <CheckIcon />
                </span>
              </MenuItem>
              <MenuItem>हिंदी</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        {/* <Box cursor="pointer">
          <RiChat1Line />
        </Box>
        <Box cursor="pointer">
          <MdNotificationsNone />
        </Box> */}
        <Box>
          <Button
            colorScheme="black"
            variant="link"
            fontSize="17px"
            fontWeight="600"
            // borderBottom=" 2px solid black"
            borderRadius="none"
          >
            Login
          </Button>
        </Box>
        <Box>
          <Button
            bg="white"
            _hover="none"
            borderRadius="30px"
            p="17px"
            borderTop="5px solid #23e5db"
            borderLeft="5px solid #ffce32"
            borderRight="5px solid #3a77ff"
            borderBottom="5px solid #ffce32"
          >
            <AddIcon mr="5px" />
            SELL
          </Button>
        </Box>
      </HStack>
      <DownNavbar />
    </Box>
  );
};

export default UpNavbar;
