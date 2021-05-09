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
import siteConfig from "configs/site-config";
import { FooterSignup } from "./footer-signup";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";

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

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

type ExternalSocialLinkProps = {
  href: string;
  label: string;
  isExternal?: boolean;
  type: string;
  icon: any;
};

const ExternalSocialLink = (props: ExternalSocialLinkProps) => {
  const { href, label, icon, type, isExternal = true } = props;

  return (
    <IconButton
      as={ChakraLink}
      href={href}
      target={isExternal ? "_blank" : "_self"}
      aria-label={label}
      icon={icon}
      colorScheme={type}
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
                    as="span"
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
                          href={siteConfig.author.github}
                          icon={<FaGithub />}
                          type="gray"
                          label="Github Account"
                        />
                        <ExternalSocialLink
                          href={siteConfig.author.dev}
                          icon={<FaDev />}
                          type="gray"
                          label="Dev Account"
                        />
                        <ExternalSocialLink
                          href={siteConfig.author.linkedin}
                          icon={<FaLinkedin />}
                          type="linkedin"
                          label="LinkedIn Account"
                        />
                        <ExternalSocialLink
                          href={siteConfig.author.twitter}
                          icon={<FaTwitter />}
                          type="twitter"
                          label="Twitter Account"
                        />
                        <ExternalSocialLink
                          href={siteConfig.author.quora}
                          icon={<FaQuora />}
                          type="red"
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
                text="Sponsor"
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
