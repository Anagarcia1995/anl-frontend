import {
  Badge,
  Box,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

export default function LatestReleaseCard({ release }) {
  const navigate = useNavigate()

  const releaseDate = new Date(
    release.releaseDate
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <Box
      bg="#000000"
      border="1px solid"
      borderColor="whiteAlpha.400"
      pt={{ base: 5, lg: 7 }}
      pb={{ base: 5, lg: 5 }}
      px={{ base: 5, lg: 12 }}
      maxW={{ base: "360px", lg: "100%" }}
      h={{ base: "auto", lg: "470px" }}
      mx="auto"
      display="flex"
      flexDirection="column"
      cursor="pointer"
      onClick={() => navigate(`/music/${release._id}`)}
    >
<Box
  position="relative"
  display="inline-block"
  alignSelf="center"
  transition="transform .35s ease"
  transformOrigin="center"
  _hover={{
    transform: "scale(1.04)",
    zIndex: 2,
  }}
>
  <Image
    src={release.coverImage}
    alt={release.title}
    w="100%"
    objectFit="cover"
  />

  <Badge
    position="absolute"
    top={2}
    left={2}
    bg="white"
    color="black"
    px={3}
    py={1}
    fontSize="sm"
    fontWeight="700"
    letterSpacing="0.08em"
    pointerEvents="none"
  >
    LATEST RELEASE
  </Badge>
</Box>

      <Box mt={3} ml="5px">
        <Heading
          size={{ base: "md", lg: "md" }}
          color="white"
          lineHeight="1.3"
          noOfLines={1}
          
        >
          {release.title}

          <Text
            as="span"
            ml={3}
            fontSize={{ base: "md", lg: "md" }}
            fontWeight="500"
            color="gray.300"
            textTransform="uppercase"
          >
            {release.artist}
          </Text>
        </Heading>

        <Text
          mt={0}
          color="gray.400"
          fontSize={{ base: "sm", lg: "sm" }}
          noOfLines={1}
        >
          {releaseDate} · {release.label}
        </Text>
      </Box>
    </Box>
  )
}