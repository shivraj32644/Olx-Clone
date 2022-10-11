import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OnError, OnLoading, OnSuccess } from "../../Redux/UserProfile/Action";
import {CheckIcon,ChevronRightIcon} from "@chakra-ui/icons"
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
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  InputRightElement,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";

function EditProfile() {
  const { loading, error, user } = useSelector((user) => user);
  const Dispatcher = useDispatch();

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

  function doClick(e) {
    e.target.styl.border = "100px";
  }

  if (loading) {
    return <h1>loading..</h1>;
  }

  if (error) {
    return <h1>error..</h1>;
  }

  return (
    <Flex width="95%" margin="auto">
      <Box textAlign={"left"} width="30%" marginRight="20px">
        <Text>Edit profile</Text>
        <Text>Profile picture</Text>

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
        borderRadius={"md"}
        borderColor="#cfcdcd"
      >
        <Text fontSize="large" textAlign="start" padding={4} fontWeight="bold">
          Edit profile
        </Text>
        <Divider wi />

        <VStack
          p={5}
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Flex width={"100%"} >
            <Box width={"100%"} textAlign="left">
              <FormControl>
                <FormLabel>Basic information</FormLabel>
                <Input
                  width="50%"
                  _placeholder={{ color: "black" }}
                  border="1px"
                  borderRadius="4px"
                  focusBorderColor={"black"}
                  placeholder={user.full_name == null ? "Name" : user.full_name}
                  borderColor="black"
                />
                <FormHelperText>This field is mandatory.</FormHelperText>
              </FormControl>

              <FormControl marginTop={"20px"}>
              
                <Textarea
                  placeholder={user.about_me == null ? "Name" : user.about_me}
                  border="1px"
                  borderRadius="4px"
                  height={"78px"}
                  p="4px"
                  focusBorderColor={"black"}
                  borderColor="black"
                  width={"50%"}
                />
              </FormControl>
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
          <Flex width={"100%"} >
            <Box width={"100%"} textAlign="left">
              <FormControl>
                <FormLabel>Contact information</FormLabel>
                <InputGroup width={"50%"} size="lg" >
                  <InputLeftElement
                   alignItems={"center"}
                    pointerEvents="none"
                    color="gray.300"
                  
                    fontSize="1.2em"
                    children={<Text borderRight={"1px"} px={"10px"} >+91</Text>}
                   
                  />
                  <Input   _placeholder={{ color: "black" }}
                  border="1px"
                 paddingLeft={"60px"}
                  borderRadius="4px"
                  focusBorderColor={"black"}
                  placeholder={user.full_name == null ? "Name" : user.full_name}
                  borderColor="black"/>
                  <InputRightElement
                    children={<ChevronRightIcon color="gray.600" fontSize={"30px"} fontWeight="400"/>}
                  />
                </InputGroup>
                
              </FormControl>

              <FormControl marginTop={"20px"}>
              <InputGroup width={"50%"}  size="lg" >
                  
                  <Input   _placeholder={{ color: "black" } }
                  border="1px"
                 type={'email'}
               
                  borderRadius="4px"
                  focusBorderColor={"black"}
                  placeholder={user.full_name == null ? "Name" : user.full_name}
                  borderColor="black"/>
                  <InputRightElement
                    children={<ChevronRightIcon color="gray.600" fontSize={"30px"} fontWeight="400"/>}
                  />
                </InputGroup>
              </FormControl>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
}

export default EditProfile;
