import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Heading,
  WrapItem,
  Avatar
} from "@chakra-ui/react";

export const TopNav = () => {
  return (
    <Flex mb={"40px"}>
      <Box p="2">
        <Heading as="h1" size="xl">Notebook App</Heading>
      </Box>
      <Spacer />
      <Box>
        <WrapItem>
          <Avatar
            size="md"
            name="Christian Nwamba"
            src="/avatars/user_icon.jpg"
          />{" "}
        </WrapItem>
        {/* <Button
          colorScheme="teal"
          mr="4"
          d={["none", "inline", "inline", "inline"]}
        >
          Sign Up
        </Button> */}
        {/* <Button colorScheme="teal">Log in</Button> */}
      </Box>
    </Flex>
  );
};
