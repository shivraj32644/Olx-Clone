import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OnError, OnLoading, OnSuccess } from "../../Redux/UserProfile/Action";
import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HiOutlineLightBulb } from "react-icons/hi";
import {
  Box,
  Flex,
  Text,
  CircularProgress,
  Button,
  Spinner,
  VStack,
  StackDivider,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import ProfileDetailForm from "./ProfileDetailFrom";
import ProfilePicForm from "./ProfilePicForm";

function EditProfile() {
  const { loading, error, user } = useSelector((user) => user);
  const Dispatcher = useDispatch();

  //for windows size paging hook
  let [profileInDetails, setProfileInDetails] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    let id = "1";
    Dispatcher(OnLoading());
    fetch(`http://localhost:5000/data/${id}`)
      .then((res) => {
        res
          .json()
          .then((result) => {
            Dispatcher(OnSuccess(result));
            console.log(result);
          })
          .catch((e) => {
            Dispatcher(OnError());
          });
      })
      .catch((e) => {
        Dispatcher(OnError());
      });
  };

 

 

  if (error) {
    return <h1>error..</h1>;
  }
  if(loading){
    return <h1>loading</h1>
  }

  let TextStyle = {};

  return (
    <Box position={"relative"} height="full">
      <Flex font-family="'Roboto', sans-serif" width="95%" margin="auto">
        <Box textAlign={"left"} width="30%" marginRight="20px">
          {profileInDetails ? (
            <Text
              paddingBottom={"8px"}
              fontWeight="bold"
              color={"black"}
              onClick={(e) => {
                setProfileInDetails(true);
              }}
            >
              Edit profile
            </Text>
          ) : (
            <Text
              marginBottom={"8px"}
              color={"gray"}
              onClick={(e) => {
                setProfileInDetails(true);
              }}
            >
              Edit profile
            </Text>
          )}
          {profileInDetails ? (
            <Text
              color={"gray"}
              onClick={() => {
                setProfileInDetails(false);
              }}
            >
              Profile picture
            </Text>
          ) : (
            <Text
              fontWeight={"bold"}
              onClick={() => {
                setProfileInDetails(true);
              }}
            >
              Profile picture
            </Text>
          )}

          <Button
            marginTop={"20px"}
            size="md"
            borderRadius={"4px"}
            height="40px"
            width="100%"
            border="2px"
            color={"black"}
            borderColor="black"
            background={"white"}
            _hover={{ border: "5px solid black", backgroundColor: "white" }}
          >
            View profile
          </Button>
        </Box>

        <Box
          width={"full"}
          variant="outline"
          border="1px"
          borderWidth="1px"
          borderRadius={"4"}
          borderColor="#cfcdcd"
        >
          <Text fontSize="xl" textAlign="start" padding={4} fontWeight="bold">
            {profileInDetails ? "Edit profile" : "Profile picture"}
          </Text>
          <Divider />

          {/* // for data */}
          

          {profileInDetails ? (
           
            <ProfileDetailForm user={user}  />
           
           
          ) : (
            <ProfilePicForm user={user} />
          )}
        </Box>
      </Flex>

     { loading &&  <Flex
        filter="auto"
        brightness="40%"
        position={"absolute"}
        top="0"
        width="100%"
        height={"100%"}
        justifyContent="center"
        alignItems={"center"}
        backgroundColor="black"
        opacity={"0.8"}
      >
        <Spinner
          size="xl"
          textAlign={"left"}
          color="white"
          colorScheme={"white"}
          thickness="3px"
        />
      </Flex> }
    </Box>
  );
}

export default EditProfile;
