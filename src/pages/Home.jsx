import { Box } from "@chakra-ui/react"

import LatestReleaseSection from "../components/Home/LatestReleaseSection"
import  VideosSection from "../components/Home/VideosSection"
import TourSection from "../components/Home/TourSection"


export default function HomePage() {
  return (
    <Box>
      {/* Hero */}

      <LatestReleaseSection />

      <TourSection />

      <VideosSection />

      {/* BioSection */}
    </Box>
  )
}