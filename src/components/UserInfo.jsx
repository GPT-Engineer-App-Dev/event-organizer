import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const UserInfo = () => {
  const userToken = localStorage.getItem('jwtToken');
  const userEmail = localStorage.getItem('userEmail');

  if (!userToken) {
    return <Button colorScheme="blue">Login</Button>;
  }

  return (
    <Box>
      <Text color="gray.600">{userEmail}</Text>
    </Box>
  );
};

export default UserInfo;