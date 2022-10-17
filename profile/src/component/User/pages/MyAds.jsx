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
  InputLeftAddon,
  InputGroup,
  InputLeftElement,
  Tab,
  Tabs,
  TabList,
  Divider,
  Grid,
  SkeletonText,
  SkeletonCircle,
  Skeleton,
  FormControl,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BiDotsHorizontalRounded, BiErrorCircle } from "react-icons/bi";
import { AiOutlineEye, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import LoadingPage from "../util/Loading";
import { useEffect } from "react";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";

import { useState } from "react";
function MyAds({ userData, getUser }) {
  let { loading, error, user } = userData;
  let [search, setSearch] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const formHandler = (e) => {
    setSearch(e.target.value);
  };

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

  if (error) {
    return <h1>error..</h1>;
  }

  if (loading) {
    return (
      <>
        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>

        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>

        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>

        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>

        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>

        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>

        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>

        <Stack gap={4}>
          <Skeleton height="160px" boxShadow="lg" />
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Stack>
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

  let data = user.published_ads.map((el) => {
    let check = el.ad_active;
    if (check) {
      return active(el);
    }
    return rejected(el);
  });

  let nameIsError = search.length > 0 && search.length < 3;

  return (
    <>
      <HStack width={"100%"} margin="auto" border={"1px solid red"} alignItems='center'>
        <FormControl border={"1px solid red"} width="300px" alignItems='center' height={"36px"}>
          <InputGroup alignItems='center'>
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
                onChange={formHandler}
              />
            ) : (
              <Input
                isInvalid={nameIsError}
                height="36px"
                width="300px"
                borderRadius="4px"
                focusBorderColor={"#22c2ba"}
                placeholder={""}
                value={search}
                borderColor="black"
                name="full_name"
                onChange={formHandler}
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

        <HStack border={"1px solid red"} alignItems='center'>
          <Text>Filter By:</Text>

          <Tabs variant="soft-rounded" colorScheme="green">
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
                View all (3)
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
                Active Ads ()
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
                Inactive Ads ()
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
                Pending Ads ()
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
                Moderated Ads (1)
              </Tab>
            </TabList>
          </Tabs>
        </HStack>
      </HStack>

      <VStack gap={1} width="100%">
        {data}
      </VStack>
    </>
  );
}
export default MyAds;
