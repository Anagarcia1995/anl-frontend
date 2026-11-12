
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export default function FeaturedReleaseList({ releases }) {
  const navigate = useNavigate();

  const goToRelease = (id) => {
    navigate(`/music/${id}`);
  };

const formatLabel = (label) => {
  if (!label) return "";

  return label
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter") {
      goToRelease(id);
    }
  };

  const selectedReleases = releases.slice(0, 4);

  return (
    <Box
      w="100%"
      h={{ base: "auto", md: "100%" }}
      minH={0}
      minW={0}
      bg="#080808"
    >
      {/* MOBILE: TEXT-ONLY LIST */}
      <Box display={{ base: "block", md: "none" }}>
        {selectedReleases.map((release, index) => (
          <Box key={release._id}>
            {index > 0 && (
              <Box
                mx={4}
                h="1px"
                bg="rgba(255,255,255,0.15)"
              />
            )}

            <Flex
              direction="row"
              align="center"
              justify="space-between"
              gap={3}
              px={4}
              py={4}
              minW={0}
              cursor="pointer"
              role="link"
              tabIndex={0}
              onClick={() => goToRelease(release._id)}
              onKeyDown={(event) =>
                handleKeyDown(event, release._id)
              }
              _focusVisible={{
                outline: "1px solid white",
                outlineOffset: "-3px",
              }}
            >
              {/* TRACK INFORMATION */}
              <Flex
                direction="column"
                justify="center"
                flex="1"
                minW={0}
                gap="5px"
              >
                <Heading
                  as="h3"
                  fontFamily="'Bebas Neue', Impact, sans-serif"
                  fontWeight="400"
                  fontSize="clamp(20px, 5.2vw, 27px)"
                  lineHeight="1"
                  textTransform="uppercase"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {release.title}
                </Heading>

                <Flex
                  align="center"
                  gap={2}
                  minW={0}
                  overflow="hidden"
                >
                  <Text
                    fontFamily="'Space Grotesk', Arial, sans-serif"
                    fontSize="11px"
                    fontWeight="500"
                    letterSpacing="0.03em"
                    lineHeight="1.4"
                    textTransform="uppercase"
                    color="gray.300"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flexShrink={1}
                    minW={0}
                  >
                    {release.artist}
                  </Text>

                  {release.label && (
                    <>
                      <Box
                        h="1px"
                        w="16px"
                        bg="gray.500"
                        flexShrink={0}
                      />

                      <Text
                        fontFamily="'Space Grotesk', Arial, sans-serif"
                        fontSize="11px"
                        fontWeight="400"
                        letterSpacing="0.02em"
                        lineHeight="1.4"
                        color="gray.400"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        minW={0}
                      >
                        {formatLabel(release.label)}
                      </Text>
                    </>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>

      {/* TABLET + DESKTOP: ORIGINAL GRID */}
      <Box
        display={{ base: "none", md: "grid" }}
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridTemplateRows="repeat(2, minmax(0, 1fr))"
        w="100%"
        h="100%"
        minH={0}
        minW={0}
        overflow="hidden"
      >
        {selectedReleases.map((release, index) => (
          <Flex
            key={release._id}
            direction="column"
            minW={0}
            minH={0}
            h="100%"
            overflow="hidden"
            p={{
              md: 2,
              lg: 3,
            }}
            borderRight={
              index % 2 === 0
                ? "1px solid rgba(255,255,255,0.45)"
                : "none"
            }
            borderBottom={
              index < 2
                ? "1px solid rgba(255,255,255,0.45)"
                : "none"
            }
            cursor="pointer"
            role="link"
            tabIndex={0}
            onClick={() => goToRelease(release._id)}
            onKeyDown={(event) =>
              handleKeyDown(event, release._id)
            }
            transition="background .25s ease"
            _hover={{ bg: "#191919" }}
          >
            {/* TITLE + ARTIST */}
            <Box minW={0} flexShrink={0}>
              <Heading
                as="h3"
                fontFamily="'Bebas Neue', Impact, sans-serif"
                fontWeight="400"
                fontSize={{
                  md: "clamp(17px, 1.8vw, 25px)",
                  lg: "clamp(20px, 1.9vw, 29px)",
                }}
                lineHeight="0.96"
                textTransform="uppercase"
                overflowWrap="anywhere"
              >
                {release.title}
              </Heading>

              <Text
                mt={1}
                fontFamily="'Space Grotesk', Arial, sans-serif"
                fontSize={{
                  md: "9px",
                  lg: "10px",
                }}
                fontWeight="500"
                letterSpacing="0.04em"
                textTransform="uppercase"
                color="gray.300"
                lineHeight="1.25"
                overflowWrap="anywhere"
              >
                {release.artist}
              </Text>
            </Box>

            {/* COVER */}
            <Flex
              flex="1"
              minH={0}
              minW={0}
              align="flex-end"
              justify="flex-end"
              pt={1}
            >
              <Image
                className="featured-cover"
                src={release.coverImage}
                alt={release.title}
                display="block"
                w="auto"
                h="auto"
                maxW="62%"
                maxH="78%"
                aspectRatio={1}
                objectFit="contain"
              />
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
