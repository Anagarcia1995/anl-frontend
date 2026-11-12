
import {
  Box,
  SimpleGrid,
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
  onCancel,
}) {
  return (
    <Box
      mb={8}
      w="100%"
      border="1px solid rgba(255,255,255,0.65)"
      borderRadius={{
        base: "22px",
        md: "22px",
        lg: "26px",
      }}
      bg="rgba(0,0,0,0.35)"
      backdropFilter="blur(5px)"
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
