import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Login
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default LoginButton;
