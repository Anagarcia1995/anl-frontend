import {
  Box,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react"

export default function HeroSection() {
  return (
<Flex
  direction={{ base: "row", lg: "row" }}
  w="100%"
  maxW="1450px"
  mx="auto"
  px={{ base: 2, lg: 8 }}
  pt={{ base: 2, lg: 4 }}
  pb={{ base: 0, lg: 4 }}
  align="stretch"
>
      {/* IMAGE */}

      <Box
  w={{
    base: "50%",
    lg: "50%",
  }}
        h={{
          base: "220px",
          lg: "430px",
        }}
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
            lg: "center 25%",
          }}
        />
      </Box>

      {/* TEXT */}

<Flex
  w={{ base: "50%", lg: "50%" }}
  h={{ base: "250px", lg: "430px" }}
  align="center"
  justify="center"
  px={{ base: 2, lg: 10 }}
  bg="black"
>
<Heading
  fontFamily="'Bebas Neue', sans-serif"
  fontWeight="400"
  lineHeight={{ base: "0.88", lg: "0.82" }}
  fontSize={{
    base: "4xl",
    md: "5xl",
    lg: "8xl",
  }}
w="100%"
textAlign="left"
>
  <Box display={{ base: "block", lg: "none" }}>
    MUSIC
    <br />
    FROM
    <br />
    THE
    <br />
    FUTURE.
  </Box>

  <Box display={{ base: "none", lg: "block" }}>
    MUSIC FROM
    <br />
    THE FUTURE.
  </Box>
</Heading>
      </Flex>
    </Flex>
  )
}