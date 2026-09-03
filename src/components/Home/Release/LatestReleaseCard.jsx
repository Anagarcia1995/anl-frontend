import {
  Badge,
  Box,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

export default function LatestReleaseCard({ release }) {

  const navigate = useNavigate()

  // Ajuste exclusivo para tablets de ~700–767px (Galaxy Tab S4)
  const galaxyStyles =
    "@media screen and (min-width: 700px) and (max-width: 767px)"

  // Ajustes específicos para lg
  const proStyles =
    "@media screen and (min-width: 992px) and (max-width: 1279px)"

  const releaseDate = new Date(
    release.releaseDate
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <Box
      bg="#000000"
      border="1px solid"
      borderColor="whiteAlpha.400"

      pt={{
        base: 5,
        md: 4,
        lg: 7,
      }}

      pb={{
        base: 4,
        md: 3,
        lg: 5,
      }}

      px={{
        base: 7,
        md: 4,
        lg: 12,
      }}

      sx={{
        // GALAXY TAB S4 / TABLET < MD
        [galaxyStyles]: {
          height: "317px",
          padding: "12px",
        },

        // LG
        [proStyles]: {
          height: "400px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          justifyContent: "center",
        },
      }}

      maxW={{
        base: "390px",
        lg: "100%",
      }}

      h={{
        base: "auto",
        lg: "470px",
      }}

      mx="auto"
      display="flex"
      flexDirection="column"
      cursor="pointer"

      onClick={() =>
        navigate(`/music/${release._id}`)
      }
    >

      {/* COVER */}
      <Box
        position="relative"
        display="inline-block"
        alignSelf="center"
        transition="transform .35s ease"
        transformOrigin="center"
        _hover={{
          transform: "scale(1.04)",
          zIndex: 2,
        }}
      >
        <Image
          src={release.coverImage}
          alt={release.title}

          w="100%"

          maxW={{
            base: "100%",
            md: "250px",
            lg: "100%",
            xl: "90%",
          }}
  sx={{
    [galaxyStyles]: {
      width: "80%",
    },
  }}

          mx="auto"
          objectFit="cover"
        />

        <Badge
          position="absolute"
          top={3}

          left={{
            base: 3,
            md: 3,
            xl:8
          }}

          bg="white"
          color="black"
          px={3}
          py={1}
          fontSize="sm"
          fontWeight="700"
          letterSpacing="0.08em"
          pointerEvents="none"
        >
          LATEST RELEASE
        </Badge>
      </Box>

      {/* RELEASE INFO */}
      <Box
        mt={{
          base: 2,
          md: 3,
          lg: 5,
        }}

        ml={{
          base: "5px",
          md: "15px",
        }}

sx={{
  [galaxyStyles]: {
    marginTop: "10px",
    marginLeft: "10%",
    textAlign: "left",
  },

  [proStyles]: {
    marginTop: "15px",
  },
}}
      >
        <Heading
          fontSize={{
            base: "md",
            md: "md",
            lg: "xl",
          }}

          color="white"
          fontWeight="500"
          lineHeight="1.25"
          letterSpacing="0.5px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"

sx={{
[galaxyStyles]: {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
},

  [proStyles]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}}
        >
          {release.title}

          <Text
            as="span"

            ml={2}

            fontSize={{
              base: "md",
              md: "sm",
              lg: "lg",
            }}

            fontWeight="500"
            color="gray.300"
            textTransform="uppercase"
            letterSpacing="1px"

sx={{
  [galaxyStyles]: {
    display: "block",
    marginLeft: 0,
    marginTop: "3px",
  },

  [proStyles]: {
    display: "block",
    marginLeft: 0,
    marginTop: "4px",
  },
}}
          >
            {release.artist}
          </Text>
        </Heading>

<Text
  mt={2}
  color="gray.400"
  fontSize={{
    base: "sm",
    lg: "md",
    xl: "sm",
  }}
  noOfLines={1}
  sx={{
    [galaxyStyles]: {
      display: "none",
    },
  }}
>
  {releaseDate} · {release.label}
</Text>
      </Box>

    </Box>
  )
}