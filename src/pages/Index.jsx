import React from "react";
import { Box, Flex, Heading, Spacer, Button, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">
              My App
            </Heading>
            <Spacer />
            <Button colorScheme="blue">Login</Button>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <Heading as="h2" size="xl" mb={4}>
          Events
        </Heading>
        {/* Add more content here */}
      </Container>
    </Box>
  );
};

export default Index;
