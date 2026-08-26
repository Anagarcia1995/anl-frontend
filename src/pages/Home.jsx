import { useEffect, useState } from "react"

import { Box } from "@chakra-ui/react"

import ReleaseSection from "../components/Home/Release/ReleaseSection"
import VideosSection from "../components/Home/VideosSection"
import TourSection from "../components/Home/TourSection"
import HeroSection from "../components/Home/HeroSection"

export default function HomePage() {

  const [showOverlay, setShowOverlay] = useState(true)
  const [fadeOverlay, setFadeOverlay] = useState(false)

  useEffect(() => {

    const fadeTimer = setTimeout(() => {
      setFadeOverlay(true)
    }, 600)

    const removeTimer = setTimeout(() => {
      setShowOverlay(false)
    }, 1100)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }

  }, [])

  return (
    <Box position="relative">

      <HeroSection />

      <ReleaseSection />

      <TourSection />

      <VideosSection />

      {showOverlay && (
        <Box
          position="fixed"
          inset="0"
          zIndex="9999"
          bg="black"
          opacity={fadeOverlay ? 0 : 1}
          transition="opacity .5s ease"
          pointerEvents="none"
        />
      )}

    </Box>
  )
}