import * as React from "react";
import {
  Heading,
  Box,
  Image,
  Badge,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Flex,
  Link,
  Text,
  Tooltip,
  HStack
} from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import projectsData from "../data/projects-data";
export interface ProjectsListProps {}

const ProjectsList: React.SFC<ProjectsListProps> = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Blog App",
    detail: "A React Blog App built by using libraries like ChakraUI, Formik",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4
  };

  return (
    <Box minH={"50vh"}>
      <Flex p="2" justifyContent="center">
        <Heading
          as="h1"
          size="xl"
          _focus={{ boxShadow: "none", outline: "none" }}
          _hover={{ textDecoration: "none", color: "yellow.400" }}
        >
          Projects
        </Heading>
      </Flex>
      <SimpleGrid
        columns={[1, 2, 2, 3]}
        mt="40px"
        gridGap="10px"
        position="relative"
        overflow="hidden"
      >
        {projectsData.map(project => (
          <Box
            maxW="sm"
          height="fit-content"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            mx="5px"
            mb="20px"
          >
            <Image
              height={{sm: "20vh",md: "20vh",lg: "25.5vh", xl: '25.5vh'}}
              width={"100%"}
              src={project.coverImage}
              objectFit="cover"
              alt="cover image"
              fallbackSrc="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
            />
            <Box p="5">
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
                    href={project.liveLink}
                    textDecoration={"none !important"}
                    isExternal
                  >
                    {project.title}
                    <ExternalLinkIcon mx="3px" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={project.githubLink}
                    textDecoration={"none !important"}
                    isExternal
                  >
                    <StarIcon color="teal.300" fontSize="sm" />
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {/* <Tooltip
                        hasArrow
                        label="Github stars"
                        placement="top-end"
                      > */}
                      {project.stars}
                      {/* </Tooltip> */}
                    </Box>
                  </Link>
                </Box>
              </Flex>
              <Box textAlign="left">
                <HStack spacing="1" mt="2" mb="2">
                  {project.technologies.map(tech => (
                    <Badge
                      borderRadius="full"
                      px="1"
                      colorScheme="teal"
                      textTransform="lowercase"
                    >
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              <Box color="gray.600" fontSize="md" textAlign="left">
                {project.desc}
              </Box>

            </Box>
          </Box>
        ))}
        <Box
          maxW="sm"
          height="fit-content"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          mx="5px"
          mb="20px"
        >
          <Image
            src={property.imageUrl}
            alt={property.imageAlt}
            fallbackSrc="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
          />

          <Box p="5">
            <Flex justifyContent="space-between" alignItems="center">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                textAlign="left"
                isTruncated
              >
                <Link
                  href="https://chakra-ui.com"
                  textDecoration={"none !important"}
                  isExternal
                >
                  {property.title}
                  <ExternalLinkIcon mx="3px" />
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://chakra-ui.com"
                  textDecoration={"none !important"}
                  isExternal
                >
                  <StarIcon color="teal.300" fontSize="sm" />
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    <Tooltip hasArrow label="Github stars" placement="top-end">
                      9
                    </Tooltip>
                  </Box>
                </Link>
              </Box>
            </Flex>
            <Box textAlign="left">
              <Badge borderRadius="full" px="1" colorScheme="teal">
                React
              </Badge>
            </Box>
            <Box color="gray.600" fontSize="md" textAlign="left">
              {property.detail}
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsList;
