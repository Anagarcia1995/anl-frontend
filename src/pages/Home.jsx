import { Box } from "@chakra-ui/react"

import ReleaseSection from "../components/Home/Release/ReleaseSection"
import VideosSection from "../components/Home/VideosSection"
import TourSection from "../components/Home/TourSection"
import HeroSection from "../components/Home/HeroSection"
import AboutSection from "../components/Home/AboutSection"

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <ReleaseSection />
      <AboutSection />
      <TourSection />
      <VideosSection />
    </Box>
  )
}