import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react"

import { FaPlay } from "react-icons/fa"

const videos = [
  {
    id: "HSUfDzzpK1s",
    url: "https://www.youtube.com/watch?v=HSUfDzzpK1s&t=575s",
  },
  {
    id: "Phcl9680yLg",
    url: "https://www.youtube.com/watch?v=Phcl9680yLg&t=1617s",
  },
]

export default function VideosSection() {
  return (
    <Box
      maxW="1450px"
      mx="auto"
      px={{ base: 4, lg: 30 }}
      py={{ base: 3, lg: 24 }}
    >

      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 4, lg: 8 }}
      >
        {videos.map((video) => (
          <Box
            key={video.id}
            flex="1"
            cursor="pointer"
            role="group"
            onClick={() =>
              window.open(
                video.url,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            {/* PREVIEW */}

            <Box
              position="relative"
              overflow="hidden"
              border="1px solid"
              borderColor="white"
              aspectRatio={{
                base: "20 / 6",
                lg: "16 / 9",
              }}
            >
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt="ART NO LOGIA DJ set"
                w="100%"
                h="100%"
                objectFit="cover"
              />

              <Box
                position="absolute"
                inset="0"
                bg="blackAlpha.300"
                transition="background .3s ease"
                _groupHover={{
                  bg: "blackAlpha.500",
                }}
              />

              {/* PLAY */}

              <Flex
                position="absolute"
                inset="0"
                align="center"
                justify="center"
              >
                <Flex
                  w={{ base: "40px", lg: "58px" }}
                  h={{ base: "40px", lg: "58px" }}
                  align="center"
                  justify="center"
                  border="1px solid white"
                  borderRadius="full"
                  fontSize={{ base: "11px", lg: "16px" }}
                  transition="all .3s ease"
                  _groupHover={{
                    bg: "white",
                    color: "black",
                    transform: "scale(1.08)",
                  }}
                >
                  <FaPlay />
                </Flex>
              </Flex>
            </Box>

            {/* LINK */}

            <Text
              mt={{ base: 2, lg: 3 }}
              color="gray.500"
              fontSize={{ base: "10px", lg: "xs" }}
              letterSpacing="2px"
              textTransform="uppercase"
            >
              Watch on YouTube →
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}