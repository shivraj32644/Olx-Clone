import {
  Box,
  Flex,
  Image,
  Stack,
  Button,
  Text,
  Spacer,
  HStack,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Tab,
  Tabs,
  TabList,
  Divider,
  Skeleton,
  FormControl,
  Input,
  VStack,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded, BiErrorCircle } from "react-icons/bi";
import { AiOutlineEye, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import LoadingPage from "../util/Loading";
import { useEffect } from "react";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
function MyAds({ userData, getUser }) {
  // const getUser = () => {
  //   let id = "1";
  //   Dispatcher(OnLoading());
  //   fetch(`http://localhost:5000/data/${id}`)
  //     .then((res) => {
  //       res
  //         .json()
  //         .then((result) => {
  //           Dispatcher(OnSuccess(result));
  //           // console.log(result);
  //         })
  //         .catch((e) => {
  //           Dispatcher(OnError());
  //         });
  //     })
  //     .catch((e) => {
  //       Dispatcher(OnError());
  //     });
  // };

  // for filtters
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  let five = [];
  let newSearch = [];

  let [all, setAll] = useState([]);
  let [searchPeram, setSearchPram] = useState(2);

  let [allInactive, setAllInactive] = useState([]);
  let [allPending, setAllPending] = useState([]);
  let [allModerated, setAlModerated] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  let { loading, error, user } = userData;
  let [search, setSearch] = useState("");

  console.log(user.published_ads + "hi this is mycode");

  const rejected = (props) => {
    console.log(props.date_from);
    return (
      <HStack
        alignItems={"center"}
        height="127px"
        width={"100%"}
        margin="auto"
        spacing={"0px"}
        borderLeft="5px solid red"
        boxShadow={
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        }
        borderRadius="3px"
        gap={0}
      >
        <Stack
          width={"127px"}
          bg={"#ebeeef"}
          height="100%"
          justifyContent={"center"}
          alignItems="center"
          spacing={"2px"}
        >
          <Box textAlign={"left"} spacing={"1px"} opacity=".5">
            <Text fontSize="13px">
              FROM:
              <Text fontSize="13px" as="b">
                {props.date_from}
              </Text>
            </Text>
            <Text fontSize="13px">
              To:
              <Text fontSize="13px" as="b">
                {props.date_to}
              </Text>
            </Text>
          </Box>
        </Stack>

        {/* for  image Text */}
        <Stack width={"100%"} padding="2px" px="10px" alignItems={"top"}>
          <HStack width={"full"}>
            <Flex gap={5} alignItems="center" width={"255px"} opacity="0.5">
              <Stack
                spacing={"0px"}
                border="1px solid #cfcdcd"
                borderRadius={"4px"}
                width="60px"
                height={"60px"}
              >
                <Image
                  src={props.images.img1}
                  borderRadius={"4px"}
                  width="100%"
                  height={"100%"}
                ></Image>
              </Stack>
              <Text
                fontSize={"14px"}
                as="b"
                overflow={"hidden"}
                textOverflow="ellipsis"
                whiteSpace={"nowrap"}
              >
                {props.name}
              </Text>
            </Flex>
            ammout
            <Text
              fontSize={"14px"}
              opacity="0.5"
              verflow={"hidden"}
              textOverflow="ellipsis"
              whiteSpace={"nowrap"}
              margin="auto"
              width={"140px"}
            >
              ₹ {new Intl.NumberFormat("en-IN").format(props.set_price)}
            </Text>
            <Flex gap={4}>
              <Button
                marginLeft={"40px"}
                colorScheme="teal"
                width={"110px"}
                borderRadius="10px"
                bg={"#ff2800"}
                fontSize={"10px"}
                height="36px"
              >
                REJECTED
              </Button>
              <Flex gap={"2"}>
                <BiErrorCircle color="red" fontSize={"22px"} />
                <Text fontSize={"sm"} width="270px" textAlign={"left"}>
                  {" "}
                  This ad was not published. Edit it and go live.
                </Text>
              </Flex>
            </Flex>
            <Spacer></Spacer>
            <Stack marginTop={"-50px"} paddingBottom="30px">
              <BiDotsHorizontalRounded
                paddingBottom="50px"
                textAlign="top"
                fontSize={"30px"}
              ></BiDotsHorizontalRounded>
            </Stack>
          </HStack>
          <Divider></Divider>

          <HStack width={"full"} textAlign="center">
            <HStack opacity="0.5">
              <HStack>
                <AiOutlineEye fontSize={"18px"} />
                <Text as="b" fontSize={"11px"}>
                  Views:
                </Text>
                <Text fontSize={"11px"} pr="8px" borderEnd={"1px solid black"}>
                  {props.views}
                </Text>

                <AiFillHeart fontSize={"18px"} />
                <Text fontSize={"11px"} as="b">
                  Likes:
                </Text>
                <Text fontSize={"11px"}>{props.likes}</Text>
              </HStack>
            </HStack>
            <Spacer></Spacer>

            <Stack>
              {" "}
              <Button
                height={"36px"}
                textAlign={"left"}
                borderRadius={"4px"}
                border="2px"
                fontSize={"12px"}
                color={"black"}
                borderColor="black"
                background={"white"}
                _hover={{ border: "5px solid black", backgroundColor: "white" }}
              >
                Edit now
              </Button>
            </Stack>
          </HStack>
        </Stack>
      </HStack>
    );
  };

  const active = (props) => {
    return (
      <HStack
        alignItems={"center"}
        height="127px"
        width={"100%"}
        margin="auto"
        spacing={"0px"}
        borderLeft="5px solid #23e5db"
        boxShadow={
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        }
        borderRadius="3px"
        gap={0}
      >
        <Stack
          width={"127px"}
          bg={"#ebeeef"}
          height="100%"
          justifyContent={"center"}
          alignItems="center"
          spacing={"2px"}
        >
          <Box textAlign={"left"} spacing={"1px"}>
            <Text fontSize="13px">
              FROM:
              <Text fontSize="13px" as="b">
                {props.date_from}
              </Text>
            </Text>
            <Text fontSize="13px">
              To:
              <Text fontSize="13px" as="b">
                {props.date_to}
              </Text>
            </Text>
          </Box>
        </Stack>

        {/* for  image Text */}
        <Stack width={"100%"} padding="2px" px="10px" alignItems={"top"}>
          <HStack width={"full"}>
            <Flex gap={5} alignItems="center" width={"252px"}>
              <Stack
                spacing={"0px"}
                border="1px solid #cfcdcd"
                borderRadius={"4px"}
              >
                <Image
                  src={props.images.img1}
                  borderRadius={"4px"}
                  width="60px"
                  height={"60px"}
                ></Image>
              </Stack>
              <Text
                fontSize={"14px"}
                as="b"
                overflow={"hidden"}
                textOverflow="ellipsis"
                whiteSpace={"nowrap"}
              >
                {props.name}
              </Text>
            </Flex>
            ammout
            <Text
              fontSize={"14px"}
              verflow={"hidden"}
              textOverflow="ellipsis"
              width={"140px"}
              whiteSpace={"nowrap"}
            >
              ₹ {new Intl.NumberFormat("en-IN").format(props.set_price)}
            </Text>
            <Flex gap={4} alignItems="center">
              <Button
                marginLeft={"40px"}
                colorScheme="teal"
                width={"110px"}
                borderRadius="10px"
                bg={"#23e5db"}
                fontSize={"10px"}
                height="36px"
              >
                ACTIVE
              </Button>

              {/* <BiErrorCircle color="red" fontSize={"22px"} /> */}
              <Text fontSize={"sm"} width="270px" textAlign={"left"}>
                {" "}
                This ad is currently live
              </Text>
            </Flex>
            <Spacer></Spacer>
            <Stack marginTop={"-50px"} paddingBottom="30px">
              <BiDotsHorizontalRounded
                paddingBottom="50px"
                textAlign="top"
                fontSize={"30px"}
              ></BiDotsHorizontalRounded>
            </Stack>
          </HStack>
          <Divider></Divider>

          <HStack width={"full"} textAlign="center">
            <HStack>
              <HStack>
                <AiOutlineEye fontSize={"18px"} />
                <Text as="b" fontSize={"11px"}>
                  Views:
                </Text>
                <Text fontSize={"11px"} pr="8px" borderEnd={"1px solid black"}>
                  {props.views}
                </Text>

                <AiFillHeart fontSize={"18px"} />
                <Text fontSize={"11px"} as="b">
                  Likes:
                </Text>
                <Text fontSize={"11px"}>{props.likes}</Text>
              </HStack>
            </HStack>
            <Spacer></Spacer>

            <Stack>
              {" "}
              <Button
                height={"36px"}
                textAlign={"left"}
                borderRadius={"4px"}
                border="2px"
                fontSize={"12px"}
                color={"black"}
                borderColor="black"
                background={"white"}
                _hover={{ border: "5px solid black", backgroundColor: "white" }}
              >
                Sell fastr now
              </Button>
            </Stack>
          </HStack>
        </Stack>
      </HStack>
    );
  };

  const pending = (props) => {
    return (
      <HStack
        alignItems={"center"}
        height="127px"
        width={"100%"}
        margin="auto"
        spacing={"0px"}
        borderLeft="5px solid #23e5db"
        boxShadow={
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        }
        borderRadius="3px"
        gap={0}
      >
        <Stack
          width={"127px"}
          bg={"#ebeeef"}
          height="100%"
          justifyContent={"center"}
          alignItems="center"
          spacing={"2px"}
        >
          <Box textAlign={"left"} spacing={"1px"}>
            <Text fontSize="13px">
              FROM:
              <Text fontSize="13px" as="b">
                {props.date_from}
              </Text>
            </Text>
            <Text fontSize="13px">
              To:
              <Text fontSize="13px" as="b">
                {props.date_to}
              </Text>
            </Text>
          </Box>
        </Stack>

        {/* for  image Text */}
        <Stack width={"100%"} padding="2px" px="10px" alignItems={"top"}>
          <HStack width={"full"}>
            <Flex gap={5} alignItems="center" width={"252px"}>
              <Stack
                spacing={"0px"}
                border="1px solid #cfcdcd"
                borderRadius={"4px"}
              >
                <Image
                  src={props.images.img1}
                  borderRadius={"4px"}
                  width="60px"
                  height={"60px"}
                ></Image>
              </Stack>
              <Text
                fontSize={"14px"}
                as="b"
                overflow={"hidden"}
                textOverflow="ellipsis"
                whiteSpace={"nowrap"}
              >
                {props.name}
              </Text>
            </Flex>
            ammout
            <Text
              fontSize={"14px"}
              verflow={"hidden"}
              textOverflow="ellipsis"
              width={"140px"}
              whiteSpace={"nowrap"}
            >
              ₹ {new Intl.NumberFormat("en-IN").format(props.set_price)}
            </Text>
            <Flex gap={4} alignItems="center">
              <Button
                marginLeft={"40px"}
                colorScheme="teal"
                width={"110px"}
                borderRadius="10px"
                bg={"#3a77ff"}
                fontSize={"10px"}
                height="36px"
              >
                Pending
              </Button>

              {/* <BiErrorCircle color="red" fontSize={"22px"} /> */}
              <Text fontSize={"sm"} width="270px" textAlign={"left"}>
                {" "}
                This ad is currently Pending
              </Text>
            </Flex>
            <Spacer></Spacer>
            <Stack marginTop={"-50px"} paddingBottom="30px">
              <BiDotsHorizontalRounded
                paddingBottom="50px"
                textAlign="top"
                fontSize={"30px"}
              ></BiDotsHorizontalRounded>
            </Stack>
          </HStack>
          <Divider></Divider>

          <HStack width={"full"} textAlign="center">
            <HStack>
              <HStack>
                <AiOutlineEye fontSize={"18px"} />
                <Text as="b" fontSize={"11px"}>
                  Views:
                </Text>
                <Text fontSize={"11px"} pr="8px" borderEnd={"1px solid black"}>
                  {props.views}
                </Text>

                <AiFillHeart fontSize={"18px"} />
                <Text fontSize={"11px"} as="b">
                  Likes:
                </Text>
                <Text fontSize={"11px"}>{props.likes}</Text>
              </HStack>
            </HStack>
            <Spacer></Spacer>

            <Stack>
              {" "}
              <Button
                height={"36px"}
                textAlign={"left"}
                borderRadius={"4px"}
                border="2px"
                fontSize={"12px"}
                color={"black"}
                borderColor="black"
                background={"white"}
                _hover={{ border: "5px solid black", backgroundColor: "white" }}
              >
                Sell fastr now
              </Button>
            </Stack>
          </HStack>
        </Stack>
      </HStack>
    );
  };

  const Moderated = (props) => {
    return (
      <HStack
        alignItems={"center"}
        height="127px"
        width={"100%"}
        margin="auto"
        spacing={"0px"}
        borderLeft="5px solid #23e5db"
        boxShadow={
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        }
        borderRadius="3px"
        gap={0}
      >
        <Stack
          width={"127px"}
          bg={"#ebeeef"}
          height="100%"
          justifyContent={"center"}
          alignItems="center"
          spacing={"2px"}
        >
          <Box textAlign={"left"} spacing={"1px"}>
            <Text fontSize="13px">
              FROM:
              <Text fontSize="13px" as="b">
                {props.date_from}
              </Text>
            </Text>
            <Text fontSize="13px">
              To:
              <Text fontSize="13px" as="b">
                {props.date_to}
              </Text>
            </Text>
          </Box>
        </Stack>

        {/* for  image Text */}
        <Stack width={"100%"} padding="2px" px="10px" alignItems={"top"}>
          <HStack width={"full"}>
            <Flex gap={5} alignItems="center" width={"252px"}>
              <Stack
                spacing={"0px"}
                border="1px solid #cfcdcd"
                borderRadius={"4px"}
              >
                <Image
                  src={props.images.img1}
                  borderRadius={"4px"}
                  width="60px"
                  height={"60px"}
                ></Image>
              </Stack>
              <Text
                fontSize={"14px"}
                as="b"
                overflow={"hidden"}
                textOverflow="ellipsis"
                whiteSpace={"nowrap"}
              >
                {props.name}
              </Text>
            </Flex>
            ammout
            <Text
              fontSize={"14px"}
              verflow={"hidden"}
              textOverflow="ellipsis"
              width={"140px"}
              whiteSpace={"nowrap"}
            >
              ₹ {new Intl.NumberFormat("en-IN").format(props.set_price)}
            </Text>
            <Flex gap={4} alignItems="center">
              <Button
                marginLeft={"40px"}
                colorScheme="teal"
                width={"110px"}
                borderRadius="10px"
                bg={"#ffce32"}
                fontSize={"10px"}
                height="36px"
              >
                Moderated
              </Button>

              {/* <BiErrorCircle color="red" fontSize={"22px"} /> */}
              <Text fontSize={"sm"} width="270px" textAlign={"left"}>
                {" "}
                This ad is currently Moderated
              </Text>
            </Flex>
            <Spacer></Spacer>
            <Stack marginTop={"-50px"} paddingBottom="30px">
              <BiDotsHorizontalRounded
                paddingBottom="50px"
                textAlign="top"
                fontSize={"30px"}
              ></BiDotsHorizontalRounded>
            </Stack>
          </HStack>
          <Divider></Divider>

          <HStack width={"full"} textAlign="center">
            <HStack>
              <HStack>
                <AiOutlineEye fontSize={"18px"} />
                <Text as="b" fontSize={"11px"}>
                  Views:
                </Text>
                <Text fontSize={"11px"} pr="8px" borderEnd={"1px solid black"}>
                  {props.views}
                </Text>

                <AiFillHeart fontSize={"18px"} />
                <Text fontSize={"11px"} as="b">
                  Likes:
                </Text>
                <Text fontSize={"11px"}>{props.likes}</Text>
              </HStack>
            </HStack>
            <Spacer></Spacer>

            <Stack>
              {" "}
              <Button
                height={"36px"}
                textAlign={"left"}
                borderRadius={"4px"}
                border="2px"
                fontSize={"12px"}
                color={"black"}
                borderColor="black"
                background={"white"}
                _hover={{ border: "5px solid black", backgroundColor: "white" }}
              >
                Sell fastr now
              </Button>
            </Stack>
          </HStack>
        </Stack>
      </HStack>
    );
  };

  if (error) {
    return <h1>error..</h1>;
  }

  if (loading) {
    return (
      <>
        <Skeleton height={"127px"}></Skeleton>
      </>
    );
  }

  if (!error && !loading && Object.keys(user).length == 0) {
    return <></>;
  }

  if (user.published_ads.length == 0) {
    return (
      <>
        <Stack
          width="100%"
          height={"90vh"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          margin="auto"
        >
          <Image
            src="https://statics.olx.in/external/base/img/no-favorites.png"
            height={"200px"}
            alt="Dan Abramov"
          />
          <Text as={"b"} color="#5c7a81">
            You haven't liked any ads yet
          </Text>
          <Text color={"#5c7a81"} fontSize="sm">
            {" "}
            `Like ads and share <br /> them with the world`
          </Text>
          <Button
            size="md"
            borderRadius={"4px"}
            border="2px"
            color={"black"}
            borderColor="black"
            background={"white"}
            _hover={{ border: "5px solid black", backgroundColor: "white" }}
          >
            Discover
          </Button>
        </Stack>
      </>
    );
  }

  let nameIsError = search.length > 0 && search.length < 3;

  user.published_ads.map((el) => {
    one.push(el);

    if (el.ad_active === "inactive") {
      three.push(el);
    } else if (el.ad_active === "active") {
      two.push(el);
    } else if (el.ad_active === "moderated") {
      five.push(el);
    } else if (el.ad_active === "pending") {
      four.push(el);
    }
  });

  let show;
  if (searchPeram == 0) {
    show = one;
  } else if (searchPeram == 1) {
    show = two;
  } else if (searchPeram == 2) {
    show = three;
  } else if (searchPeram == 3) {
    show = four;
  } else if (searchPeram == 4) {
    show = five;
  } else if (searchPeram == 5) {
    show = newSearch;
  }

  let data = show.map((el) => {
    let check = el.ad_active;
    if (check === "moderated") {
      return Moderated(el);
    } else if (check === "inactive") {
      return rejected(el);
    } else if (check === "pending") {
      return pending(el);
    } else {
      return active(el);
    }
  });

  const formHandler = (e) => {};

  // setAllActive(two)
  // let [allActive,setAllActive] = useState(two);

  // if (show.length == 0) {
  //   return (
  //     <>
  //       <Stack
  //         width="100%"
  //         height={"90vh"}
  //         justifyContent={"center"}
  //         alignItems={"center"}
  //         textAlign={"center"}
  //         margin="auto"
  //       >
  //         <Image
  //           src="https://statics.olx.in/external/base/img/no-favorites.png"
  //           height={"200px"}
  //           alt="Dan Abramov"
  //         />
  //         <Text as={"b"} color="#5c7a81">
  //           You haven't liked any ads yet
  //         </Text>
  //         <Text color={"#5c7a81"} fontSize="sm">
  //           {" "}
  //           `Like ads and share <br /> them with the world`
  //         </Text>
  //         <Button
  //           size="md"
  //           borderRadius={"4px"}
  //           border="2px"
  //           color={"black"}
  //           borderColor="black"
  //           background={"white"}
  //           _hover={{ border: "5px solid black", backgroundColor: "white" }}
  //         >
  //           Discover
  //         </Button>
  //       </Stack>
  //     </>
  //   );
  // }

  return (
    <>
      <HStack
        marginTo="20px"
        width={"100%"}
        marginBottom="20px"
        margin="auto"
        py="40px"
        alignItems="center"
      >
        <FormControl width="300px" alignItems="center" height={"36px"}>
          <InputGroup alignItems="center">
            <InputLeftElement
              alignItems={"center"}
              padding="5px"
              pointerEvents="none"
              children={<SearchIcon color="black" fontSize={"18px"} />}
            />
            {nameIsError ? (
              <Input
                size={"sm"}
                _placeholder={{ color: "Gray" }}
                borderRadius="4px"
                focusBorderColor={"red"}
                _focus={{ border: "2px solid red" }}
                placeholder={""}
                value={search}
                borderColor="black"
                name="full_name"
                width="300px"
                onChange={(e) => {
                  // console.log("key toh clk hua")
                  // //setSearch(e.target.value)
                  // console.log("key toh clk hua")
                  //  if(e.key === 'Enter'){
                  //    //  show.map((el)=>{
                  //    //      if(el.name === search ){
                  //    //        newSearch.push(el);
                  //    //        setSearchPram(5);
                  //    //      }
                  //    //  })
                  //    console.log("my key")
                  //  }
                }}
              />
            ) : (
              <Input
                isInvalid={nameIsError}
                height="36px"
                width="300px"
                borderRadius="4px"
                focusBorderColor={"#22c2ba"}
                placeholder={""}
                borderColor="black"
                onChange={(e) => {
                  //  if(e.target.value.length==0){
                  //   if(searchPeram==0){
                  //     show = one;
                  //  }else if(searchPeram==1){
                  //     show =two;
                  //  }else if(searchPeram==2){
                  //      show= three
                  //  }else if(searchPeram==3){
                  //     show = four
                  //  }else if(searchPeram==4){
                  //           show =five
                  //  }else if(searchPeram==5){
                  //     show = newSearch
                  //  }
                  //  }
                }}
                name="full_name"
                onKeyPress={(e) => {
                  console.log("key toh clk hua");

                  if (e.key === "Enter") {
                    show.map((el) => {
                      if (el.name === e.target.value) {
                        newSearch.push(el);
                        setSearchPram(5);
                      }
                    });
                    console.log("my key");
                  }
                }}
              />
            )}
          </InputGroup>

          <Flex gap={4}>
            <FormHelperText fontSize={"xs"}>
              {search.length > 0 && search.length < 3
                ? "It must contain at least 3 characters"
                : ""}
            </FormHelperText>
          </Flex>
        </FormControl>
        <Spacer></Spacer>

        {/* for filltter */}

        <HStack alignItems="center">
          <Text>Filter By:</Text>

          <Tabs
            index={searchPeram < 5 && searchPeram}
            onChange={(i) => {
              setSearchPram(i);
            }}
            variant="soft-rounded"
            colorScheme="green"
          >
            <TabList gap="2">
              <Tab
                height={"34px"}
                color="black"
                fontWeight={"400"}
                cursor="pointer"
                border="1px solid black"
                fontSize="12px"
                _selected={{ border: "none", color: "black", bg: "#c8f8f6" }}
              >
                View all ({one.length})
              </Tab>
              <Tab
                height={"34px"}
                color="black"
                fontWeight={"400"}
                cursor="pointer"
                border="1px solid black"
                fontSize="12px"
                _selected={{ border: "none", color: "black", bg: "#c8f8f6" }}
              >
                Active Ads ({two.length})
              </Tab>
              <Tab
                height={"34px"}
                color="black"
                fontWeight={"400"}
                cursor="pointer"
                border="1px solid black"
                fontSize="12px"
                _selected={{ border: "none", color: "black", bg: "#c8f8f6" }}
              >
                Inactive Ads ({three.length})
              </Tab>
              <Tab
                height={"34px"}
                color="black"
                fontWeight={"400"}
                cursor="pointer"
                border="1px solid black"
                fontSize="12px"
                _selected={{ border: "none", color: "black", bg: "#c8f8f6" }}
              >
                Pending Ads ({four.length})
              </Tab>
              <Tab
                height={"34px"}
                color="black"
                fontWeight={"400"}
                cursor="pointer"
                border="1px solid black"
                fontSize="12px"
                _selected={{ border: "none", color: "black", bg: "#c8f8f6" }}
              >
                Moderated Ads ({five.length})
              </Tab>
            </TabList>
          </Tabs>
        </HStack>
      </HStack>

      <VStack gap={1} width="100%">
        {show.length == 0 && (
          <>
            <Stack
              width="100%"
              height={"90vh"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
              margin="auto"
            >
              <Image
                src="https://statics.olx.in/external/base/img/no-favorites.png"
                height={"200px"}
                alt="Dan Abramov"
              />
              <Text as={"b"} color="#5c7a81">
                Do non't have any Item
              </Text>
            </Stack>
          </>
        )}
        {data}
      </VStack>
    </>
  );
}
export default MyAds;
