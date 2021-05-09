import * as React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Center,
  Fade,
  Icon,
  useToast,
  useColorModeValue,
  HStack,
  useDisclosure
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { AnimateSharedLayout, motion } from "framer-motion";
import NoteModal from "./note-modal";
import StackGrid from "react-stack-grid";

export interface NotesListProps {
  notes: note[];
  handleClick: (id: string) => void;
  setNotes: (note: note[]) => void;
}

const NotesList: React.SFC<NotesListProps> = ({
  notes,
  handleClick,
  setNotes
}) => {
  const bg = useColorModeValue("white", "#2f3244");
  const [selectedNote, setSelectedNote] = React.useState<note>();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDelete = (
    id: string,
    e: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    const newNotes: note[] = notes.filter((note: note) => note.id !== id);
    setNotes(newNotes);
    showToast();
    e.stopPropagation();
  };

  const onClick = (id: string, e: React.MouseEvent<SVGElement, MouseEvent>) => {
    handleClick(id);
    e.stopPropagation();
  };

  const handleSelectedNote = (note: note) => {
    setSelectedNote(note);
    onOpen();
  };

  const showToast = () => {
    toast({
      title: "Note deleted.",
      status: "success",
      position: "top",
      duration: 2000,
      isClosable: true
    });
  };

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <Box minH={"50vh"}>
          {/* <SimpleGrid
            columns={[1, 2, 2, 3]}
            mt="40px"
            gridGap="10px"
            position="relative"
            overflow="hidden"
          > */}
          <StackGrid columnWidth={330}>
            {notes.map(note => (
              <Fade in={true}>
                <motion.div
                  whileHover={{ y: -10 }}
                  layoutId={note.id}
                  onClick={() => handleSelectedNote(note)}
                >
                  <Center py={2} px={2} key={note.id}>
                    <Box
                      maxH={"400px"}
                      w="100%"
                      boxShadow={"lg"}
                      rounded={"md"}
                      p={6}
                      overflow={"hidden"}
                      cursor="pointer"
                      _hover={{ boxShadow: "xl" }}
                      bg={bg}
                      role="group"
                      // onClick={() => handleClick(note.id, true)}
                    >
                      <Stack>
                        <Flex
                          _groupHover={{ justifyContent: "space-between" }}
                          justifyContent="center"
                          align="center"
                        >
                          <Box>
                            <Text
                              color={"green.500"}
                              textTransform={"uppercase"}
                              fontWeight={800}
                              fontSize={"sm"}
                              letterSpacing={1.1}
                            >
                              Note
                            </Text>
                          </Box>
                          <Box
                            _groupHover={{ display: "block" }}
                            display="none"
                          >
                            <HStack spacing="2">
                              <Icon
                                color={"green.500"}
                                _hover={{ color: "green.600" }}
                                _groupHover={{ display: "block" }}
                                as={EditIcon}
                                w={4}
                                h={4}
                                onClick={e => onClick(note.id, e)}
                              />
                              <Icon
                                color={"green.500"}
                                _hover={{ color: "#ca364a" }}
                                _groupHover={{ display: "block" }}
                                as={DeleteIcon}
                                w={4}
                                h={4}
                                onClick={e => onDelete(note.id, e)}
                              />
                            </HStack>
                          </Box>
                        </Flex>
                        <Heading
                          fontSize={"xl"}
                          fontFamily={"body"}
                          textTransform="capitalize"
                          noOfLines={2}
                        >
                          {note.title}
                        </Heading>

                        <Text
                          color={"gray.500"}
                          fontSize="md"
                          noOfLines={{ base: 3, md: 4 }}
                        >
                          {note.body}
                        </Text>
                      </Stack>
                    </Box>
                  </Center>
                </motion.div>
              </Fade>
            ))}
          </StackGrid>
          {/* </SimpleGrid> */}
        </Box>
        {isOpen ? (
          <NoteModal
            isOpen={isOpen}
            onClose={onClose}
            selectedNote={selectedNote}
          />
        ) : (
          ""
        )}
      </AnimateSharedLayout>
    </>
  );
};

export default NotesList;
