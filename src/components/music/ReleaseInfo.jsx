import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";

import {
  FaApple,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

import { SiBeatport } from "react-icons/si";

import { formatDateForPreview } from "../../utils/date";

export default function ReleaseInfo({ release, actions }) {
  const platforms = [
    {
      url: release.spotify,
      icon: FaSpotify,
      label: "Spotify",
    },
    {
      url: release.appleMusic,
      icon: FaApple,
      label: "Apple Music",
    },
    {
      url: release.soundcloud,
      icon: FaSoundcloud,
      label: "SoundCloud",
    },
    {
      url: release.youtube,
      icon: FaYoutube,
      label: "YouTube",
    },
    {
      url: release.beatport,
      icon: SiBeatport,
      label: "Beatport",
    },
  ].filter(({ url }) => url);

  const divider = "1px solid var(--chakra-colors-gray-700)";

  const labelStyles = {
    color: "gray.400",
    fontSize: { base: "12px", md: "15px" },
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
  };

  const valueStyles = {
    color: "white",
    fontSize: { base: "15px", md: "22px" },
    fontWeight: "500",
    lineHeight: "1.3",
    overflowWrap: "anywhere",
  };

  return (
    <Box
      w="100%"
      h={{ base: "auto", md: "100%" }}
      minW={0}
      display="grid"
      gridTemplateRows={{
        base: "repeat(3, auto)",
        md: "repeat(3, minmax(0, 1fr))",
      }}
      borderTop={{
        base: "none",
        md: divider,
      }}
    >
      {/* RELEASE DATE */}
      <Flex
        direction={{ base: "row", md: "column" }}
        justify={{
          base: "space-between",
          md: "center",
        }}
        align={{
          base: "center",
          md: "flex-start",
        }}
        minW={0}
        borderBottom={{
          base: "none",
          md: divider,
        }}
        py={{ base: 3, md: 2 }}
        gap={{ base: 3, md: 2 }}
      >
        <Text {...labelStyles}>RELEASE DATE</Text>

        <Text
          {...valueStyles}
          textAlign={{
            base: "right",
            md: "left",
          }}
        >
          {formatDateForPreview(release.releaseDate)}
        </Text>
      </Flex>

      {/* LABEL */}
      <Flex
        direction={{ base: "row", md: "column" }}
        justify={{
          base: "space-between",
          md: "center",
        }}
        align={{
          base: "center",
          md: "flex-start",
        }}
        minW={0}
        borderBottom={{
          base: "none",
          md: divider,
        }}
        py={{ base: 2, md: 2 }}
        gap={{ base: 3, md: 2 }}
      >
        <Text {...labelStyles}>LABEL</Text>

        <Text
          {...valueStyles}
          textAlign={{
            base: "right",
            md: "left",
          }}
        >
          {release.label || "—"}
        </Text>
      </Flex>

      {/* PLATFORMS + BUY ON */}
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        align={{
          base: "stretch",
          md: "center",
        }}
        justify="space-between"
        gap={{
          base: 4,
          md: 3,
        }}
        minW={0}
        borderBottom={{
          base: "none",
          md: divider,
        }}
        py={{
          base: 3,
          md: 2,
        }}
      >
        {/* PLATFORMS */}
        <HStack
          spacing={{
            base: 4,
            md: 5,
          }}
          minW={0}
          flexShrink={1}
          flexWrap="nowrap"
        >
          {platforms.map(({ url, icon, label }) => (
            <Link
              key={label}
              href={url}
              isExternal
              aria-label={label}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              fontSize={{
                base: "22px",
                md: "25px",
              }}
              transition="all .25s ease"
              _hover={{
                color: "gray.400",
                transform: "translateY(-2px)",
              }}
            >
              <Icon as={icon} />
            </Link>
          ))}
        </HStack>

        {/* BUY ON - MOBILE BELOW, RIGHT ALIGNED */}
        <Flex
          w={{
            base: "100%",
            md: "auto",
          }}
          flexShrink={0}
          align="center"
          justify="flex-end"
        >
          {actions}
        </Flex>
      </Flex>
    </Box>
  );
}