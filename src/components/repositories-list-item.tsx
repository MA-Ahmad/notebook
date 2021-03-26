import * as React from "react";
import {
  Box,
  Badge,
  Flex,
  Center,
  Link,
  HStack,
  Tooltip,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Carousel from "./carousel";
import LazyImage from "./lazy-image";

interface RepositoriesListItemProps {
  repo: repo;
}

const RepositoriesListItem: React.SFC<RepositoriesListItemProps> = ({
  repo
}) => {
  const [repoId, setRepoId] = React.useState<number>(0);
  const bg = useColorModeValue("white", "#2f3244");
  const textColor = useColorModeValue("gray.600", "#b5b1b1");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (id: number) => {
    setRepoId(id);
    onOpen();
  };

  return (
    <>
      <Center>
        <Box
          maxW="sm"
          height="fit-content"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          mx="5px"
          mb="10px"
          mt="10px"
          _hover={{ boxShadow: "lg" }}
        >
          {/* <Image
          height={{ base: "28vh", lg: "32vh" }}
          cursor={repo.coverImage ? "pointer" : "auto"}
          width={"100%"}
          src={repo.coverImage}
          objectFit="cover"
          alt="cover image"
          fallbackSrc="https://via.placeholder.com/320x216/DCDFDF/ffffff/?text=CoverImage"
          fallbackSrc={placeholder}
          onClick={() => handleClick(repo.coverImage)}
        /> */}
          <LazyImage
            id={repo.id}
            src={repo.coverImage}
            blurHash={repo.blurHash}
            handleClick={handleClick}
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
                  href={repo.liveLink || repo.githubLink}
                  textDecoration={"none !important"}
                  isExternal
                >
                  {repo.title}
                  <ExternalLinkIcon mx="3px" />
                </Link>
              </Box>
              <Box mt="1">
                {repo.stars ? (
                  <Link
                    href={repo.githubLink}
                    textDecoration={"none !important"}
                    isExternal
                  >
                    <Tooltip hasArrow label="Github stars" placement="top-end">
                      <Box>
                        <StarIcon color="teal.300" fontSize="sm" />
                        <Box as="span" ml="2" color={textColor} fontSize="sm">
                          {repo.stars}
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
                {repo.technologies.map((tech, index) => (
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
              {repo.desc}
            </Box>
          </Box>
        </Box>
      </Center>
      <Carousel
        repoId={repoId}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default RepositoriesListItem;
