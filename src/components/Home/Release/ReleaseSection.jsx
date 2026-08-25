import { Box, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"

import useReleasesData from "../../../hooks/useReleasesData"

import LatestReleaseCard from "./LatestReleaseCard"
import FeaturedReleaseList from "./FeaturedReleaseList"

const MotionBox = motion.create(Box)

export default function ReleaseSection({
  showRelease,
  introPlayed,
}) {

  const { releases } = useReleasesData()

  const sortedReleases = [...releases].sort(
    (a, b) =>
      new Date(b.releaseDate) - new Date(a.releaseDate)
  )

  const latestRelease = sortedReleases[0]

  const featuredReleases = sortedReleases
    .filter(
      (release) =>
        release.pinned &&
        release._id !== latestRelease?._id
    )
    .sort(
      (a, b) =>
        a.pinOrder - b.pinOrder
    )

  if (!latestRelease) return null

  const shouldShow =
    introPlayed || showRelease

  return (
    <MotionBox
      py={{ base: 5, lg: 20 }}

initial={{
  y: 120,
  opacity: 0,
}}

animate={{
  y: shouldShow ? 0 : 120,
  opacity: shouldShow ? 1 : 0,
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
        px={{ base: 2, lg: 8 }}
      >

        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          spacing={{
            base: 2,
            md: 5,
            lg: 8,
          }}
          align="stretch"
        >

          <Box
            flex={{
              md: 4,
              lg: 3.5,
            }}
          >
            <LatestReleaseCard
              release={latestRelease}
            />
          </Box>

          <Box
            flex={{
              md: 6,
              lg: 6.5,
            }}
          >
            <FeaturedReleaseList
              releases={featuredReleases}
            />
          </Box>

        </Stack>

      </Box>

    </MotionBox>
  )
}