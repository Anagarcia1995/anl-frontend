import { Box } from "@chakra-ui/react"

import LatestReleaseSection from "../components/Home/LatestReleaseSection"
import  VideosSection from "../components/Home/VideosSection"
import TourSection from "../components/Home/TourSection"
import HeroSection from "../components/Home/HeroSection"


export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <LatestReleaseSection />
      <TourSection />
      <VideosSection />
    </Box>
  )
}