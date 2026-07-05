import {
  Box,
  SimpleGrid
} from "@chakra-ui/react"

import { releases } from "../../data/releases"
import ReleaseCard from "./ReleaseCard"

export default function ReleasesSection({ excludeId }) {

  const filteredReleases = excludeId
    ? releases.filter(release => release.id !== excludeId)
    : releases

  return (
    <Box>

<SimpleGrid
  columns={{ base: 2, lg: 4 }}
  spacing={{ base: 4, lg: 10 }}
>
  {filteredReleases.map((release) => (
    <ReleaseCard
      key={release.id}
      release={release}
    />
  ))}
</SimpleGrid>

    </Box>
  )
}