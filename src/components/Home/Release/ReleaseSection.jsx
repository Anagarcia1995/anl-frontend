
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import useReleasesData from "../../../hooks/useReleasesData";
import LatestReleaseCard from "./LatestReleaseCard";
import FeaturedReleaseList from "./FeaturedReleaseList";

const galaxyStyles = {
  "@media (min-width: 700px) and (max-width: 767px)": {
    gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
    gridTemplateRows: "minmax(0, 1fr)",
    height: "210px",
    overflow: "hidden",
  },
};

const galaxyLatestStyles = {
  "@media (min-width: 700px) and (max-width: 767px)": {
    height: "100%",
    borderRight: "1px solid rgba(255,255,255,0.45)",
    borderBottom: "none",
  },
};

const galaxyFeaturedStyles = {
  "@media (min-width: 700px) and (max-width: 767px)": {
    height: "100%",
  },
};

export default function ReleaseSection() {
  const { releases } = useReleasesData();

  const sortedReleases = [...releases].sort(
    (a, b) =>
      new Date(b.releaseDate) - new Date(a.releaseDate)
  );

  const latestRelease = sortedReleases[0];

  const featuredReleases = sortedReleases
    .filter(
      (release) =>
        release.pinned &&
        release._id !== latestRelease?._id
    )
    .sort((a, b) => a.pinOrder - b.pinOrder)
    .slice(0, 4);

  if (!latestRelease) return null;

  return (
    <Box
      as="section"
      w="100%"
      pt={{ base: 20, md: 14, lg: 24 }}
      pb={{ base: 14, md: 10, lg: 16 }}
    >
      <Box
        maxW="1450px"
        mx="auto"
        px={{ base: 3, md: 6, lg: 8 }}
      >
        {/* HEADER */}
        <Flex
          align="flex-end"
          justify="space-between"
          gap={3}
          py={{ base: 2, lg: 1 }}
          borderBottom="1px solid rgba(255,255,255,0.45)"
        >
          <Heading
            as={RouterLink}
            to="/music"
            fontFamily="'Bebas Neue', Impact, sans-serif"
            fontWeight="400"
            fontSize={{
              base: "58px",
              md: "70px",
              lg: "clamp(65px, 8vw, 115px)",
            }}
            lineHeight="1"
            ml={{ base: 2, md: 4, lg: 5 }}
            color="white"
            textDecoration="none"
            transition="opacity .2s ease"
            _hover={{
              opacity: 0.65,
              textDecoration: "none",
            }}
          >
            RELEASES
          </Heading>

          {/* EXPLORE THE SOUND - ALL DEVICES */}
          <Box
            as={RouterLink}
            to="/music"
            flexShrink={0}
            mr={{ base: 2, md: 4, lg: 5 }}
            mb={{ base: 1, md: 2, lg: 3 }}
            fontFamily="'Bebas Neue', Impact, sans-serif"
            fontWeight="400"
            color="white"
            textDecoration="none"
            transition="opacity .2s ease"
            _hover={{
              opacity: 0.65,
              textDecoration: "none",
            }}
            _focusVisible={{
              outline: "1px solid white",
              outlineOffset: "5px",
            }}
            aria-label="Explore all releases"
          >
            <Flex
              direction="column"
              align="flex-end"
              gap={0}
            >
              {["Explore", "The", "Sound"].map((word) => (
                <Text
                  key={word}
                  fontFamily="inherit"
                  fontSize={{
                    base: "20px",
                    md: "24px",
                    lg: "30px",
                    xl: "38px",
                  }}
                  fontWeight="400"
                  lineHeight={{
                    base: "0.80",
                    md: "0.85",
                    lg: "0.85",
                    xl: "0.85",
                  }}
                  textTransform="uppercase"
                  whiteSpace="nowrap"
                >
                  {word}
                </Text>
              ))}
            </Flex>
          </Box>
        </Flex>

        {/* RELEASES GRID */}
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "minmax(0, 1fr)",
            md: "repeat(2, minmax(0, 1fr))",
          }}
          gridTemplateRows={{
            base: "auto auto",
            md: "minmax(0, 1fr)",
          }}
          h={{
            base: "auto",
            md: "310px",
            lg: "360px",
            xl: "400px",
          }}
          minH={0}
          alignItems="stretch"
          overflow={{ base: "visible", md: "hidden" }}
          border="1px solid rgba(255,255,255,0.45)"
          borderTop="none"
          sx={galaxyStyles}
        >
          {/* LATEST RELEASE */}
          <Box
            minW={0}
            minH={0}
            h={{ base: "auto", md: "100%" }}
            borderRight={{
              base: "none",
              md: "1px solid rgba(255,255,255,0.45)",
            }}
            borderBottom={{
              base: "1px solid rgba(255,255,255,0.45)",
              md: "none",
            }}
            sx={galaxyLatestStyles}
          >
            <LatestReleaseCard release={latestRelease} />
          </Box>

          {/* FEATURED RELEASES */}
          <Box
            minW={0}
            minH={0}
            h={{ base: "auto", md: "100%" }}
            position="relative"
            sx={galaxyFeaturedStyles}
          >
            <FeaturedReleaseList releases={featuredReleases} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
