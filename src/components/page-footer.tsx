import * as React from "react";
import {
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  
} from "@chakra-ui/react";
import siteConfig from "../configs/site-config";
import { FooterSignup } from "./footer-signup";
import { Link } from "react-router-dom";
import { FaGithub, FaDev, FaLinkedin, FaQuora } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

type ExternalFooterLinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
};

const ExternalFooterLink = (props: ExternalFooterLinkProps) => {
  const { href, text, isExternal = true } = props;

  return (
    <ChakraLink
      _focus={{ outline: "none", boxShadow: "none" }}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      fontWeight={500}
      color="gray.500"
      _hover={{ color: "gray.600", textDecoration: "none" }}
    >
      {text}
    </ChakraLink>
  );
};

type InternalFooterLinkProps = {
  href: string;
  text: string;
};

const InternalFooterLink = (props: InternalFooterLinkProps) => {
  const { href, text } = props;

  return (
    <Link to={href}>
      <a>
        <ChakraLink
          _focus={{ outline: "none", boxShadow: "none" }}
          as="span"
          fontWeight={500}
          color="gray.500"
          _hover={{ color: "gray.600", textDecoration: "none" }}
        >
          {text}
        </ChakraLink>
      </a>
    </Link>
  );
};



export function PageFooter() {

  return (
    <SimpleGrid
      flexDirection="column-reverse"
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
      borderTopWidth={2}
      mt="30px"
      borderTopColor="gray.900"
      pt="20px"
    >
      <Box d={["block", "block", "none", "none"]} mb="30px">
        <FooterSignup />
      </Box>
      <Box>
        <SimpleGrid columns={[1, 1, 2, 2]}>
          <Stack mb={["10px", "10px", 0, 0]}>
            <Text as="span">
              <ExternalFooterLink
                href={`mailto:${siteConfig.author.email}`}
                text="Contact us"
              />
            </Text>
            <Text as="span">
              <ExternalFooterLink
                href={siteConfig.repo.url}
                text="Contribute"
              />
            </Text>
            <Text as="span">
              <InternalFooterLink
                href="/projects"
                text="Open source projects"
              />
            </Text>
          </Stack>
          <Stack>
            <Text as="span">
            </Text>

            <Text as="span">
              <ExternalFooterLink
                href={`mailto:${siteConfig.author.email}`}
                text="Sponsor us"
              />
            </Text>
            <Text as="span">
              <ExternalFooterLink
                href={"/#faqs"}
                isExternal={false}
                text="FAQs"
              />
            </Text>
          </Stack>
        </SimpleGrid>
        <Text mt="20px" color="gray.500">
          Made with 🧡 by{" "}
          <ChakraLink
            _focus={{ boxShadow: "none", outline: "none" }}
            target="_blank"
            href={siteConfig.author.twitter}
            fontWeight={600}
            color={"gray.400"}
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)"
            }}
          >
            Muhammad Ahmad
          </ChakraLink>{" "}
        </Text>
      </Box>
      <Box d={["none", "none", "block", "block"]}>
        <FooterSignup />
      </Box>
    </SimpleGrid>
  );
}
