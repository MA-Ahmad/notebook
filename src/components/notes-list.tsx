import * as React from "react";
import {
  Box,
  Stack,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Center,
  Fade,
  Icon,
  useToast,
  useColorModeValue,
  HStack
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export interface NotesListProps {
  notes: note[];
  handleClick: (id: string, readOnly: boolean) => void;
  setNotes: (note: note[]) => void;
}

const NotesList: React.SFC<NotesListProps> = ({
  notes,
  handleClick,
  setNotes
}) => {
  const bg = useColorModeValue("white", "#2f3244");
  const toast = useToast();

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
    handleClick(id, false);
    e.stopPropagation();
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
      <Box minH={"50vh"}>
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          mt="40px"
          gridGap="10px"
          position="relative"
          overflow="hidden"
        >
          {notes.map(note => (
            <Fade in={true}>
              <Center py={6} px={5} key={note.id}>
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
                  onClick={() => handleClick(note.id, true)}
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
                      <Box _groupHover={{ display: "block" }} display="none">
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
            </Fade>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NotesList;
