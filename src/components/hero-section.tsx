import * as React from "react";
import { Heading, Text, Flex } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <>
      <Flex h={"50vh"} justifyContent="center" align="center">
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Text textShadow="1px 1px #9c1786">Make notes for </Text>
            <Text
              as={"span"}
              color={"green.400"}
              bgGradient="linear(to-r, green.200, pink.500)"
              bgClip="text"
            >
              your daily work
            </Text>
          </Heading>
      </Flex>
    </>
  );
}
