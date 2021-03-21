import * as React from "react";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuItem,
  MenuDivider,
  MenuButton,
  IconButton,
  MenuList,
  HStack,
  useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon, HamburgerIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import NoteForm from "./note-form";

export interface TopNavProps {
  handleNoteCreate?: (note: note) => void;
}

export const TopNav: React.SFC<TopNavProps> = ({ handleNoteCreate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex mb={"40px"} align="center">
        <Box p="2" as={Link} to="/">
          <Heading
            as="h1"
            size="xl"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            _focus={{ boxShadow: "none", outline: "none" }}
            _hover={{
              textDecoration: "none",
              bgGradient: "linear(to-r, red.500, yellow.500)"
            }}
          >
            Notebook App
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <HStack>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                transition="all 0.2s"
                size="md"
                variant="outline"
                _hover={{ bg: "gray.400" }}
                _focus={{ boxShadow: "outline" }}
              />
              <MenuList fontSize="sm">
                <MenuItem icon={<AddIcon />} onClick={onOpen}>
                  {" "}
                  <Text textShadow="1px 1px #9c1786">New Note</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<ArrowRightIcon />} as={Link} to="/projects">
                  {" "}
                  <Text textShadow="1px 1px #9c1786">Open Source Projects</Text>                  
                </MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
        </Box>
      </Flex>
      <NoteForm
        isOpen={isOpen}
        onClose={onClose}
        handleNoteCreate={handleNoteCreate}
      />
    </>
  );
};
