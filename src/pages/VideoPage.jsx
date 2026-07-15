import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

import { FaPlay } from "react-icons/fa"

const videos = [
  {
    id: "HSUfDzzpK1s",
    title: "ART NO LOGIA Closing Matinal | NY 26 Loop By Fabrik",
    url: "https://www.youtube.com/watch?v=HSUfDzzpK1s&t=575s",
  },
  {
    id: "Phcl9680yLg",
    title: "ART NO LOGIA AT ROOM 666 | Ibiza by le.cantine",
    url: "https://www.youtube.com/watch?v=Phcl9680yLg&t=1617s",
  },
]

export default function VideosSection() {
  return (
<Box
  maxW={{
    base: "100%",
    md: "900px",
  }}
  mx={{ md: "auto" }}
  px={{ md: 6 }}
  py={{
    base: 4,
    md: 20,
  }}
>
      <Heading
        mb={{ base: 6, lg: 10 }}
        fontSize={{ base: "md", lg: "lg" }}
        letterSpacing="3px"
      >
        DJ SETS
      </Heading>

      <Flex
        direction={{ base: "column", xl: "row" }}
        gap={{ base: 6, lg: 8 }}
        align="center"
      >
        {videos.map((video) => (
<Box
  key={video.id}
  flex="1"
  maxW={{ base: "720px", xl: "none" }}
  w="100%"
  mx="auto"
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
            {/* VIDEO PREVIEW */}

            <Box
              position="relative"
              overflow="hidden"
              border="1px solid"
              borderColor="white"
              aspectRatio={16 / 9}
            >
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                w="100%"
                h="100%"
                objectFit="cover"
              />

              {/* DARK OVERLAY */}

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
                  w={{ base: "50px", lg: "64px" }}
                  h={{ base: "50px", lg: "64px" }}
                  align="center"
                  justify="center"
                  border="1px solid white"
                  borderRadius="full"
                  transition="all .3s ease"
                  _groupHover={{
                    bg: "white",
                    color: "black",
                    transform: "scale(1.1)",
                  }}
                >
                  <FaPlay />
                </Flex>
              </Flex>
            </Box>

            {/* INFO */}

            <Text
              mt={4}
              fontSize={{ base: "sm", lg: "lg" }}
              fontWeight="500"
              letterSpacing="1px"
              textTransform="uppercase"
              lineHeight="1.4"
            >
              {video.title}
            </Text>

            <Text
              mt={1}
              color="gray.500"
              fontSize="xs"
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