import {
  Box
} from "@chakra-ui/react"

import {
  useEffect,
  useRef,
  useState
} from "react"

import CityDropdown from "./CityDropdown"
import FormInput from "./FormInput"

export default function CityInput({
  city,
  filteredCities,
  handleCitySearch,
  handleSelectCity
}) {
  const cityDropdownRef = useRef(null)
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(e.target)
      ) {
        setIsCityDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleCityChange = (value) => {
    handleCitySearch(value)
    setIsCityDropdownOpen(true)
  }

  const handleCityKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsCityDropdownOpen(false)
    }

    if (e.key === "Enter") {
      e.preventDefault()
      setIsCityDropdownOpen(false)
      e.target.blur()
    }
  }

  const handleCitySelectAndClose = (selectedCity) => {
    handleSelectCity(selectedCity)
    setIsCityDropdownOpen(false)
  }

  return (
    <Box
      position="relative"
      ref={cityDropdownRef}
    >
      <FormInput
        placeholder="City"
        value={city}
        onChange={(e) =>
          handleCityChange(e.target.value)
        }
        onFocus={() =>
          setIsCityDropdownOpen(true)
        }
        onKeyDown={handleCityKeyDown}
      />

      {isCityDropdownOpen && (
        <CityDropdown
          filteredCities={filteredCities}
          onSelect={handleCitySelectAndClose}
          onClose={() =>
            setIsCityDropdownOpen(false)
          }
        />
      )}
    </Box>
  )
}