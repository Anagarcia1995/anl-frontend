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
      h={{ base: "auto",md: "340px", lg: "470px" }}
      mx="auto"
      pt={{ base: 5, lg: 6 }}
      pb={{ base: 5, lg: 5 }}
      px={{ base: 5, lg: 16 }}
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

      {/* RELEASE LIST */}

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent={{
          base: "flex-start",
          md: "space-evenly",
        }}
      >

        {releases.map((release, index) => (

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
              align="center"
              spacing={{
                base: 4,
                md: 2,
                lg: 5,
              }}
            >

              {/* COVER */}

              <Image
                src={release.coverImage}
                alt={release.title}
                boxSize={{
                  base: "42px",
                  lg: "71px",
                }}
                flexShrink={0}
                objectFit="cover"
                sx={{
                  "@media screen and (min-width: 992px) and (max-width: 1279px)": {
                    width: "56px",
                    height: "56px",
                  },
                }}
              />

              {/* INFO */}

              <VStack
                align="start"
                justify="center"
                spacing={2}
                flex={1}
                minW={0}
              >

                {/* RELEASE TITLE */}

                <Heading
                  width="100%"
                  size={{
                    base: "xs",
                    lg: "sm",
                  }}
                  color="white"
                  lineHeight="1.25"
                  letterSpacing="0.5px"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {release.title}
                </Heading>

                {/* ARTIST */}

                <Text
                  width="100%"
                  color="gray.300"
                  fontSize={{
                    base: "xs",
                    lg: "sm",
                  }}
                  fontWeight="500"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  lineHeight="1.2"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {release.artist}
                </Text>

              </VStack>

            </HStack>

            {index < releases.length - 1 && (
              <Divider
  my={{
    base: 3,
    md: 3,
    lg: 3,
  }}
                borderColor="whiteAlpha.300"
                sx={{
                  "@media screen and (min-width: 992px) and (max-width: 1279px)": {
                    marginTop: "0.75rem",
                    marginBottom: "0.75rem",
                  },
                }}
              />
            )}

          </Box>

        ))}

      </Box>

      {/* VIEW ALL */}

      <Box
        textAlign="right"
        mt={{
          base: 2,
          md: 4,
          lg: 2,
        }}
        pt={{
          md: 2,
        }}
      >

        <Text
          as="span"
          display="inline-block"
          cursor="pointer"
          fontSize={{
            base: "xs",
            lg: "sm",
          }}
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