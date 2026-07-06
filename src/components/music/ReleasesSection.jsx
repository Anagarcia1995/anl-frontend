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

  return (
    <Box>
      <SimpleGrid
        columns={{ base: 2, lg: 4 }}
        spacing={{ base: 4, lg: 10 }}
      >
        {filteredReleases.map((release) => (
          <ReleaseCard
            key={release._id}
            release={release}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}