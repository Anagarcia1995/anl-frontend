
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
      {/* MOBILE: HORIZONTAL LIST */}
      <Box display={{ base: "block", md: "none" }}>
        {selectedReleases.map((release, index) => (
          <Box key={release._id}>
            {index > 0 && (
              <Box
                mx={5}
                h="1px"
                bg="rgba(255, 255, 255, 0.12)"
              />
            )}

            <Flex
              direction="row"
              align="center"
              justify="space-between"
              gap={3}
              px={3}
              py={3}
              minW={0}
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
              {/* COVER — LEFT */}
              <Image
                src={release.coverImage}
                alt={release.title}
                w="50px"
                h="50px"
                flexShrink={0}
                objectFit="cover"
                transition="transform .3s ease"
              />

              {/* TITLE + ARTIST — RIGHT */}
              <Flex
                direction="column"
                justify="center"
                flex="1"
                minW={0}
                gap={1}
              >
                <Heading
                  as="h3"
                  fontFamily="'Bebas Neue', Impact, sans-serif"
                  fontWeight="400"
                  fontSize="clamp(19px, 5vw, 25px)"
                  lineHeight="0.98"
                  textTransform="uppercase"
                  overflowWrap="anywhere"
                >
                  {release.title}
                </Heading>

                <Text
                  fontFamily="'Space Grotesk', Arial, sans-serif"
                  fontSize="10px"
                  fontWeight="500"
                  letterSpacing="0.04em"
                  lineHeight="1.3"
                  textTransform="uppercase"
                  color="gray.300"
                  overflowWrap="anywhere"
                >
                  {release.artist}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>

      {/* TABLET + DESKTOP: GRID */}
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
