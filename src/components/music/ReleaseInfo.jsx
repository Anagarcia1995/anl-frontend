import {
  Box,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react"

import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa"

import { formatDateForPreview } from "../../utils/date"
import { SiBeatport } from "react-icons/si"


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
        lineHeight="1.1"
      >
        {release.title}
      </Heading>

      <Text
        color="gray.500"
        textTransform="uppercase"
        letterSpacing="3px"
        fontWeight="400"
        fontSize={{ base: "md", lg: "lg" }}
        mb={{ base: 4, lg: 14 }}
      >
        {release.artist}
      </Text>

      <Box mb={{ base: 2, lg: 6 }}>
        <Text
          color="gray.500"
          fontSize="sm"
          fontWeight="500"
          mb={1}
        >
          Release Date
        </Text>

        <Text fontSize="md">
          {formatDateForPreview(release.releaseDate)}
        </Text>
      </Box>

      <Box mb={{ base: 3, lg: 8 }}>
        <Text
          color="gray.500"
          fontSize="sm"
          fontWeight="500"
          mb={1}
        >
          Label
        </Text>

        <Text fontSize="md">
          {release.label}
        </Text>
      </Box>

{hasPlatforms && (
  <HStack
    spacing={4}
    fontSize="2xl"
  >
    {release.spotify && (
      <Link href={release.spotify} isExternal>
        <Icon as={FaSpotify} />
      </Link>
    )}

    {release.appleMusic && (
      <Link href={release.appleMusic} isExternal>
        <Icon as={FaApple} />
      </Link>
    )}

    {release.soundcloud && (
      <Link href={release.soundcloud} isExternal>
        <Icon as={FaSoundcloud} />
      </Link>
    )}

    {release.youtube && (
      <Link href={release.youtube} isExternal>
        <Icon as={FaYoutube} />
      </Link>
    )}

    {release.beatport && (
      <Link href={release.beatport} isExternal>
        <Icon as={SiBeatport} />
      </Link>
    )}
  </HStack>
)}
    </>
  )
}