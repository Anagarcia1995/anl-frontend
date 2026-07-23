import { Box } from "@chakra-ui/react"

import LatestReleaseSection from "../components/Home/LatestReleaseSection"
import ReleaseSection from "../components/Home/Release/ReleaseSection"
import  VideosSection from "../components/Home/VideosSection"
import TourSection from "../components/Home/TourSection"
import HeroSection from "../components/Home/HeroSection"


export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <ReleaseSection />
      <TourSection />
     <LatestReleaseSection />
      <VideosSection />
    </Box>
  )
}