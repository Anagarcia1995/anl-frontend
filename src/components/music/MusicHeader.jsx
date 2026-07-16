import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react"

export default function MusicHeader({
  releaseCount,
}) {
  return (
    <Box mb={{ base: 6, lg: 12 }}>
      {/* TITLE */}

      <Heading
        fontFamily="'Bebas Neue', sans-serif"
        fontSize={{
          base: "3xl",
          lg: "8xl",
        }}
        fontWeight="400"
        lineHeight="0.8"
        letterSpacing="2px"
        mb={{
          base: 3,
          lg: 5,
        }}
      >
        MUSIC
      </Heading>

      {/* INFO */}

      <Flex
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          base: "stretch",
          lg: "center",
        }}
        gap={{
          base: 2,
          lg: 6,
        }}
      >
        <Text
          color="gray.400"
          fontSize={{
            base: "12px",
            lg: "sm",
          }}
          letterSpacing={{
            base: "1.3px",
            lg: "4px",
          }}
          textTransform="uppercase"
          whiteSpace="nowrap"
        >
          Originals · Remixes · Collaborations
        </Text>

        <Flex
          flex="1"
          align="center"
          gap={{
            base: 3,
            lg: 6,
          }}
        >
          <Box
            flex="1"
            h="1px"
            bg="whiteAlpha.400"
          />

          <Text
            color="gray.400"
            fontSize={{
              base: "12px",
              lg: "sm",
            }}
            letterSpacing={{
              base: "1.5px",
              lg: "3px",
            }}
            textTransform="uppercase"
            whiteSpace="nowrap"
          >
            {String(releaseCount).padStart(2, "0")} Releases
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}