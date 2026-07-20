import {
  Box,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react"

import {
  FaApple,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa"
import { SiBeatport } from "react-icons/si"

import { formatDateForPreview } from "../../utils/date"

export default function ReleaseInfo({ release }) {
  const hasPlatforms =
    release.spotify ||
    release.appleMusic ||
    release.soundcloud ||
    release.youtube ||
    release.beatport

  return (
    <>
      <Heading
        fontSize={{ base: "2xl", lg: "3xl" }}
        fontWeight="500"
        letterSpacing="0.5px"
        lineHeight="1.1"
      >
        {release.title}
      </Heading>

      <Text
        color="gray.500"
        textTransform="uppercase"
        letterSpacing="2px"
        fontWeight="400"
        fontSize={"lg"}
        mb={{ base: 4, md: 6, lg: 10 }}
      >
        {release.artist}
      </Text>

      <Box mb={{ base: 4, lg: 6 }}>
        <Text
          color="gray.500"
          fontSize="md"
          fontWeight="500"
          mb={0}
        >
          Release Date
        </Text>

        <Text fontSize="lg">
          {formatDateForPreview(release.releaseDate)}
        </Text>
      </Box>

      <Box mb={{ base: 4, md: 4, lg: 6 }}>
        <Text
          color="gray.500"
          fontSize="md"
          fontWeight="500"
          mb={0}
        >
          Label
        </Text>

        <Text fontSize="lg">
          {release.label}
        </Text>
      </Box>

      {/* PLATFORMS */}

      {hasPlatforms && (
        <HStack
          spacing={4}
          fontSize="3xl"
        >
          {release.spotify && (
            <Link
              href={release.spotify}
              isExternal
            >
              <Icon as={FaSpotify} />
            </Link>
          )}

          {release.appleMusic && (
            <Link
              href={release.appleMusic}
              isExternal
            >
              <Icon as={FaApple} />
            </Link>
          )}

          {release.soundcloud && (
            <Link
              href={release.soundcloud}
              isExternal
            >
              <Icon as={FaSoundcloud} />
            </Link>
          )}

          {release.youtube && (
            <Link
              href={release.youtube}
              isExternal
            >
              <Icon as={FaYoutube} />
            </Link>
          )}

          {release.beatport && (
            <Link
              href={release.beatport}
              isExternal
            >
              <Icon as={SiBeatport} />
            </Link>
          )}
        </HStack>
      )}
    </>
  )
}