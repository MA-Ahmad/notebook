import * as React from "react";
import {
  Box,
  Stack,
  Heading,
  SimpleGrid,
  Text,
  Avatar,
  Flex,
  Center,
  useColorModeValue
} from "@chakra-ui/react";

export interface NotesListProps {
  notes: note[];
  handleClick: (id: string) => void;
}

const NotesList: React.SFC<NotesListProps> = ({ notes, handleClick }) => {
  const bg = useColorModeValue("white", "#2f3244");
  return (
    <>
      <Box minH={"50vh"}>
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          mt="40px"
          gridGap="10px"
          position="relative"
          overflow="hidden"
          className="hover-grayscale"
        >
          {notes.map(note => (
            <Center py={10} px={5} key={note.id}>
              <Box
                maxH={"400px"}
                w="100%"
                boxShadow={"xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
                cursor="pointer"
                _hover={{ boxShadow: "dark-lg" }}
                bg={bg}
                onClick={() => handleClick(note.id)}
              >
                <Stack>
                  <Text
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    Note
                  </Text>
                  <Heading
                    // color={useColorModeValue('gray.700', 'white')}
                    fontSize={"xl"}
                    fontFamily={"body"}
                  >
                    {note.title}
                  </Heading>
                  <Text color={"gray.500"} fontSize="md">
                    {note.body}
                  </Text>
                </Stack>
              </Box>
            </Center>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default NotesList;
