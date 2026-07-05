import ReleasesSection from "../components/music/ReleasesSection"

import {
  Box,
  Flex,
  Heading,
  Image,
  Text, Divider
} from "@chakra-ui/react"

export default function MusicPage() {


  return (
    <Box
  mt={0}
  px={{ base: 6, lg: 10 }}
  pb={{ base: 5, lg: 10 }}
  
>

<Flex
  h={{ base: "360px", lg: "60vh" }}
  position="relative"
  align="center"
  overflow="hidden"
  mb={{ base: 6, lg: 0 }}
>

<Image
  src="/images/hero.png"
  alt="Art No Logia"
  position="absolute"
  right="-5%"
  objectFit="cover"
  objectPosition="center 20%"
  right={{ base: 0, lg: "-5%" }}
h="100%"
w={{ base: "100%", lg: "72%" }}
top={{ base: 0, lg: "40%" }}
transform={{ base: "none", lg: "translateY(-50%)" }}
/>

        {/* Degradado */}
<Box
  position="absolute"
  inset="0"
  bg={{
    base: "rgba(35,35,35,.65)",
    lg: `
      linear-gradient(
        90deg,
        #000 0%,
        #000 22%,
        rgba(0,0,0,.92) 38%,
        rgba(0,0,0,.55) 55%,
        rgba(0,0,0,.15) 70%,
        transparent 85%
      )
    `
  }}
/>

        {/* Texto */}
        <Box
          position="relative"
          zIndex="2"
ml={{ base: 4, lg: 40 }}
mr={{ base: 4, lg: 0 }}
mt={{ base: 24, lg: 10 }}
        >
<Heading
  mb={{ base: 3, lg: 4 }}
  fontSize={{ base: "3xl", lg: "6xl" }}
  lineHeight={{ base: "0.95", lg: "0.80" }}
>
  Music
  <br />
  from the
  <br />
  Future.
</Heading>

          <Text
            color="gray.300"
            lineHeight={{ base: "1.25", lg: "1.6" }}
            fontSize={{ base: "lg", lg: "xl" }}
            mb={10}
            maxW={{ base: "100%", lg: "550px" }}
          >
            ART NO LOGIA is an electronic music project based in Málaga.
            Their sound blends groove, energy and underground culture,
            combining powerful rhythms with a minimalist aesthetic inspired
            by late nights, club culture and the dancefloor.
          </Text>

        </Box>

      </Flex>

<Divider
  borderColor={{
    base: "whiteAlpha.300",
    lg: "gray.700"
  }}
  borderWidth="1px"
  mb={{
    base: 5,
    lg: 5
  }}
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
  RELEASES
</Heading>

<Divider
  borderColor={{
    base: "whiteAlpha.300",
    lg: "gray.700"
  }}
  borderWidth="1px"
  mb={{
    base: 8,
    lg: 10
  }}
/>

<ReleasesSection/>

    </Box>
  )

  
}

