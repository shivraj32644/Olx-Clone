import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HiOutlineLightBulb } from "react-icons/hi";
import LoadingPage from "./util/Loading";
import { NavLink, Link } from "react-router-dom"
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
  color,
  
} from "@chakra-ui/react";
import { useState } from "react";

import ProfilePicForm from "./ProfilePicForm";
import ProfileDetailForm from "./ProfileDetailFrom";

function NewProfilePicForm({userData,getUser}) {
 
    let {loading,error,user} = userData
 
  //for windows size paging hook
  let [profileInDetails, setProfileInDetails] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  let activeStyle ={
    fontWeight:"bold",
    fontSize:"17px",
    marginBottom:"30px"
  }
  let defaultStyle ={
   fontSize:"17px",
   color:"gray",
   marginBottom:"30px"
  }


 

 

  if (error) {
    return <h1>error..</h1>;
  }
 
  if(loading){
    
    return <LoadingPage/>
  }

  if(!error && !loading && Object.keys(user).length ==0){
     return<></>
  }
   



  return (
    <Box position={"relative"}  >
      <Flex font-family="'Roboto', sans-serif" width="95%" margin="auto">
        <Box textAlign={"left"} width="30%" marginRight="20px">
         <NavLink
        
         to="/editProfile"
          style={({ isActive }) => {
            return isActive ? activeStyle : defaultStyle;
          }}end
         >
         {/* <Text
              paddingBottom={"8px"}
              fontWeight="bold"
              color={"black"}
              onClick={(e) => {
                setProfileInDetails(true);
              }}
            > */}
              Edit profile
            {/* </Text> */}
         </NavLink><br />
         <NavLink   to="/editProfile/picture"
            style={({ isActive }) => {
                return isActive ? activeStyle : defaultStyle;
              }}end
         >

         {/* <Text
              color={"gray"}
              onClick={() => {
                setProfileInDetails(false);
              }}
            > */}
              Profile picture
            {/* </Text> */}
         </NavLink>
        

           
         
          
         

         <Link  to="/profile" >
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
         
         </Link>
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
          
          <ProfilePicForm user={user}/>
         
        </Box>
      </Flex>

   
    </Box>
  );


}

export default NewProfilePicForm;
