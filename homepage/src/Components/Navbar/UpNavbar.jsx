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
  useDisclosure,
  useColorModeValue,
  Avatar,
  IconButton,
  MenuDivider,
  Text,
  Image,
  Heading,
  Divider,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import "./Navbar.css";

import {
  ChevronDownIcon,
  CheckIcon,
  Search2Icon,
  QuestionOutlineIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { FiCamera } from "react-icons/fi";
import { GiEarthAmerica } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdContentCopy, MdNotificationsNone } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";
// import { IoEarthOutline } from "react-icons/io";
// import { IoEarthSharp } from "react-icons/io";
// import { IoEarthOutline } from "react-icons/io/EarthOutline";

import { ReactNode } from "react";

// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ProfileBtn from "./ProfileBtn";

const UpNavbar = () => {
  const [isLargerThan425] = useMediaQuery("(min-width: 426px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLargerThan425) {
    return (
      <Box
        position="fixed"
        top="0"
        zIndex="900"
        width="100%"
        margin="auto"
        background="#fff"
        boxSizing="border-box"
        boxShadow="0 1px 5px 0 rgb(0 0 0 / 10%)"
        display="block"
        className="NavContainer"
      >
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
            <InputGroup border="1px solid #002f34" borderRadius="4px">
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
          <Box width="45%">
            <Flex
              border="1px solid #002f34"
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
                ENGLISH{" "}
                <ChevronDownIcon
                  // _hover={{ transform: "rotate(180deg)" }}
                  // fontSize="30px"
                  className="turnIcon"
                />
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
          <Box cursor="pointer">
            <RiChat1Line />
          </Box>
          <Box cursor="pointer">
            <MdNotificationsNone />
          </Box>
          <Box>
            {/* <Button
              colorScheme="black"
              variant="link"
              fontSize="17px"
              fontWeight="600"
              // borderBottom=" 2px solid black"
              borderRadius="none"
            >
              Login
            </Button> */}
            <ProfileBtn />
          </Box>
        </HStack>
      </Box>
    );
  } else {
    // ........Responsive code for mobile...........
    // return (
    //   <Box
    //     bg="red"
    //     position="fixed"
    //     top="0"
    //     zIndex="900"
    //     width="100%"
    //     background="#fff"
    //     boxSizing="border-box"
    //     boxShadow="0 1px 5px 0 rgb(0 0 0 / 10%)"
    //     display="block"
    //     className="NavContainer"
    //   >
    //     <HStack p="2" bg="#eff1f3" spacing="18px">
    //       <Box>
    //         <Link to="#" cursor="pointer">
    //           <svg
    //             width="48px"
    //             height="48px"
    //             viewBox="0 0 1024 1024"
    //             data-aut-id="icon"
    //             class=""
    //             fill-rule="evenodd"
    //             color="#002f34"
    //           >
    //             <path
    //               class="rui-4K4Y7"
    //               d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
    //             ></path>
    //           </svg>
    //         </Link>
    //       </Box>
    //       <Box>
    //         <InputGroup border="1px solid #002f34" borderRadius="4px">
    //           <InputLeftElement
    //             pointerEvents="initial"
    //             children={<Search2Icon color="gray.500" />}
    //           />
    //           <Input
    //             type="text"
    //             borderRadius="none"
    //             placeholder="Search city, area or locality.."
    //             bg="white"
    //             focusBorderColor="#23e5db"
    //           />
    //         </InputGroup>
    //       </Box>
    //       <Box width="50%">
    //         <Flex
    //           border="1px solid #002f34"
    //           alignItems="center"
    //           borderRadius="4px"
    //           width="100%"
    //         >
    //           <Input
    //             placeholder="Find Cars, Mobile Phones and more..."
    //             borderRadius="none"
    //             bg="white"
    //             focusBorderColor="#23e5db"
    //           />
    //           <span>
    //             <Button
    //               bg="#002f34"
    //               border="none"
    //               borderRadius="none"
    //               _hover="none"
    //               cursor="pointer"
    //             >
    //               <Search2Icon color="white" />
    //             </Button>
    //           </span>
    //         </Flex>
    //       </Box>
    //       <Box>
    //         <Menu>
    //           <MenuButton
    //             display="flex"
    //             transition="all 0.2s"
    //             borderRadius="md"
    //             fontWeight="600"
    //           >
    //             ENGLISH{" "}
    //             <ChevronDownIcon
    //               // _hover={{ transform: "rotate(180deg)" }}
    //               // fontSize="30px"
    //               className="turnIcon"
    //             />
    //           </MenuButton>
    //           <MenuList>
    //             <MenuItem>
    //               ENGLISH <Spacer />
    //               <span>
    //                 <CheckIcon />
    //               </span>
    //             </MenuItem>
    //             <MenuItem>हिंदी</MenuItem>
    //           </MenuList>
    //         </Menu>
    //       </Box>
    //       {/* <Box cursor="pointer">
    //       <RiChat1Line />
    //     </Box>
    //     <Box cursor="pointer">
    //       <MdNotificationsNone />
    //     </Box> */}
    //       <Box>
    //         <Button
    //           colorScheme="black"
    //           variant="link"
    //           fontSize="17px"
    //           fontWeight="600"
    //           // borderBottom=" 2px solid black"
    //           borderRadius="none"
    //         >
    //           Login
    //         </Button>
    //       </Box>
    //     </HStack>
    //   </Box>
    // );

    return (
      <>
        <Box
          bg="white"
          px={4}
          position="fixed"
          top="0"
          width="100%"
          zIndex="900"
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={2} alignItems={"center"}>
              <IconButton
                size={"md"}
                icon={
                  isOpen ? (
                    <CloseIcon />
                  ) : (
                    <HamburgerIcon fontWeight="1000" fontSize="20px" />
                  )
                }
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
                bg="white"
              />

              <Box>
                <Link to="#" cursor="pointer">
                  <svg
                    width="35px"
                    height="35px"
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
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"text"}
                  cursor={"pointer"}
                  minW={0}
                  color="#002f34"
                >
                  <Flex alignItems="center">
                    <Text px="10px">Lucknow</Text> <HiOutlineLocationMarker />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          {!isOpen ? (
            <Box mb="10px">
              <InputGroup border="1px solid #002f34" borderRadius="3px">
                <InputLeftElement
                  pointerEvents="initial"
                  children={<Search2Icon color="gray.500" />}
                />
                <Input
                  type="text"
                  borderRadius="none"
                  placeholder="Find Cars, Mobile Phones and more..."
                  bg="white"
                  focusBorderColor="#23e5db"
                />
              </InputGroup>
            </Box>
          ) : null}

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Flex alignItems="center">
                <Box width="96px" height="96px" borderRadius="50%" mt="15px">
                  {" "}
                  <Image
                    src=" https://statics.olx.in/external/base/img/avatar_empty_state.png"
                    alt="Profile pic"
                  />
                </Box>

                <Box mx="1rem">
                  <Box>
                    <Heading
                      as="h2"
                      size="md"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Welcome to OLX!
                    </Heading>
                  </Box>

                  <Text
                    color="#5b5c5d"
                    font-family="Roboto,Arial,Helvetica,sans-serif"
                  >
                    Take charge of your buying and selling journey.
                  </Text>
                </Box>
              </Flex>
              <Divider orientation="horizontal" />
              <VStack align="stretch">
                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <FiCamera />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Start selling
                    </Text>
                  </Box>
                </Flex>
                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <MdContentCopy />
                  </Box>
                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      My ADS
                    </Text>
                  </Box>
                </Flex>

                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <RiChat1Line />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Chat
                    </Text>
                  </Box>
                </Flex>

                <Divider color="black" orientation="horizontal" />

                <Flex alignItems="center" my="10px" fontSize="20px">
                  <Box mx="5px">
                    <QuestionOutlineIcon />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Help
                    </Text>
                  </Box>
                </Flex>

                <Flex alignItems="center" my="10px" fontSize="20px" py="8px">
                  <Box mx="5px">
                    <GiEarthAmerica />
                  </Box>

                  <Box mx="10px">
                    <Text
                      fontSize="17px"
                      color="#002f34"
                      font-family="Roboto,Arial,Helvetica,sans-serif"
                    >
                      Select language / भाषा चुनें
                    </Text>
                  </Box>
                </Flex>

                <Button bg="#002f34" color="white" fontSize="15px">
                  <Link to="#">Login</Link>
                </Button>
              </VStack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }
};

export default UpNavbar;
