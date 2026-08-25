import { Box } from "@chakra-ui/react"

import IntroOverlay from "../components/Home/IntroOverlay"
import ReleaseSection from "../components/Home/Release/ReleaseSection"
import VideosSection from "../components/Home/VideosSection"
import TourSection from "../components/Home/TourSection"
import HeroSection from "../components/Home/HeroSection"

export default function HomePage({
  introStage,
  introPlayed,
  onIntroComplete,
}) {

  const showRelease =
    introStage === "content"

  return (
    <Box>

      {!introPlayed && introStage === "intro" && (
        <IntroOverlay
          onComplete={onIntroComplete}
        />
      )}

      <HeroSection
        introStage={introStage}
        introPlayed={introPlayed}
      />

      <ReleaseSection
        showRelease={showRelease}
        introPlayed={introPlayed}
      />

      <TourSection />
      <VideosSection />

    </Box>
  )
}