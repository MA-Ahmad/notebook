import * as React from "react";
import {
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  IconButton
} from "@chakra-ui/react";
import siteConfig from "../configs/site-config";
import { FooterSignup } from "./footer-signup";
import { Link } from "react-router-dom";
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from "react-icons/fa";
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

type ExternalSocialLinkProps = {
  href: string;
  label: string;
  isExternal?: boolean;
  icon: any;
};

const ExternalSocialLink = (props: ExternalSocialLinkProps) => {
  const { href, label, icon, isExternal = true } = props;

  return (
    <IconButton
      as={ChakraLink}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      aria-label={label}
      // size="lg"
      icon={icon}
      {...iconProps}
    />
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
              <Popover placement="top">
                <PopoverTrigger>
                  <Text
                    _focus={{ outline: "none", boxShadow: "none" }}
                    fontWeight={500}
                    color="gray.500"
                    cursor="pointer"
                    _hover={{ color: "gray.600", textDecoration: "none" }}
                  >
                    Social Accounts
                  </Text>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Stack
                        as="footer"
                        isInline
                        spacing={[1, 2]}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <ExternalSocialLink
                          href="https://github.com/MA-Ahmad"
                          icon={<FaGithub />}
                          label="Github Account"
                        />
                        <ExternalSocialLink
                          href="https://dev.to/m_ahmad"
                          icon={<FaDev />}
                          label="Dev Account"
                        />
                        <ExternalSocialLink
                          href="https://www.linkedin.com/feed/"
                          icon={<FaLinkedin />}
                          label="LinkedIn Account"
                        />
                        <ExternalSocialLink
                          href="https://www.twitter.com/muhammad_ahmaad"
                          icon={<FaTwitter />}
                          label="Twitter Account"
                        />
                        <ExternalSocialLink
                          href="https://www.quora.com/profile/Muhammad-Ahmad-66"
                          icon={<FaQuora />}
                          label="Quora Account"
                        />
                      </Stack>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
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
            href={siteConfig.author.github}
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
