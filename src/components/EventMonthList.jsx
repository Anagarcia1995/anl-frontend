import {
  Box,
  Text
} from "@chakra-ui/react"

import EventCard from "../components/EventCard/EventCard"

export default function EventMonthList({
  entries,
  activeEditor,
  onRequestEdit,
  onCancelEdit,
  onDirtyChange,
  onDelete,
  onUpdate,
  showButton = true
}) {
  return (
    <Box flex="1">
      {entries.map(([month, events], index) => (
        <Box
          key={month}
          mb={{
            base: 8,
            md: 10
          }}
        >
          <Text
            fontSize="sm"
            letterSpacing="2px"
            textTransform="uppercase"
            color="gray.500"
            mb={4}
          >
            {month}
          </Text>

          {events.map(event => (
            <EventCard
              key={event._id}
              event={event}
              isEditing={activeEditor === event._id}
              onRequestEdit={onRequestEdit}
              onCancelEdit={onCancelEdit}
              onDirtyChange={onDirtyChange}
              onDelete={() => onDelete(event._id)}
              onUpdate={onUpdate}
              showButton={showButton}
            />
          ))}

          {index !== entries.length - 1 && (
            <Box
              borderBottom="1px solid"
              borderColor="gray.700"
              mt={{ md: 6 }}
            />
          )}
        </Box>
      ))}
    </Box>
  )
}