import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

export default function FeaturedReleaseList({ releases }) {
  const navigate = useNavigate()

  return (
    <Box
      bg="black"
      border="1px solid"
      borderColor="whiteAlpha.400"
      maxW={{ base: "360px", lg: "100%" }}
      h={{ base: "auto", lg: "470px" }}
      mx="auto"
      pt={{ base: 3, lg: 7 }}
      pb={{ base: 2, lg: 5 }}
      px={{ base: 5, lg: 12 }}
      display="flex"
      flexDirection="column"
    >
      {releases.map((release, index) => {
        const releaseDate = new Date(
          release.releaseDate
        ).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })

        return (
<Box
  key={release._id}
  cursor="pointer"
  transition="transform .25s ease"
  transformOrigin="center left"
  _hover={{
    transform: "scale(1.03)",
  }}
  onClick={() => navigate(`/music/${release._id}`)}
>
            <HStack
              align="stretch"
              spacing={{ base: 4, lg: 5 }}
            >
              <Image
                src={release.coverImage}
                alt={release.title}
                boxSize={{ base: "60px", lg: "71px" }}
                objectFit="cover"
              />

              <VStack
                align="start"
                justify="center"
                spacing={1}
                flex={1}
              >
                <Heading
                  size={{ base: "xs", lg: "sm" }}
                  color="white"
                  lineHeight="1.35"
                  noOfLines={2}
                >
                  {release.title}{" "}
                  <Text
                    as="span"
                    ml={2}
                    fontSize={{ base: "xs", lg: "sm" }}
                    fontWeight="500"
                    color="gray.300"
                    textTransform="uppercase"
                  >
                    {release.artist}
                  </Text>
                </Heading>

                <Text
                  color="gray.400"
                  fontSize={{ base: "xs", lg: "sm" }}
                  noOfLines={1}
                >
                  {releaseDate} · {release.label}
                </Text>
              </VStack>
            </HStack>

            {index < releases.length - 1 && (
              <Divider
                my={{ base: 3, lg: 4 }}
                borderColor="whiteAlpha.200"
              />
            )}
          </Box>
        )
      })}

<Box textAlign="right" mt={{ base: 2, lg: 5 }}>
  <Text
    as="span"
    display="inline-block"
    cursor="pointer"
    fontSize={{ base: "xs", lg: "sm" }}
    letterSpacing="4px"
    fontWeight={500}
    color="white"
    transition="transform .25s ease"
    transformOrigin="center"
    _hover={{
      transform: "scale(1.08)",
    }}
    onClick={() => navigate("/music")}
  >
    VIEW ALL RELEASES
  </Text>
</Box>
    </Box>
  )
}