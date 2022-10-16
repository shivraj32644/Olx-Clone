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
import { MdContentCopy } from "react-icons/md";
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
          <Box width="50%">
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
        </HStack>
      </Box>
    );
  } else {
    // return <h1>Hello</h1>;
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

                <Divider orientation="horizontal" />

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

// const Links = ['Dashboard', 'Projects', 'Team'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function Simple() {

//   );
// }

{
  /* <div class="_2H-tJ">
 
  </div>
  <div class="_1Up9t" data-aut-id="menu">
    <a class="_243cz" rel="nofollow" data-aut-id="btnProfileStartSell">
      <div class="cfoYk">
        <svg
          width="23px"
          height="23px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
        >
          <path
            class="rui-4K4Y7"
            d="M670.72 128l42.667 128h182.613l42.667 42.667v554.667l-42.667 42.667h-768l-42.667-42.667v-554.667l42.667-42.667h182.613l42.667-128h317.44zM609.28 213.333h-194.56l-42.667 128h-201.387v469.333h682.667v-469.333h-201.387l-42.667-128zM512 341.333c117.632 0 213.333 95.701 213.333 213.333s-95.701 213.333-213.333 213.333-213.333-95.701-213.333-213.333 95.701-213.333 213.333-213.333zM512 426.667c-70.613 0-128 57.387-128 128s57.387 128 128 128 128-57.387 128-128-57.387-128-128-128z"
          ></path>
        </svg>
      </div>
      <span>Start selling</span>
    </a>
    <a class="_243cz" rel="nofollow" data-aut-id="btnProfileMyAds">
      <div class="cfoYk">
        <svg
          width="23px"
          height="23px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
        >
          <path
            class="rui-4K4Y7"
            d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"
          ></path>
        </svg>
      </div>
      <span>My ADS</span>
    </a>
    <a class="_243cz" rel="" data-aut-id="btnProfileChat">
      <div class="cfoYk">
        <svg
          width="23px"
          height="23px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
        >
          <path
            class="rui-4K4Y7"
            d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"
          ></path>
        </svg>
      </div>
      <span>Chat</span>
    </a>
    <a
      href="https://help.olx.in/hc/en-us"
      target="_blank"
      rel="noopener noreferrer"
      class="_243cz aTsM5"
      data-aut-id="btnProfileHelp"
    >
      <div class="cfoYk">
        <svg
          width="23px"
          height="23px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
        >
          <path
            class="rui-4K4Y7"
            d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"
          ></path>
        </svg>
      </div>
      <span>Help</span>
    </a>
    <span class="_243cz _1Lsah" data-aut-id="btnProfileLanguage">
      <div class="cfoYk _1u1x6">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          class=""
          fill-rule="evenodd"
        >
          <path
            class="rui-4K4Y7"
            d="M679.214 818.309l-77.189-77.189 78.312-104.494 131.801 52.751c-32 53.915-77.809 98.715-132.927 128.93zM434.425 852.091v-184.941l-38.789-38.789h-212.364c-12.955-36.461-20.364-75.52-20.364-116.364 0-14.235 1.125-28.237 2.792-42.047l53.294 35.53 38.827 2.405 124.51-62.254 58.609 87.854 49.649 13.189 232.728-116.364 16.29-53.915-110.080-192.737c134.75 48.408 231.564 177.106 231.564 328.339 0 37.197-5.973 72.999-16.795 106.667l-162.715-65.125-45.459 12.761-116.364 155.151 3.608 50.695 77.15 77.15c-28.315 7.409-57.871 11.791-88.513 11.791-26.687 0-52.557-3.297-77.575-8.999zM221.945 705.939h134.905v118.303c-54.535-27.23-101.159-67.995-134.905-118.303zM512 162.91c5.663 0 11.17 0.582 16.795 0.853l123.112 215.506-165.43 82.734-58.57-87.893-49.649-13.189-134.982 67.49-57.871-38.555c49.649-132.306 177.106-226.949 326.593-226.949zM512 85.333c-235.249 0-426.667 191.379-426.667 426.667 0 235.249 191.418 426.667 426.667 426.667 235.288 0 426.667-191.418 426.667-426.667 0-235.288-191.379-426.667-426.667-426.667z"
          ></path>
        </svg>
      </div>
      Select language / भाषा चुनें
    </span>
    <div class="_2ahNv">
      <button
        type="button"
        data-aut-id="btnProfileLogin"
        class="rui-39-wj rui-3mpqt rui-1JPTg rui-2NuAg"
      >
        <span>Login</span>
      </button>
    </div>
  </div>
</div>; */
}
