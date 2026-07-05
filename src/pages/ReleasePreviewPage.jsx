import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react"

import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaArrowLeft
} from "react-icons/fa"

import { SiBeatport } from "react-icons/si"

import { releases } from "../data/releases"
import ReleasesSection from "../components/music/ReleasesSection"

export default function ReleasePreview() {

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}, [id])

  const release = releases.find(
    release => release.id === Number(id)
  )

  if (!release) {
    return (
      <Box p={10}>
        Release not found
      </Box>
    )
  }

  return (

    <Box
      maxW="1450px"
      mx="auto"
      px={10}
      py={{ base: 5, lg: 16 }}
      pb={{ base: 5, lg: 10 }}
    >

      {/* ---------- HERO ---------- */}

<Flex
  direction={{ base: "column", lg: "row" }}
  gap={{ base: 4, lg: 16 }}
  align={{ base: "stretch", lg: "flex-end" }}
  mb={{ base: 10, lg: 16 }}
>

        {/* COVER */}

<Box
  w={{ base: "100%", lg: "30%" }}
>

  <Icon
  as={FaArrowLeft}
  display={{ base: "block", lg: "none" }}
  boxSize={6}
  mb={6}
  cursor="pointer"
  onClick={() => navigate("/music")}
  transition="all .2s ease"
/>

  <Image
    src={release.cover}
    alt={release.title}
    w="100%"
    aspectRatio={1}
    objectFit="cover"
    boxShadow="2xl"
  />
</Box>

        {/* INFO */}

<Flex
  w={{ base: "100%", lg: "45%" }}
  direction="column"
  justify="space-between"
>

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
              textTransform="CamelCase"
              fontWeight="500"
              mb={1}
            >
              Release Date
            </Text>

            <Text fontSize="md">
              {release.releaseDate}
            </Text>

          </Box>

          <Box mb={{ base: 3, lg: 8 }}>

            <Text
              color="gray.500"
              fontSize="sm"
              textTransform="CamelCase"
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
  <Icon
    as={FaSpotify}
    transition="all .2s ease"
    _hover={{
      color: "gray.400",
      transform: "scale(1.15)"
    }}
  />
</Link>

<Link href={release.appleMusic} isExternal>
  <Icon
    as={FaApple}
    transition="all .2s ease"
    _hover={{
      color: "gray.400",
      transform: "scale(1.15)"
    }}
  />
</Link>

<Link href={release.soundcloud} isExternal>
  <Icon
    as={FaSoundcloud}
    transition="all .2s ease"
    _hover={{
      color: "gray.400",
      transform: "scale(1.15)"
    }}
  />
</Link>

<Link href={release.youtube} isExternal>
  <Icon
    as={FaYoutube}
    transition="all .2s ease"
    _hover={{
      color: "gray.400",
      transform: "scale(1.15)"
    }}
  />
</Link>

<Link href={release.beatport} isExternal>
  <Icon
    as={SiBeatport}
    transition="all .2s ease"
    _hover={{
      color: "gray.400",
      transform: "scale(1.15)"
    }}
  />
</Link>

          </HStack>

        </Flex>

        {/* ACTIONS */}
<Flex
  w={{ base: "100%", lg: "20%" }}
  minH={{ base: "auto", lg: "390px" }}
  direction={{ base: "column", lg: "column" }}
  align={{ base: "stretch", lg: "flex-end" }}
  justify={{ base: "flex-start", lg: "space-between" }}
  mt={{ base: 0, lg: 0 }}
>
  <Icon
    as={FaArrowLeft}
    boxSize={6}
    cursor="pointer"
    alignSelf={{ base: "flex-start", lg: "flex-end" }}
    onClick={() => navigate("/music")}
    _hover={{
      color: "gray.500",
      transform: "scale(1.25)"
    }}
    transition="all .2s ease"
    mb={{ base: 8, lg: 0 }}
    display={{ base: "none", lg: "block" }}
  />

  <Button
    bg="black"
    color="white"
    borderRadius="0"
    border="1px solid white"
    letterSpacing="2px"
    fontSize={{ base: "xs", lg: "sm" }}
    rightIcon={<SiBeatport />}
    w={{ base: "170px", lg: "auto" }}
    px={{ base: 0, lg: 8 }}
    mt={{ base: 0, lg: 0 }}
    h={{ base: "48px", lg: "45px" }}
    alignSelf={{ base: "center", lg: "flex-end" }}

    
    _hover={{
      bg: "white",
      color: "black",
      transform: "scale(1.08)"
    }}
    transition="all .2s ease"
  >
    BUY ON
  </Button>
</Flex>
      </Flex>

      {/* ---------- DIVIDER ---------- */}

<Divider
  borderColor="gray.700"
  mb={5}
/>

<Heading
  fontSize={{
    base: "15px",
    lg: "md"
  }}
  fontWeight="500"
  letterSpacing={{
    base: "3px",
    lg: "2px"
  }}
  mb={{
    base: 4,
    lg: 5
  }}
>
  MORE RELEASES
</Heading>

<Divider
  borderColor="gray.700"
  mb={10}
/>

      <ReleasesSection excludeId={release.id} />

    </Box>

  )

}