import * as React from 'react';
import {
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <>
        <Flex
        h={"50vh"}
          justifyContent="center"
          align="center">
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Make notes for <br />
            <Text as={'span'} color={'green.400'}>
              your daily work
            </Text>
          </Heading>
        </Flex>
    </>
  );
}