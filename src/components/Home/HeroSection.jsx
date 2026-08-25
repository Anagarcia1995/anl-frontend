import {
  Box,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react"

import { motion } from "framer-motion"

const MotionBox = motion.create(Box)
const MotionFlex = motion.create(Flex)

export default function HeroSection({
  introStage,
  introPlayed,
}) {

  const showHero =
    introPlayed ||
    introStage === "hero" ||
    introStage === "content"

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

      <MotionBox
        w="50%"
        h={{ base: "220px", lg: "430px" }}
        overflow="hidden"
        flexShrink={0}

        initial={{
          x: introPlayed ? 0 : "-110%",
        }}

animate={{
  x: showHero ? 0 : "-110%",
}}

transition={{
  duration: 1.15,
  ease: [0.22, 1, 0.36, 1],
}}

        css={{
          "@media (min-width: 62rem)": {
            transform: "translateX(0) !important",
          },
        }}
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

      </MotionBox>

      {/* TEXT */}

      <MotionFlex
        w="50%"
        h={{ base: "230px", lg: "430px" }}
        align="center"
        justify="center"
        px={{ base: 2, lg: 10 }}
        bg="black"

        initial={{
          x: introPlayed ? 0 : "110%",
        }}

animate={{
  x: showHero ? 0 : "110%",
}}

transition={{
  duration: 1.15,
  ease: [0.22, 1, 0.36, 1],
}}
        css={{
          "@media (min-width: 62rem)": {
            transform: "translateX(0) !important",
          },
        }}
      >

        <Heading
          w="100%"
          textAlign="left"
          fontFamily="'Bebas Neue', sans-serif"
          fontWeight="400"
          lineHeight={{
            base: "0.88",
            lg: "1",
          }}
          fontSize={{
            base: "6xl",
            md: "6xl",
            lg: "9rem",
          }}
        >

          {/* MOBILE */}

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

          {/* DESKTOP */}

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

      </MotionFlex>

    </Flex>
  )
}