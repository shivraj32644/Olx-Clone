import {
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { ContextModal } from "../Context_V.jsx/ContextModal";
import { Box, Button } from "@chakra-ui/react";

export const LoginPage = () => {
  const { currPage } = useContext(ContextModal);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      {/* <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
    
      </Box> */}

      <Button  onClick={onOpen}>
        LOGIN
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody>{currPage}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
