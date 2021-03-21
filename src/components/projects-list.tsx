import * as React from "react";
import {
  Heading,
  Box,
  Image,
  Badge,
  SimpleGrid,
  Text,
  Flex,
  Link,
  HStack,
  Tooltip,
  useColorModeValue,
  SlideFade,
  useDisclosure
} from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import projectsData from "../data/projects-data";
import Carousel from "./carousel";

const ProjectsList = () => {
  const [imageUrl, setImageUrl] = React.useState<string>("");
  const bg = useColorModeValue("white", "#2f3244");
  const textColor = useColorModeValue("gray.600", "#b5b1b1");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (imageUrl: string) => {
    if (imageUrl) {
      setImageUrl(imageUrl);
      onOpen();
    }
  };

  return (
    <>
      <Box minH={"50vh"}>
        <Flex p="2" justifyContent="center">
          <Heading
            as="h1"
            size="xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            _focus={{ boxShadow: "none", outline: "none" }}
            _hover={{
              textDecoration: "none",
              bgGradient: "linear(to-r, red.500, yellow.500)"
            }}
          >
            Projects
          </Heading>
        </Flex>
        <SlideFade in={true} offsetY="50vh">
          <SimpleGrid
            columns={[1, 2, 2, 3]}
            mt="40px"
            gridGap="10px"
            position="relative"
            overflow="hidden"
          >
            {projectsData.map((project, index) => (
              <Box
                maxW="sm"
                height="fit-content"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                mx="5px"
                mb="20px"
                _hover={{ boxShadow: "lg" }}
                key={index}
              >
                <Image
                  height={{ base: "28vh", lg: "32vh" }}
                  cursor="pointer"
                  width={"100%"}
                  src={project.coverImage}
                  objectFit="cover"
                  alt="cover image"
                  fallbackSrc="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
                  onClick={() => handleClick(project.coverImage)}
                />
                <Box p="5" bg={bg}>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h6"
                      fontSize="md"
                      lineHeight="tight"
                      textAlign="left"
                      isTruncated
                    >
                      <Link
                        href={project.liveLink || project.githubLink}
                        textDecoration={"none !important"}
                        isExternal
                      >
                        {project.title}
                        <ExternalLinkIcon mx="3px" />
                      </Link>
                    </Box>
                    <Box mt="1">
                      {project.stars ? (
                        <Link
                          href={project.githubLink}
                          textDecoration={"none !important"}
                          isExternal
                        >
                          <Tooltip
                            hasArrow
                            label="Github stars"
                            placement="top-end"
                          >
                            <Box>
                              <StarIcon color="teal.300" fontSize="sm" />
                              <Box
                                as="span"
                                ml="2"
                                color={textColor}
                                fontSize="sm"
                              >
                                {project.stars}
                              </Box>
                            </Box>
                          </Tooltip>
                        </Link>
                      ) : (
                        ""
                      )}
                    </Box>
                  </Flex>
                  <Box textAlign="left">
                    <HStack spacing="1" mt="2" mb="2">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          borderRadius="full"
                          px="1"
                          colorScheme={tech.color}
                          textTransform="lowercase"
                          key={index}
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                  <Box color={textColor} fontSize="md" textAlign="left">
                    {project.desc}
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </SlideFade>
      </Box>
      <Carousel
        imageUrl={imageUrl}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default ProjectsList;
