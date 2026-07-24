import { Box, Stack } from "@chakra-ui/react"

import useReleasesData from "../../../hooks/useReleasesData"

import LatestReleaseCard from "./LatestReleaseCard"
import FeaturedReleaseList from "./FeaturedReleaseList"

export default function ReleaseSection() {
  const { releases } = useReleasesData()

  const sortedReleases = [...releases].sort(
    (a, b) =>
      new Date(b.releaseDate) - new Date(a.releaseDate)
  )

  const latestRelease = sortedReleases[0]

  const featuredReleases = sortedReleases
  .filter(
    release =>
      release.pinned &&
      release._id !== latestRelease?._id
  )
  .sort((a, b) => a.pinOrder - b.pinOrder)

  if (!latestRelease) return null

return (
  <Box py={{ base: 5, lg: 20 }}
>
    <Box
      maxW="1450px"
      mx="auto"
      px={{ base: 2,lg: 8 }}
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
    <LatestReleaseCard release={latestRelease} />
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
  </Box>
)
}