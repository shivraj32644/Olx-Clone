import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React from "react";

const ProfileBtn = () => {
  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<ChevronDownIcon />}
          variant="outline"
        />
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
                <Link to="#">View and edit profile</Link>
              </Text>
            </Box>
          </Flex>
          <MenuItem icon={<AddIcon />}>
            <Link to="/">My Adds</Link>
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
          <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
          <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ProfileBtn;
