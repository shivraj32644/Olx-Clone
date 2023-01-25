import { ChevronDownIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsMenuDown } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";

const ProfileBtn = () => {
  const { toggleAuth } = useContext(AuthContext);
  const handleLogOut = () => {
    localStorage.setItem("isLogin", false);
    console.log("hello");
    toggleAuth();
  };

  return (
    <Box>
      <Menu>
        <Flex alignItems={"center"}>
          <Box width="40px" height="40px" borderRadius="50%">
            {" "}
            <Image
              src="https://statics.olx.in/external/base/img/avatar_3.png"
              alt="Profile pic"
            />
          </Box>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<ChevronDownIcon />}
          />
        </Flex>

        <MenuList>
          <Flex alignItems="center">
            <Box width="56px" height="56px" borderRadius="50%" mt="15px">
              {" "}
              <Image
                src="https://statics.olx.in/external/base/img/avatar_3.png"
                alt="Profile pic"
              />
            </Box>

            <Box mx="1rem">
              <Box>
                <Heading
                  as="h4"
                  size="md"
                  font-family="Roboto,Arial,Helvetica,sans-serif"
                >
                  Hello, Suraj
                </Heading>
              </Box>

              <Text
                color="#5b5c5d"
                font-family="Roboto,Arial,Helvetica,sans-serif"
              >
                <Link to="/editProfile">View and edit profile</Link>
              </Text>
            </Box>
          </Flex>
          <hr />
          <Link to="/myads">
            <MenuItem icon={<MdContentCopy />}>My ADS</MenuItem>
          </Link>
          <MenuItem icon={<BsMenuDown />}>Buy Business Packages</MenuItem>
          <MenuItem icon={<RepeatIcon />}>Open Closed</MenuItem>
          <MenuItem icon={<RiLogoutBoxRLine />}></MenuItem>
          <Button onClick={handleLogOut}>Logout</Button>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ProfileBtn;
