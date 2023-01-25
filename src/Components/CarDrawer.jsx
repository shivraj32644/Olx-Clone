import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
// import {} from '@chakra-ui/icons'
import React from "react";
import { Accordian } from "./Accordian";
import { TbMist } from "react-icons/tb";

export function CarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("bottom");

  return (
    <>
      <Button
        colorScheme="white"
        color={"black"}
        fontSize="30px"
        onClick={onOpen}
      >
        <TbMist />
      </Button>
      <Drawer
        size={"lg"}
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">FILTERS & SORT</DrawerHeader>
          <DrawerBody>
            <Accordian />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
