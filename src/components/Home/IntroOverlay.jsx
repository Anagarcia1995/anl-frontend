import { useEffect } from "react"
import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion.create(Box)

export default function IntroOverlay({ onComplete }) {

  useEffect(() => {

    // Remove the intro after the full animation finishes.
    const timer = setTimeout(() => {
      onComplete()
    }, 8500)

    return () => clearTimeout(timer)

  }, [onComplete])

  return (
    <MotionBox
      position="fixed"
      inset="0"
      zIndex="9999"
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >

<MotionBox
  width="100%"
  display="flex"
  justifyContent="center"
  alignItems="center"

  initial={{
    scale: 0,
    opacity: 1,
    filter: "blur(0px)",
  }}

  animate={{
    scale: [0, 1, 1, 1],
    opacity: [1, 1, 1, 0],
    filter: [
      "blur(0px)",
      "blur(0px)",
      "blur(0px)",
      "blur(35px)",
    ],
  }}

transition={{
  duration: 8.5,

  // 0–5s   -> zoom
  // 5–7s   -> remains still
  // 7–8.5s -> blur + fade
  times: [
    0,
    5 / 8.5,
    7 / 8.5,
    1,
  ],

  ease: "easeInOut",
}}
>

        <Box
          width="100vw"
          fontFamily="'Bebas Neue', sans-serif"
fontSize={{
  base: "52vw",
  md: "30vw",
  lg: "17vw",
}}
          lineHeight="0.78"
          color="white"
          textTransform="uppercase"
        >

          <Text textAlign="center">
            ART
          </Text>

          <Text textAlign="center">
            NO
          </Text>

          <Text textAlign="center">
            LOGIA
          </Text>

        </Box>

      </MotionBox>

    </MotionBox>
  )
}