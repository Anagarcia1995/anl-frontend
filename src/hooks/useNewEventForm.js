import { useState } from "react"
import useCitySearch from "./useCitySearch"
import { getDefaultDate } from "../utils/date"

export default function useNewEventForm() {

const defaultDate = getDefaultDate()

const [eventName, setEventName] = useState("")
const [venueName, setVenueName] = useState("")
const [ticketUrl, setTicketUrl] = useState("")
const [date, setDate] = useState(defaultDate)

  const {
    city,
    countryCode,
    filteredCities,
    preferredRegion,
    setPreferredRegion,
    handleCitySearch,
    handleSelectCity,
    resetCitySearch
  } = useCitySearch()

  const resetNewEventForm = () => {
    setEventName("")
    setVenueName("")
    setTicketUrl("")
    resetCitySearch()
    setDate(defaultDate) 
  }

  const hasNewEventChanges =
    eventName ||
    venueName ||
    ticketUrl ||
    city ||
    date !== defaultDate

  return {
    eventName,
    setEventName,
    venueName,
    setVenueName,
    ticketUrl,
    setTicketUrl,
    date,
    setDate,
    city,
    countryCode,
    filteredCities,
    preferredRegion,
    setPreferredRegion,
    handleCitySearch,
    handleSelectCity,
    resetNewEventForm,
    hasNewEventChanges
  }
}