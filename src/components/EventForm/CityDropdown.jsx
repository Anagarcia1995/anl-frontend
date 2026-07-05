import { Box } from "@chakra-ui/react"

export default function CityDropdown({
  filteredCities,
  onSelect,
  onClose
}) {
  if (!filteredCities.length) {
    return null
  }

  return (
    <Box
      position="absolute"
      top="100%"
      left={0}
      width="100%"
      bg="black"
      border="1px solid"
      borderColor="gray.700"
      zIndex={20}
      mt={1}
      maxH="160px"
      overflowY="auto"
    >
      <Box
        position="absolute"
        top="8px"
        right="10px"
        fontSize="md"
        fontWeight="500"
        color="gray.500"
        cursor="pointer"
        zIndex={1}
        _hover={{
          color: "white"
        }}
        onClick={onClose}
      >
        ✕
      </Box>

      {filteredCities.map((city) => (
        <Box
          key={`${city.name}-${city.countryCode}`}
          px={4}
          py={2}
          cursor="pointer"
          transition="all 0.2s ease"
          _hover={{
            bg: "gray.800"
          }}
          onClick={() => onSelect(city)}
        >
          {city.name} ({city.countryCode})
        </Box>
      ))}
    </Box>
  )
}