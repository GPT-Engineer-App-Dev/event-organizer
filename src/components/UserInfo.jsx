import React from "react";
import { Box, Button } from "@chakra-ui/react";

const UserInfo = () => {
  const userToken = localStorage.getItem("jwtToken");
  const userEmail = localStorage.getItem("userEmail");

  if (userToken) {
    return <Box as="span" color="gray.600" fontSize="md">{userEmail}</Box>;
  } else {
    return <Button colorScheme="blue">Login</Button>;
  }
};

export default UserInfo;