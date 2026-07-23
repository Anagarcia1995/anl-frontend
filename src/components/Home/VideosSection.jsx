import { Box, Flex, Image, Text, Button, Link  } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { FaPlay } from "react-icons/fa"

const featuredVideos = [
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
  const openVideo = (url) => {
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <Box
      maxW="1450px"
      mx="auto"
      px={{ base: 2, lg: 30 }}
      py={{ base: 6, lg: 24 }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 3, lg: 8 }}
      >
        {featuredVideos.map((video) => (
          <Box
            key={video.id}
            flex="1"
            cursor="pointer"
            role="group"
            onClick={() => openVideo(video.url)}
          >
            {/* PREVIEW */}

            <Box
              position="relative"
              overflow="hidden"
              border="1px solid"
              borderColor="white"
              aspectRatio={{
                base: "18 / 6",
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
          </Box>
        ))}
      </Flex>


<Box mt={{ base: 3, lg: 10 }}>
  {/* MOBILE */}
  <Box display={{ base: "block", lg: "none" }}>
    <Text
      textAlign="left"
      mb={4}
      fontSize="sm"
      color="gray.400"
      letterSpacing="1px"
    >
      Want to see more?
    </Text>

    <Flex justify="center">
      <Button
        as={RouterLink}
        to="/video"
        variant="outline"
        borderRadius="none"
        borderWidth="1px"
        borderColor="white"
        color="white"
        px={8}
        h="32px"
        fontSize="xs"
        fontWeight="500"
        letterSpacing="3px"
        textTransform="uppercase"
        transition="all .25s ease"
        _hover={{
          bg: "white",
          color: "black",
        }}
      >
        Explore All Sets
      </Button>
    </Flex>
  </Box>

 {/* DESKTOP */}
<Flex
  display={{ base: "none", lg: "flex" }}
  justify="flex-end"
  mt={10}
>
  <Link
    as={RouterLink}
    to="/video"
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    px={8}
    h="36px"
    border="1px solid"
    borderColor="white"
    textTransform="uppercase"
    letterSpacing="3px"
    fontSize="md"
    fontWeight="500"
    color="white"
    textDecoration="none"
    transition="all .25s ease"
    _hover={{
      bg: "white",
      color: "black",
      textDecoration: "none",
    }}
  >
    Explore All Sets
  </Link>
</Flex>
</Box>
    </Box>
  )
}