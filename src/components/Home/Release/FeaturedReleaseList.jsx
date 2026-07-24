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
      maxW={{ base: "390px", lg: "100%" }}
      h={{ base: "auto", lg: "470px" }}
      mx="auto"
      pt={{ base: 3, lg: 7 }}
      pb={{ base: 2, lg: 5 }}
      px={{ base: 5, lg: 12 }}
      display="flex"
      flexDirection="column"
sx={{
  "@media screen and (min-width: 992px) and (max-width: 1279px)": {
    height: "400px",
    paddingInline: "2rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
}}
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
              spacing={{ base: 4,md: 2, lg: 5 }}
              
            >
              <Image
                src={release.coverImage}
                alt={release.title}
                boxSize={{ base: "60px", lg: "71px" }}
                objectFit="cover"
                  sx={{
    "@media screen and (min-width: 992px) and (max-width: 1279px)": {
      width: "56px",
      height: "56px",
    },
  }}
              />

              <VStack
                align="start"
                justify="center"
                spacing={{
  base: 1,
  md: 0,
  lg: 1,
}}
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
                    ml={0}
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
                my={{ base: 3,md: 2, lg: 4 }}
                borderColor="whiteAlpha.200"
                  sx={{
    "@media screen and (min-width: 992px) and (max-width: 1279px)": {
      marginTop: "0.75rem",
      marginBottom: "0.75rem",
    },
  }}
              />
            )}
          </Box>
        )
      })}

<Box textAlign="right"
mt={{
  base: 2,
  md: -2,
  lg: 2,
}}
pt={{
  md: 2,
}}>
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