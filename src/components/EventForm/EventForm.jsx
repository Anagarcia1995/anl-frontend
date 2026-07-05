import {
  Box,
  SimpleGrid
} from "@chakra-ui/react"

import EventFormActions from "./EventFormActions"
import FormInput from "./FormInput"
import PrioritySelect from "./PrioritySelect"
import CityInput from "./CityInput"
import DateInput from "./DateInput"

export default function EventForm({
  eventName,
  setEventName,
  venueName,
  setVenueName,
  ticketUrl,
  setTicketUrl,
  city,
  preferredRegion,
  setPreferredRegion,
  filteredCities,
  handleCitySearch,
  handleSelectCity,
  date,
  setDate,
  handleSaveEvent,
  onCancel
}) {
  return (
    <Box mb={8}>
      <SimpleGrid
        columns={2}
        spacing={2}
        mb={4}
      >
        <FormInput
          placeholder="Event name"
          value={eventName}
          onChange={(e) =>
            setEventName(e.target.value)
          }
        />

        <FormInput
          placeholder="Venue name"
          value={venueName}
          onChange={(e) =>
            setVenueName(e.target.value)
          }
        />

        <CityInput
          city={city}
          filteredCities={filteredCities}
          handleCitySearch={handleCitySearch}
          handleSelectCity={handleSelectCity}
        />

        <PrioritySelect
          preferredRegion={preferredRegion}
          setPreferredRegion={setPreferredRegion}
        />

        <DateInput
          date={date}
          setDate={setDate}
        />

        <FormInput
          placeholder="Ticket URL"
          value={ticketUrl}
          onChange={(e) =>
            setTicketUrl(e.target.value)
          }
        />
      </SimpleGrid>

      <EventFormActions
        onSave={handleSaveEvent}
        onCancel={onCancel}
      />
    </Box>
  )
}