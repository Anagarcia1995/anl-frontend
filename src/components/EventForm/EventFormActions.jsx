import { Box, Flex } from "@chakra-ui/react"
import { FiCheck, FiX } from "react-icons/fi"

export default function EventFormActions({
  onSave,
  onCancel
}) {
  return (
    <Flex
      justify="flex-end"
      gap={6}
      color="whiteAlpha.800"
      fontSize="20px"
    >
      <Box
        cursor="pointer"
        transition="all 0.2s ease"
        onClick={onSave}
        _hover={{
          color: "white",
          transform: "scale(1.05)"
        }}
      >
        <FiCheck />
      </Box>

      <Box
        cursor="pointer"
        transition="all 0.2s ease"
        onClick={onCancel}
        _hover={{
          color: "white",
          transform: "scale(1.05)"
        }}
      >
        <FiX />
      </Box>
    </Flex>
  )
}