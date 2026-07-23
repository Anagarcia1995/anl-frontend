import { useEffect, useState } from "react"

import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react"


import { fetchReleases } from "../../services/releaseService"
import SortableReleaseCard from "./SortableReleaseCard"

export default function ReleasesSection({
  releases: releasesProp,
  excludeId,
  onReleaseClick,
  onTogglePin,
  isAdmin,
}) {
  const [localReleases, setLocalReleases] = useState([])

  useEffect(() => {
    if (releasesProp) return

    const loadReleases = async () => {
      const data = await fetchReleases()
      setLocalReleases(data)
    }

    loadReleases()
  }, [releasesProp])

  const releases = releasesProp ?? localReleases

  const filteredReleases = excludeId
    ? releases.filter(
        (release) => release._id !== excludeId
      )
    : releases

  const sortedReleases = [...filteredReleases].sort(
    (a, b) =>
      new Date(b.releaseDate) -
      new Date(a.releaseDate)
  )

  const latestRelease = sortedReleases[0]

  const featuredReleases = sortedReleases
    .filter(
      (release) =>
        release.pinned &&
        release._id !== latestRelease?._id
    )
    .sort(
      (a, b) => a.pinOrder - b.pinOrder
    )

  const otherReleases = sortedReleases.filter(
    (release) =>
      !release.pinned &&
      release._id !== latestRelease?._id
  )

  const releasesToRender = [
    latestRelease,
    ...featuredReleases,
    ...otherReleases,
  ].filter(Boolean)

  return (
    <Box
      maxW={{ base: "700px", xl: "100%" }}
      mx="auto"
    >
      <SimpleGrid
        columns={{
          base: 2,
          md: 2,
          xl: 4,
        }}
        spacing={{ base: 4, lg: 10 }}
      >
        {releasesToRender.map((release) => (
          <Box
            key={release._id}
            w="100%"
            maxW={{ base: "320px", xl: "none" }}
            mx="auto"
          >
            <SortableReleaseCard
              release={release}
              onClick={onReleaseClick}
              onTogglePin={onTogglePin}
              isAdmin={isAdmin}
              isLatest={
                release._id === latestRelease?._id
              }
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}