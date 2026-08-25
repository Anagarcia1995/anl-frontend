import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import useReleasesData from "../../hooks/useReleasesData"
import LatestReleaseCard from "./LatestReleaseCard"
import ReleaseCarousel from "./ReleaseCarousel"

const MotionBox = motion.create(Box)

export default function LatestReleaseSection({
  introPlayed,
}) {

  const navigate = useNavigate()

  const { releases, loading } = useReleasesData()

  if (loading || !releases.length) {
    return null
  }

  const latestRelease = releases[0]
  const otherReleases = releases.slice(1)

  return (
    <MotionBox
      py={{ base: 6, lg: 24 }}

      initial={{
        y: introPlayed ? 0 : 120,
        opacity: introPlayed ? 1 : 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      }}

      css={{
        "@media (min-width: 62rem)": {
          transform: "translateY(0) !important",
          opacity: "1 !important",
        },
      }}
    >

      <Box
        maxW="1450px"
        mx="auto"
        px={{ base: 0, lg: 8 }}
      >

        <Flex
          direction={{ base: "column", lg: "row" }}
          align="stretch"
          gap={{ base: 2, lg: 6 }}
        >

          {/* ---------- LATEST ---------- */}

          <Box
            w={{ base: "100%", lg: "320px" }}
            flexShrink={0}
            border="1px solid"
            borderColor="whiteAlpha.400"
            p={{ base: 2, lg: 7 }}
          >

            <Heading
              mb={{ base: 2, lg: 3 }}
              fontSize={{ base: "sm", lg: "lg" }}
              letterSpacing="2px"
              fontWeight={500}
            >
              LATEST RELEASE
            </Heading>

            <LatestReleaseCard
              release={latestRelease}
            />

          </Box>

          {/* ---------- CAROUSEL ---------- */}

          <Flex
            w="100%"
            minW={0}
            flex={{ base: "none", lg: 1 }}
            direction="column"
            justify="space-between"
            border="1px solid"
            borderColor="whiteAlpha.400"
            p={{ base: 2, lg: 3 }}
          >

            <ReleaseCarousel
              releases={otherReleases}
            />

            <Text
              mt={{ base: 4, lg: 5 }}
              mr="5px"
              mb="5px"
              alignSelf="flex-end"
              cursor="pointer"
              fontSize={{ base: "xs", lg: "md" }}
              letterSpacing="4px"
              fontWeight={500}
              transition="all .5s ease"
              _hover={{
                transform: "scale(1.12)",
              }}
              onClick={() =>
                navigate("/music")
              }
            >
              VIEW ALL
            </Text>

          </Flex>

        </Flex>

      </Box>

    </MotionBox>
  )
}