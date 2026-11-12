
import { Box, Flex, Text } from "@chakra-ui/react";

const formatDay = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "";

  return String(date.getDate()).padStart(2, "0");
};

export default function EventInfo({ event }) {
  return (
    <Flex
      align="center"
      gap={{
        base: 3,
        md: 5,
      }}
      w="100%"
      minW={0}
    >
      {/* DAY */}
      <Box
        flexShrink={0}
        w={{
          base: "38px",
          md: "52px",
        }}
        textAlign="right"
      >
        <Text
          fontFamily="'Arial Narrow', 'Roboto Condensed', sans-serif"
          fontSize={{
            base: "28px",
            md: "40px",
          }}
          fontWeight="400"
          lineHeight="1"
          letterSpacing="-1.5px"
          color="white"
        >
          {formatDay(event.date)}
        </Text>
      </Box>

      {/* EVENT DETAILS */}
      <Box flex="1" minW={0}>
        <Text
          fontSize={{
            base: "14px",
            md: "17px",
          }}
          fontWeight="500"
          lineHeight="1.35"
          color="white"
          letterSpacing="-0.2px"
          overflowWrap="anywhere"
        >
          {event.eventName}
        </Text>

        <Text
          mt={1}
          fontSize={{
            base: "12px",
            md: "13px",
          }}
          fontWeight="400"
          lineHeight="1.5"
          letterSpacing="0.2px"
          color="gray.300"
        >
          {event.venueName}

          {event.city && (
            <Text
              as="span"
              color="gray.400"
              ml={2}
            >
              · {event.city}
              {event.countryCode
                ? ` (${event.countryCode})`
                : ""}
            </Text>
          )}
        </Text>
      </Box>
    </Flex>
  );
}
