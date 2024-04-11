import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const { onOpen } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Login
      </Button>
      <LoginModal />
    </>
  );
};

export default LoginButton;
