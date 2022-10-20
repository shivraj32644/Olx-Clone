import React from "react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";

const SellButton = () => {
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");

  if (isLargerThan780) {
    return (
      <Box position="sticky" top="1.5%" ml="85%" mt={-8} zIndex="1000">
        <Link to="/post">
          <Button
            bg="white"
            _hover="none"
            borderRadius="30px"
            p="17px"
            borderTop="5px solid #23e5db"
            borderLeft="5px solid #ffce32"
            borderRight="5px solid #3a77ff"
            borderBottom="5px solid #ffce32"
            className="sellBtn"
          >
            <AddIcon mr="5px" />
            SELL
          </Button>
        </Link>
      </Box>
    );
  } else {
    return (
      <Box position="sticky" top="80%" ml="40%" zIndex="1000">
        <Link to="/post">
          <Button
            bg="white"
            _hover="none"
            borderRadius="30px"
            p="17px"
            borderTop="5px solid #23e5db"
            borderLeft="5px solid #ffce32"
            borderRight="5px solid #3a77ff"
            borderBottom="5px solid #ffce32"
            className="sellBtn"
          >
            <AddIcon mr="5px" />
            SELL
          </Button>
        </Link>
      </Box>
    );
  }
};

export default SellButton;
