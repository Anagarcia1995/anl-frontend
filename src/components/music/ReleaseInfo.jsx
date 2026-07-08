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

import { formatDateForInput } from "../../utils/date"
import { SiBeatport } from "react-icons/si"

export default function ReleaseInfo({ release }) {
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
          {formatDateForInput(release.releaseDate)}
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

      <HStack
        spacing={4}
        fontSize="2xl"
      >
        <Link href={release.spotify} isExternal>
          <Icon as={FaSpotify} />
        </Link>

        <Link href={release.appleMusic} isExternal>
          <Icon as={FaApple} />
        </Link>

        <Link href={release.soundcloud} isExternal>
          <Icon as={FaSoundcloud} />
        </Link>

        <Link href={release.youtube} isExternal>
          <Icon as={FaYoutube} />
        </Link>

        <Link href={release.beatport} isExternal>
          <Icon as={SiBeatport} />
        </Link>
      </HStack>
    </>
  )
}