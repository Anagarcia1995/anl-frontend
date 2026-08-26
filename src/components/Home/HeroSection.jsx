import {
  Box,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react"

export default function HeroSection() {

  return (
    <Flex
      direction="row"
      w="100%"
      maxW="1450px"
      mx="auto"
      px={{ base: 2, lg: 8 }}
      pt={{ base: 2, lg: 4 }}
      pb={{ base: 0, lg: 4 }}
      align="stretch"
      overflow="hidden"
    >

      {/* IMAGE */}

      <Box
        w="50%"
        h={{ base: "220px", lg: "430px" }}
        overflow="hidden"
        flexShrink={0}
      >
        <Image
          src="/images/hero2.jpg"
          alt="Art No Logia"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition={{
            base: "center 25%",
            lg: "center 55%",
          }}
        />
      </Box>

      {/* TEXT */}

      <Flex
        w="50%"
        h={{ base: "230px", lg: "430px" }}
        align="center"
        justify="center"
        px={{ base: 2, lg: 10 }}
        bg="black"
      >

<Heading
  w="100%"
  textAlign="left"
  fontFamily="'Bebas Neue', sans-serif"
  fontWeight="400"
  lineHeight={{
    base: "0.88",
    md: "1",
    lg: "0.88",
    xl: "1",
  }}
  fontSize={{
    base: "6xl",
    md: "7xl",
    lg: "8xl",
    xl: "9rem",
  }}
>

  {/* MOBILE */}

  <Box
    display={{
      base: "block",
      md: "none",
    }}
  >
    Music
    <br />
    From
    <br />
    The
    <br />
    Future
  </Box>

  {/* IPAD MINI / AIR */}

  <Box
    display={{
      base: "none",
      md: "block",
      lg: "none",
    }}
    whiteSpace="nowrap"
  >
    MUSIC FROM
    <br />
    THE FUTURE
  </Box>

  {/* IPAD PRO */}

  <Box
    display={{
      base: "none",
      lg: "block",
      xl: "none",
    }}
  >
    MUSIC
    <br />
    FROM
    <br />
    THE
    <br />
    FUTURE
  </Box>

  {/* DESKTOP */}

  <Box
    display={{
      base: "none",
      xl: "block",
    }}
    whiteSpace="nowrap"
  >
    MUSIC FROM
    <br />
    THE FUTURE
  </Box>

</Heading>

      </Flex>

    </Flex>
  )
}