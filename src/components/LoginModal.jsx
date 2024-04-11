import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

const LoginModal = () => {
  const { isOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("jwt", data.jwt);
        onClose();
      } else {
        throw new Error(data.message[0].messages[0].message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>
            {error && (
              <Text color="red.500" mt={2}>
                {error}
              </Text>
            )}
            <Button mt={4} colorScheme="blue" type="submit">
              Login
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
