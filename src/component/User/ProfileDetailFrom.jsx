import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  StackDivider,
  Divider,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { OnError, OnLoading, OnSuccess } from "../../Redux/UserProfile/Action";
import { Link } from "react-router-dom";

function ProfileDetailForm(props) {
  let dispater = useDispatch();
  let user = props.user;

  let [userData, setUserData] = useState(user);
  let nameIsError = userData.full_name.length < 3;

  const formHandler = (e) => {
    console.log(userData);
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const favUpdater = async (id, newuser) => {
    try {
      dispater(OnLoading());
      var data = await fetch(
        `https://olx-database-3xly.onrender.com/data/${id}`,

        {
          method: "PATCH",
          body: JSON.stringify(newuser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let r = await data.json();

      console.log(r);
      dispater(OnSuccess(r));
    } catch (e) {
      dispater(OnError());
    } finally {
    }
  };

  return (
    <>
      <VStack p={5} spacing={2} align="stretch">
        <FormLabel fontWeight={"bold"}>Basic information</FormLabel>
        <Flex gap={4} width="100%">
          <Box width={"50%"} textAlign="left">
            <FormControl>
              {nameIsError ? (
                <Input
                  isInvalid={nameIsError}
                  size={"lg"}
                  width="100%"
                  _placeholder={{ color: "Gray" }}
                  border="1px"
                  borderRadius="4px"
                  focusBorderColor={"red"}
                  _focus={{ border: "2px solid red" }}
                  placeholder={"Name"}
                  value={userData.full_name}
                  borderColor="black"
                  name="full_name"
                  onChange={formHandler}
                />
              ) : (
                <Input
                  maxLength={"30"}
                  isInvalid={nameIsError}
                  size={"lg"}
                  width="100%"
                  _placeholder={{ color: "Gray" }}
                  border="1px"
                  borderRadius="4px"
                  focusBorderColor={"#22c2ba"}
                  _focus={{ border: "2px solid #22c2ba" }}
                  placeholder={"Name"}
                  value={userData.full_name}
                  borderColor="black"
                  name="full_name"
                  onChange={formHandler}
                />
              )}
              <Flex gap={4}>
                <FormHelperText fontSize={"xs"}>
                  {userData.full_name.length === 0
                    ? "This field is mandatory"
                    : userData.full_name.length < 3
                    ? "Must contain between 3 and 30 characters"
                    : ""}
                </FormHelperText>

                <Spacer></Spacer>

                <FormHelperText fontSize={"xs"} textAlign="end">
                  {userData.full_name.length} / 30
                </FormHelperText>
              </Flex>
            </FormControl>

            <FormControl marginTop={"20px"}>
              {userData.user_about !== null &&
              userData.user_about.length > 0 &&
              userData.user_about.length < 5 ? (
                <Textarea
                  // isInvalid={nameIsError}
                  height={"78px"}
                  width="100%"
                  _placeholder={{ color: "Gray" }}
                  border="1px"
                  borderRadius="4px"
                  _autofill="none"
                  focusBorderColor={"red"}
                  _focus={{ border: "3px solid red" }}
                  placeholder={"About me (optional)"}
                  value={userData.user_about}
                  borderColor="black"
                  name="user_about"
                  onChange={formHandler}
                  resize="none"
                  maxLength="200"
                />
              ) : (
                <Textarea
                  // isInvalid={nameIsError}

                  height={"fit-content"}
                  overflow="hidden"
                  maxLength="200"
                  width="100%"
                  _placeholder={{ color: "Gray" }}
                  border="1px"
                  borderRadius="4px"
                  focusBorderColor={"#22c2ba"}
                  _focus={{ border: "2px solid #22c2ba" }}
                  placeholder={"About me (optional)"}
                  value={userData.user_about}
                  borderColor="black"
                  name="user_about"
                  onChange={formHandler}
                />
              )}
              <Flex gap={4}>
                <FormHelperText fontSize={"xs"}>
                  {userData.user_about !== null &&
                  userData.user_about.length > 0 &&
                  userData.user_about.length < 5
                    ? "Must contain between 5 and 200 characters"
                    : ""}
                </FormHelperText>

                <Spacer></Spacer>

                <FormHelperText fontSize={"xs"} textAlign="end">
                  {userData.user_about == null ? 0 : userData.user_about.length}{" "}
                  / 200
                </FormHelperText>
              </Flex>
            </FormControl>
          </Box>

          <Box
            paddingBottom={"10px"}
            height={"max-content"}
            border="1px solid #cfcdcd"
            textAlign="left"
            width="30%"
          >
            <HStack px="15px" paddingTop={"10px"} spacing={1}>
              <HiOutlineLightBulb fontSize={"24px"} />
              <Text as="b" fontSize={"sm"}>
                Why is it important?
              </Text>
            </HStack>
            <Text px="10px" py="5px" color="#5c7a7d" fontSize="xs">
              OLX is built on trust. Help other people get to know you. Tell
              them about the things you like. Share your favorite brands, books,
              movies, shows, music, food. And you will see the results…
            </Text>
          </Box>
        </Flex>
      </VStack>

      <Box padding={5}>
        <Divider></Divider>
      </Box>

      <VStack
        padding={5}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Flex width={"100%"}>
          <Box width={"100%"} textAlign="left">
            <FormControl>
              <FormLabel fontWeight={"bold"}>Contact information</FormLabel>
              <Flex gap={4}>
                <InputGroup width={"50%"} size="lg">
                  <InputLeftElement
                    alignItems={"center"}
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children={
                      <Text borderRight={"1px"} px={"10px"}>
                        +91
                      </Text>
                    }
                  />
                  <Input
                    _placeholder={{ color: "Gray" }}
                    border="1px"
                    paddingLeft={"60px"}
                    borderRadius="4px"
                    focusBorderColor={"#22c2ba"}
                    _focus={{ border: "2px solid #22c2ba" }}
                    maxLength="10"
                    placeholder={"Number"}
                    value={userData.user_number}
                    name="user_number"
                    borderColor="black"
                    onChange={formHandler}
                  />
                  <InputRightElement
                    children={
                      <ChevronRightIcon
                        color="gray.600"
                        fontSize={"30px"}
                        fontWeight="400"
                      />
                    }
                  />
                </InputGroup>

                <Text fontSize={"xs"} color="#5c7a7d">
                  Yay! Your number is verified.
                </Text>
              </Flex>

              <Flex gap={4} marginTop="40px">
                <InputGroup width={"50%"} size="lg">
                  <Input
                    _placeholder={{ color: "Gray" }}
                    border="1px"
                    borderRadius="4px"
                    focusBorderColor={"#22c2ba"}
                    _focus={{ border: "2px solid #22c2ba" }}
                    placeholder={"Email"}
                    value={userData.email_id}
                    name="email_id"
                    onChange={formHandler}
                    borderColor="black"
                  />
                  <InputRightElement
                    children={
                      <ChevronRightIcon
                        color="gray.600"
                        fontSize={"30px"}
                        fontWeight="400"
                      />
                    }
                  />
                </InputGroup>

                <Text fontSize={"xs"} width="45%" color="#5c7a7d">
                  Your email is never shared with external parties nor do we use
                  it to spam you in any way.
                </Text>
              </Flex>
            </FormControl>
          </Box>
        </Flex>
      </VStack>

      <Box padding={5}>
        <Divider></Divider>
      </Box>

      <Box padding={5} textAlign="left" width={"80%"}>
        <Text as="b">Additional information</Text>
        <Text>Google</Text>
        <Flex alignItems="center" marginTop="-10px">
          <Text width="45%" fontSize={"xs"} color="#5c7a7d">
            Link your Google account to seamlessly use your contact list.
          </Text>
          <Spacer></Spacer>

          <Button
            size="md"
            borderRadius={"4px"}
            height="40px"
            width="40%"
            border="2px"
            color={"black"}
            borderColor="black"
            background={"white"}
            _hover={{ border: "5px solid black", backgroundColor: "white" }}
          >
            Unlink
          </Button>
        </Flex>
      </Box>

      <Divider></Divider>

      <HStack padding={5}>
        <Link to="/editProfile">
          <Button
            size="lg"
            borderRadius={"none"}
            borderBottom="2px solid black"
            px="0px"
            variant="ghost"
            color={"black"}
            _hover={{ border: "none", variant: "ghost" }}
          >
            Discard
          </Button>
        </Link>

        <Spacer></Spacer>

        <Button
          size="lg"
          borderRadius={"4px"}
          px="8px"
          border="2px"
          color={"white"}
          onClick={() => {
            favUpdater(userData.id, userData);
          }}
          borderColor="black"
          background={"#002f34"}
          disabled={
            userData.full_name.length == 0
              ? true
              : userData.email_id.length == 0
              ? true
              : false
          }
          _hover={{
            border: "5px solid black",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Save changes
        </Button>
      </HStack>
    </>
  );
}

export default ProfileDetailForm;
