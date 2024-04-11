import React from "react";
import { Box, Button } from "@chakra-ui/react";

const UserInfo = () => {
  const userToken = localStorage.getItem("jwtToken");
  const userEmail = localStorage.getItem("userEmail");

  if (userToken) {
    return (
      <Box>
        <Button variant="outline" size="sm">
          {userEmail}
        </Button>
      </Box>
    );
  } else {
    return (
      <Box>
        <Button variant="outline" size="sm">
          Login
        </Button>
      </Box>
    );
  }
};

export default UserInfo;