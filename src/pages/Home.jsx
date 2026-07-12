import { Box } from "@chakra-ui/react"

import LatestReleaseSection from "../components/Home/LatestReleaseSection"
import  VideosSection from "../components/Home/VideosSection"


export default function HomePage() {
  return (
    <Box>
      {/* Hero */}

      <LatestReleaseSection />

      {/* NextShowSection */}

      <VideosSection />

      {/* BioSection */}
    </Box>
  )
}