import {
  Box,
  Flex,
  HStack,
  Image,
  Input,
  Menu,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { RiChat1Line } from "react-icons/ri";
import { MdNotificationsNone } from "react-icons/md";

import DownNavbar from "./DownNavbar";

const UpNavbar = () => {
  return (
    <Box>
      <HStack p="4" bg="#eff1f3">
        <Box>
          <Link to="#">
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              class=""
              fill-rule="evenodd"
            >
              <path
                class="rui-4K4Y7"
                d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
              ></path>
            </svg>
          </Link>
        </Box>
        <Box>
          <Flex border="1px solid black" alignItems="center">
            <span>
              <BiSearch />
            </span>
            <Input outline="none" placeholder="Serach here" />
            <span>
              <Menu></Menu>
            </span>
          </Flex>
        </Box>
        <Box>
          <Flex border="1px solid black" alignItems="center">
            <Input width="100%" border="none" placeholder="Serach here" />
            <span>
              <BiSearch />
            </span>
          </Flex>
        </Box>
        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ENGLISH
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>ENGLISH</AccordionPanel>
              <AccordionPanel pb={4}>HINDI</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <RiChat1Line />
        </Box>
        <Box>
          <MdNotificationsNone />
        </Box>
        <Box>Profile</Box>
        <Box>
          <Button bg="white">+ SELL</Button>
        </Box>
      </HStack>
      <DownNavbar />
    </Box>
  );
};

export default UpNavbar;
