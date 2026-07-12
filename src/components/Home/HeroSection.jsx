import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

export default function HeroSection() {
  return (
    <Flex
      h={{ base: "420px", lg: "60vh" }}
      position="relative"
      align="center"
      overflow="hidden"
      mb={{ base: 6, lg: 0 }}
    >
      <Image
        src="/images/hero.png"
        alt="Art No Logia"
        position="absolute"
        objectFit="cover"
        objectPosition="center 20%"
        right={{ base: 0, lg: "-5%" }}
        h="100%"
        w={{ base: "100%", lg: "72%" }}
        top={{ base: 0, lg: "40%" }}
        transform={{
          base: "none",
          lg: "translateY(-50%)",
        }}
      />

      {/* GRADIENT */}

      <Box
        position="absolute"
        inset="0"
        bg={{
          base: "rgba(20,20,20,.68)",
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
          `,
        }}
      />

      {/* CONTENT */}

      <Box
        position="relative"
        zIndex="2"
        ml={{ base: 6, lg: 40 }}
        mr={{ base: 6, lg: 0 }}
        mt={{ base: 24, lg: 10 }}
      >
        <Heading
          mb={{ base: 4, lg: 5 }}
          fontSize={{ base: "4xl", lg: "6xl" }}
          lineHeight={{ base: "0.95", lg: "0.8" }}
        >
          Music
          <br />
          from the
          <br />
          Future.
        </Heading>

        <Text
          color="gray.300"
          lineHeight={{ base: "1.35", lg: "1.6" }}
          fontSize={{ base: "md", lg: "xl" }}
          maxW={{ base: "290px", lg: "550px" }}
        >
          Electronic music shaped by groove,
          underground energy and the dancefloor.
        </Text>
      </Box>
    </Flex>
  )
}