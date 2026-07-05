import { useState } from "react"
import { searchCities } from "../utils/citySearch"

export default function useCitySearch() {
  const [city, setCity] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [filteredCities, setFilteredCities] = useState([])
  const [preferredRegion, setPreferredRegion] = useState("default")

  const handleCitySearch = (value) => {
    setCity(value)

    const results = searchCities(
      value,
      preferredRegion
    )

    setFilteredCities(results)
  }

  const handleSelectCity = (selectedCity) => {
    setCity(selectedCity.name)
    setCountryCode(selectedCity.countryCode)
    setFilteredCities([])
  }

  const resetCitySearch = () => {
    setCity("")
    setCountryCode("")
    setFilteredCities([])
    setPreferredRegion("default")
  }

  return {
    city,
    setCity,
    countryCode,
    setCountryCode,
    filteredCities,
    preferredRegion,
    setPreferredRegion,
    handleCitySearch,
    handleSelectCity,
    resetCitySearch
  }
}