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
  useColorModeValue
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export interface NotesListProps {
  notes: note[];
  handleClick: (id: string) => void;
}

const NotesList: React.SFC<NotesListProps> = ({ notes, handleClick }) => {
  const bg = useColorModeValue("white", "#2f3244");

  const handleDelete = (
    id: string,
    e: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    alert(id);
    e.stopPropagation();
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
                  onClick={() => handleClick(note.id)}
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
                        <Icon
                          color={"green.500"}
                          _hover={{ color: "#ca364a" }}
                          _groupHover={{ display: "block" }}
                          as={DeleteIcon}
                          w={4}
                          h={4}
                          onClick={e => handleDelete(note.id, e)}
                        />
                      </Box>
                    </Flex>
                    <Heading
                      fontSize={"xl"}
                      fontFamily={"body"}
                      textTransform="capitalize"
                    >
                      {note.title}
                    </Heading>

                    <Text color={"gray.500"} fontSize="md">
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
