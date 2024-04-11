import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const UserInfo = () => {
  const userToken = localStorage.getItem('jwtToken');
  const userEmail = localStorage.getItem('userEmail');

  if (userToken) {
    return (
      <Box>
        <Text>{userEmail}</Text>
      </Box>
    );
  } else {
    return (
      <Button colorScheme="blue">Login</Button>
    );
  }
};

export default UserInfo;