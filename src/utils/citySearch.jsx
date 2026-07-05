import { City } from "country-state-city"

import {
  SPAIN,
  LATAM,
  EUROPE
} from "../constants/regions"

import { normalizeText } from "./text"

export const searchCities = (
  value,
  preferredRegion
) => {

  if (value.length <= 1) {
    return []
  }

  const cities = City.getAllCities()

  let filtered = cities.filter(c =>
    normalizeText(c.name).includes(
      normalizeText(value)
    )
  )

  const getRegionCountries = () => {

    switch (preferredRegion) {

      case "spain":
        return SPAIN

      case "latam":
        return LATAM

      case "europe":
        return EUROPE

      default:
        return null
    }
  }

  const regionCountries = getRegionCountries()

  // FILTRO MANUAL
  if (regionCountries) {

    filtered = filtered.filter(c =>
      regionCountries.includes(c.countryCode)
    )

  } else {

    // PRIORIDAD DEFAULT
    filtered = filtered.sort((a, b) => {

      const getPriority = (countryCode) => {

        if (SPAIN.includes(countryCode)) return 1
        if (LATAM.includes(countryCode)) return 2
        if (EUROPE.includes(countryCode)) return 3

        return 4
      }

      return (
        getPriority(a.countryCode) -
        getPriority(b.countryCode)
      )
    })
  }

  return filtered.slice(0, 5)
}