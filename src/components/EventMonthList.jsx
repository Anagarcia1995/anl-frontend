
import { Box, Text } from "@chakra-ui/react";
import EventCard from "../components/EventCard/EventCard";

export default function EventMonthList({
  entries,
  activeEditor,
  onRequestEdit,
  onCancelEdit,
  onDirtyChange,
  onDelete,
  onUpdate,
  showButton = true,
}) {
  return (
    <Box
      flex="1"
      w="100%"
      display="flex"
      flexDirection="column"
      gap={{
        base: 4,
        md: 6,
        lg: 8,
      }}
    >
      {entries.map(([month, events]) => (
        <Box
          key={month}
          w="100%"
          border="1px solid rgba(255,255,255,0.65)"
          borderRadius={{
            base: "22px",
            md: "22px",
            lg: "26px",
          }}
          bg="rgba(0,0,0,0.35)"
          backdropFilter="blur(5px)"
          overflow="hidden"
          px={{
            base: 4,
            md: 5,
            lg: 6,
          }}
          pt={{
            base: 3,
            md: 4,
            lg: 5,
          }}
          pb={{
            base: 2,
            md: 3,
            lg: 4,
          }}
        >
          {/* MONTH */}
          <Text
            fontSize={{
              base: "12px",
              md: "13px",
            }}
            fontWeight="600"
            letterSpacing="3px"
            textTransform="uppercase"
            color="white"
            mb={{
              base: 2,
              md: 3,
            }}
          >
            {month}
          </Text>

          {/* EVENTS */}
          <Box pl={0}>
            {events.map((event, eventIndex) => (
              <Box
                key={event._id}
                borderBottom={
                  eventIndex !== events.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none"
                }
              >
                <EventCard
                  event={event}
                  isEditing={activeEditor === event._id}
                  onRequestEdit={onRequestEdit}
                  onCancelEdit={onCancelEdit}
                  onDirtyChange={onDirtyChange}
                  onDelete={() => onDelete(event._id)}
                  onUpdate={onUpdate}
                  showButton={showButton}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
