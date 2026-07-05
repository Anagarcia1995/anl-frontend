import { useState } from "react"
import useCitySearch from "./useCitySearch"
import { getDefaultEventDate } from "../utils/date"

export default function useNewEventForm() {
  const [eventName, setEventName] = useState("")
  const [venueName, setVenueName] = useState("")
  const [ticketUrl, setTicketUrl] = useState("")
  const [date, setDate] = useState(getDefaultEventDate())

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
    setDate(getDefaultEventDate())
  }

  const hasNewEventChanges =
    eventName ||
    venueName ||
    ticketUrl ||
    city ||
    date

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