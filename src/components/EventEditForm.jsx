import {
  Box,
  SimpleGrid
} from "@chakra-ui/react"

import EventFormActions from "./EventForm/EventFormActions"
import FormInput from "./EventForm/FormInput"
import DateInput from "./EventForm/DateInput"

export default function EventEditForm({
  editEventName,
  setEditEventName,
  editVenueName,
  setEditVenueName,
  editCity,
  setEditCity,
  editCountryCode,
  setEditCountryCode,
  editDate,
  setEditDate,
  editTicketUrl,
  setEditTicketUrl,
  handleSave,
  handleCancel
}) {
  return (
    <Box>
      <SimpleGrid
        columns={2}
        spacing={2}
        mb={2}
      >
        <FormInput
          placeholder="Event name"
          value={editEventName}
          onChange={(e) =>
            setEditEventName(e.target.value)
          }
        />

        <FormInput
          placeholder="Venue"
          value={editVenueName}
          onChange={(e) =>
            setEditVenueName(e.target.value)
          }
        />

        <FormInput
          placeholder="City"
          value={editCity}
          onChange={(e) =>
            setEditCity(e.target.value)
          }
        />

        <FormInput
          placeholder="Country"
          value={editCountryCode}
          onChange={(e) =>
            setEditCountryCode(
              e.target.value.toUpperCase()
            )
          }
        />

        <DateInput
          date={editDate}
          setDate={setEditDate}
        />

        <FormInput
          placeholder="Ticket URL"
          value={editTicketUrl}
          onChange={(e) =>
            setEditTicketUrl(e.target.value)
          }
        />
      </SimpleGrid>

      <EventFormActions
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </Box>
  )
}