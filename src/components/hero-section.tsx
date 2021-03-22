import * as React from "react";
import { Heading, Text, Flex, SlideFade } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <Flex h={"55vh"} justifyContent="center" align="center">
        <SlideFade in={true} offsetY="50vh">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
          </motion.div>
        </SlideFade>
      </Flex>
    </>
  );
}
