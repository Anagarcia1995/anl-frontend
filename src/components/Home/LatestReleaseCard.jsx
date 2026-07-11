import {
  Box,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"
import { API_URL } from "../../services/api"

export default function LatestReleaseCard({
  release,
}) {
  const navigate = useNavigate()

  return (
    <Box
      cursor="pointer"
      onClick={() =>
        navigate(`/music/${release._id}`)
      }
    >
      <Image
        src={`${API_URL}${release.coverImage}`}
        alt={release.title}
        w="100%"
        aspectRatio={1}
        objectFit="cover"
        filter="drop-shadow(0 0 18px rgba(255,255,255,.12))"
      />

<Box mt={5}>
  <Heading
    fontSize="2xl"
    fontWeight="600"
    lineHeight="1.2"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
  >
    {release.title}
  </Heading>

  <Text
    mt={1}
    fontSize="lg"
    color="gray.400"
    textTransform="uppercase"
    letterSpacing="2px"
    whiteSpace="nowrap"
    overflow="hidden"
    textOverflow="ellipsis"
  >
    {release.artist}
  </Text>
</Box>
    </Box>
  )
}