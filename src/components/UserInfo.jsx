import React from "react";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import LoginModal from "./LoginModal";

const UserInfo = () => {
  const userToken = localStorage.getItem("jwtToken");
  const userEmail = localStorage.getItem("userEmail");
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (userToken) {
    return (
      <Box>
        <Text fontSize="md" color="gray.600">
          {userEmail}
        </Text>
      </Box>
    );
  } else {
    return (
      <>
        <Button colorScheme="blue" onClick={onOpen}>
          Login
        </Button>
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </>
    );
  }
};

export default UserInfo;
