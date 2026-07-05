import { Select } from "@chakra-ui/react"

export default function PrioritySelect({
  preferredRegion,
  setPreferredRegion
}) {
  return (
    <Select
      size="sm"
      bg="transparent"
      color="white"
      border="none"
      borderBottom="1px solid"
      borderColor="whiteAlpha.600"
      borderRadius="0"
      _focusVisible={{
        boxShadow: "none",
        borderColor: "white"
      }}
      value={preferredRegion}
      onChange={(e) =>
        setPreferredRegion(e.target.value)
      }
    >
      <option value="default">
        Default Priority
      </option>

      <option value="spain">
        Spain
      </option>

      <option value="latam">
        LATAM
      </option>

      <option value="europe">
        Europe
      </option>

      <option value="worldwide">
        Worldwide
      </option>
    </Select>
  )
}