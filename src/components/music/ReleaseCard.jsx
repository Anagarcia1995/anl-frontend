import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react"

import { API_URL } from "../../services/api"

export default function ReleaseCard({
  release,
  onClick,
}) {
  return (
    <Box
      cursor="pointer"
      role="group"
      onClick={() => onClick(release)}
    >
      {/* COVER */}

      <Box overflow="visible">
        <Image
          src={`${API_URL}${release.coverImage}`}
          alt={release.title}
          w="100%"
          aspectRatio={1}
          objectFit="cover"
          boxShadow="2xl"
          transition="transform .45s ease"
          _groupHover={{
            transform: "scale(1.08)",
          }}
        />
      </Box>

      {/* INFO */}

      <Box
        mt={{ base: 2, lg: 4 }}
        position="relative"
        minH="54px"
      >
        {/* TEXT */}

        <Box
          transition="opacity .2s ease"
          _groupHover={{
            opacity: 0,
          }}
        >
          <Heading
            fontSize={{ base: "sm", lg: "xl" }}
            fontWeight="600"
            lineHeight="1.2"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {release.title}
          </Heading>

          <Text
            mt={{ base: 0, lg: 1 }}
            fontSize={{ base: "xs", lg: "xl" }}
            textTransform="uppercase"
            color="gray.400"
            letterSpacing="1px"
            noOfLines={2}
          >
            {release.artist}
          </Text>
        </Box>

        {/* HOVER */}

        <Flex
          position="absolute"
          inset="0"
          align="center"
          opacity={0}
          transition="opacity .2s ease"
          _groupHover={{
            opacity: 1,
          }}
        >
          <Box
            w="70%"
            h="2px"
            overflow="hidden"
            display="flex"
            alignItems="center"
          >
            <Box
              w="100%"
              h="2px"
              bg="white"
              transformOrigin="left"
              transform="scaleX(0)"
              transition="transform .5s ease"
              _groupHover={{
                transform: "scaleX(1)",
              }}
            />
          </Box>

          <Text
            ml="0"
            mt="-6px"
            fontSize="30px"
            lineHeight="1"
            fontWeight="300"
            opacity={0}
            transform="translateX(-8px)"
            transition="
              opacity .15s ease .35s,
              transform .15s ease .35s
            "
            _groupHover={{
              opacity: 1,
              transform: "translateX(0)",
            }}
          >
            ›
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}