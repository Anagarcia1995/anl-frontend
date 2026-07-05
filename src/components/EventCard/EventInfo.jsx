import {
  Box,
  Text
} from "@chakra-ui/react"

const formatDay = (dateString) => {
  const date = new Date(dateString)

  return String(date.getDate()).padStart(2, "0")
}

export default function EventInfo({ event }) {
  return (
    <Box flex="1">

      <Text
        fontSize="lg"
        fontWeight="600"
        display={{
          base: "block",
          md: "none"
        }}
      >
        {formatDay(event.date)}{" "}
        {event.eventName}
      </Text>

      <Text
        display={{
          base: "none",
          md: "block"
        }}
        fontSize="xl"
      >
        <Text
          as="span"
          fontWeight="600"
          color="white"
        >
          {formatDay(event.date)}{" "}
          {event.eventName}
        </Text>

        <Text
          as="span"
          color="gray.500"
          fontWeight="400"
          fontSize="md"
          ml={2}
        >
          <Text
            as="span"
            color="gray.300"
          >
            — {event.venueName}
          </Text>

          <Text
            as="span"
            color="gray.600"
            ml={2}
          >
            {event.city} ({event.countryCode})
          </Text>
        </Text>

      </Text>

      <Text
        fontSize="md"
        letterSpacing="0.5px"
        display={{
          base: "block",
          md: "none"
        }}
      >
        <Text
          as="span"
          color="gray.300"
        >
          {event.venueName}
        </Text>

        <Text
          as="span"
          color="gray.600"
          ml={2}
        >
          {event.city} ({event.countryCode})
        </Text>

      </Text>

    </Box>
  )
}