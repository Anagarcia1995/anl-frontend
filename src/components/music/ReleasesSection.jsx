import { useEffect, useState } from "react"
import {
  Box,
  SimpleGrid
} from "@chakra-ui/react"

import { fetchReleases } from "../../services/releaseService"
import ReleaseCard from "./ReleaseCard"

export default function ReleasesSection({
  releases: releasesProp,
  excludeId,
  onReleaseClick,
}) {
  const [localReleases, setLocalReleases] = useState([])

  useEffect(() => {
    if (!releasesProp) {
      const loadReleases = async () => {
        const data = await fetchReleases()
        setLocalReleases(data)
      }

      loadReleases()
    }
  }, [releasesProp])

  const releases = releasesProp || localReleases

  const filteredReleases = excludeId
    ? releases.filter((release) => release._id !== excludeId)
    : releases

  const sortedReleases = [...filteredReleases].sort(
    (a, b) =>
      new Date(b.releaseDate) -
      new Date(a.releaseDate)
  )

  return (
    <Box maxW={{ base: "700px", xl: "100%" }} mx="auto">
      <SimpleGrid
        columns={{
          base: 2,
          md: 2,
          xl: 4,
        }}
        spacing={{ base: 4, lg: 10 }}
      >
        {sortedReleases.map((release) => (
          <Box
            key={release._id}
            w="100%"
            maxW={{ base: "320px", xl: "none" }}
            mx="auto"
          >
            <ReleaseCard
              release={release}
              onClick={onReleaseClick}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}