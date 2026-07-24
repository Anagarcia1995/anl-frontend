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
  const proStyles = "@media screen and (min-width: 992px) and (max-width: 1279px)"

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
pt={{
  base: 5,
  md: 4,
  lg: 7,
}}

pb={{
  base: 4,
  md: 3,
  lg: 5,
}}

px={{
  base: 7,
  md: 4,
  lg: 12,
}}
sx={{
  [proStyles]: {
    height: "400px",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
}}
      maxW={{ base: "390px", lg: "100%" }}
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
  maxW={{
    base: "100%",
    md: "250px",
    lg: "100%",
  }}
  mx="auto"
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

<Box
  mt={{
    base: 3,
    md: 4,
    lg: 3,
  }}
  ml="5px"
  sx={{
    [proStyles]: {
      marginTop: "15px",
    },
  }}
>
  <Heading
    fontSize={{ base: "md", md: "md", lg: "lg" }}
    color="white"
    lineHeight="1.3"
    noOfLines={3}
    sx={{
      [proStyles]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    }}
  >
    {release.title}

    <Text
      as="span"
      ml={2}
      fontSize={{ base: "md", md: "sm", lg: "md" }}
      fontWeight="500"
      color="gray.300"
      textTransform="uppercase"
      sx={{
        [proStyles]: {
          display: "block",
          marginLeft: 0,
          marginTop: "4px",
        },
      }}
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