import React from "react";
import { Text } from "@chakra-ui/react";

const UserInfo = () => {
  const token = localStorage.getItem("jwt");

  if (token) {
    const userEmail = "user@example.com";
    return <Text>Logged in as: {userEmail}</Text>;
  } else {
    return <Text>Not logged in</Text>;
  }
};

export default UserInfo;
