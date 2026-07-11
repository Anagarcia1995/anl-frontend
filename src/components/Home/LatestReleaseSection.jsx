import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

import useReleasesData from "../../hooks/useReleasesData"

import LatestReleaseCard from "./LatestReleaseCard"
import ReleaseCarousel from "./ReleaseCarousel"

export default function LatestReleaseSection() {
  const navigate = useNavigate()

  const { releases, loading } = useReleasesData()

  if (loading) return null
  if (!releases.length) return null

  const latestRelease = releases[0]
  const otherReleases = releases.slice(1)

  return (
    <Box py={12}>
      <Box
        maxW="1450px"
        mx="auto"
        px={8}
      >
        <Flex
          align="stretch"
          gap={8}
        >
          {/* ---------- LATEST ---------- */}

          <Box
            w="340px"
            border="1px solid"
            borderColor="whiteAlpha.400"
            p={7}
          >
            <Heading
              mb={8}
              fontSize="lg"
              letterSpacing="3px"
            >
              LATEST RELEASE
            </Heading>

            <LatestReleaseCard
              release={latestRelease}
            />
          </Box>

          {/* ---------- CAROUSEL ---------- */}

          <Flex
            flex="1"
            direction="column"
            justify="space-between"
            border="1px solid"
            borderColor="whiteAlpha.400"
            p={7}

          >


            <ReleaseCarousel
              releases={otherReleases}
            />

            <Text
              mt={8}
              alignSelf="flex-end"
              cursor="pointer"
              letterSpacing="4px"
              transition="all .2s ease"
              _hover={{
                color: "gray.400",
                transform: "translateX(4px)",
              }}
              onClick={() => navigate("/music")}
            >
              VIEW ALL
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}