import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"
import { API_URL } from "../../services/api"

export default function LatestReleaseCard({
  release,
}) {
  const navigate = useNavigate()

  return (
    <Flex
      direction={{
        base: "row",
        lg: "column",
      }}
      align={{
        base: "center",
        lg: "stretch",
      }}
      gap={{
        base: 5,
        lg: 0,
      }}
      cursor="pointer"
      onClick={() =>
        navigate(`/music/${release._id}`)
      }
    >
      {/* COVER */}

      <Box
        w={{
          base: "35%",
          mdToLg: "28%",
          lg: "100%",
        }}
        flexShrink={0}
        overflow="hidden"
      >
        <Image
          src={`${API_URL}${release.coverImage}`}
          alt={release.title}
          w="100%"
          aspectRatio={1}
          objectFit="cover"
          filter="drop-shadow(0 0 18px rgba(255,255,255,.12))"
          transition="all .5s ease"
          _hover={{
            transform: "scale(1.10)",
          }}
        />
      </Box>

      {/* INFO */}

      <Box
        flex="1"
        minW={0}
        mt={{
          base: 0,
          lg: 5,
        }}

      >
        <Heading
              fontSize={{
                base: "20px",
                lg: "2xl",
              }}

          fontWeight="600"
          lineHeight="1.2"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {release.title}
        </Heading>

        <Text
          mt={0}
              fontSize={{
                base: "md",
                lg: "2xl",
              }}
          color="gray.400"
          textTransform="uppercase"
              letterSpacing={{
                base: "0.95px",
                lg: "2px",
              }}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {release.artist}
        </Text>
      </Box>
    </Flex>
  )
}