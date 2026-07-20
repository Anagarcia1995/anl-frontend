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
            lg: "center 25%",
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
            lg: "0.82",
          }}
          fontSize={{
            base: "6xl",
            md: "5xl",
            lg: "9rem",
          }}
        >
          <Box
            display={{
              base: "block",
              lg: "none",
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

          <Box
            display={{
              base: "none",
              lg: "block",
            }}
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