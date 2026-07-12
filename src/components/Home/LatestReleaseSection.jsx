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
    <Box py={{ base: 5, lg: 28 }}>
      <Box
        maxW="1450px"
        mx="auto"
        px={{ base: 0, lg: 8 }}
      >
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          align="stretch"
          gap={{
            base: 4,
            lg: 8,
          }}
        >
          {/* ---------- LATEST ---------- */}

          <Box
            w={{
              base: "100%",
              lg: "340px",
            }}
            border="1px solid"
            borderColor="whiteAlpha.400"
            p={{
              base: 2,
              lg: 7,
            }}
            flexShrink={0}
          >
            <Heading
              mb={{
                base: 4,
                lg: 8,
              }}
  fontSize={{
    base: "md",
    lg: "lg",
  }}
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
            w="100%"
            minW={0}
            flex={{
              base: "none",
              lg: "1",
            }}
            direction="column"
            justify="space-between"
            border="1px solid"
            borderColor="whiteAlpha.400"
            p={{
              base: 2,
              lg: 7,
            }}
          >
            <ReleaseCarousel
              releases={otherReleases}
            />

            <Text
mt={{
  base: 4,
  lg: 8,
}}
              alignSelf="flex-end"
              cursor="pointer"
              letterSpacing="4px"
              fontSize={{
                base: "xs",
                lg: "md",
              }}
              transition="all .5s ease"
              _hover={{
                transform: "scale(1.12)",
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