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

export default function ReleaseInfo({
  release,
  actions,
  mobileOnly = false,
}) {
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

  const labelStyles = {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1.5px",
    color: "gray.300",
    textTransform: "uppercase",
    mb: 1,
  };

  const valueStyles = {
    fontSize: {
      base: "12px",
      md: "14px",
    },
    fontWeight: "500",
    lineHeight: "1.4",
    color: "white",
    overflowWrap: "anywhere",
  };

  const platformLinks = (isMobile = false) =>
    platforms.map(({ url, icon, label }) => (
      <Link
        key={label}
        href={url}
        isExternal
        aria-label={label}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
        fontSize={
          isMobile
            ? "23px"
            : { base: "25px", md: "28px" }
        }
        color="white"
        transition="all .25s ease"
        _hover={{
          color: "gray.300",
          transform: "translateY(-2px)",
        }}
      >
        <Icon as={icon} />
      </Link>
    ));

  if (mobileOnly) {
    return (
      <Flex
        w="100%"
        minW={0}
        align="center"
        justify="space-between"
        gap={2}
      >
        <HStack
          spacing={3}
          flex="1"
          minW={0}
          flexWrap="wrap"
          rowGap={2}
          align="center"
        >
          {platformLinks(true)}
        </HStack>

        <Box
          flexShrink={0}
          sx={{
            "& a, & button": {
              fontSize: "9px",
              letterSpacing: "1.2px",
              whiteSpace: "nowrap",
            },
          }}
        >
          {actions}
        </Box>
      </Flex>
    );
  }

  return (
    <Box display="contents">
      {/* DATE */}
      <Box minW={0} flexShrink={0}>
        <Text {...labelStyles}>DATE</Text>

        <Text {...valueStyles}>
          {formatDateForPreview(release.releaseDate)}
        </Text>
      </Box>

      {/* LABEL */}
      <Box minW={0} flexShrink={0}>
        <Text {...labelStyles}>LABEL</Text>

        <Text {...valueStyles}>
          {release.label || "—"}
        </Text>
      </Box>

      {/* MUSIC PLATFORMS */}
      {platforms.length > 0 && (
        <HStack
          spacing={{ base: 5, md: 6 }}
          flexWrap="wrap"
          align="center"
          rowGap={3}
          flexShrink={0}
        >
          {platformLinks()}
        </HStack>
      )}

      {/* BUY RELEASE + ADMIN ACTIONS */}
      <Flex
        justify="flex-end"
        align="center"
        minW={0}
        flexShrink={0}
      >
        {actions}
      </Flex>
    </Box>
  );
}