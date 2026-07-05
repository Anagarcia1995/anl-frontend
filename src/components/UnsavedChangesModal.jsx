import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react"

export default function UnsavedChangesModal({
  title,
  description,
  onConfirm,
  onCancel
}) {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="blackAlpha.700"
      zIndex="1000"
      justify="center"
      align="center"
      px={4}
    >
      <Box
        bg="white"
        color="black"
        border="1px solid"
        borderColor="black"
        p={6}
        w="100%"
        maxW="420px"
      >
        <Text
          fontSize="lg"
          fontWeight="600"
          mb={2}
        >
          {title}
        </Text>

        {description && (
          <Text
            color="gray.700"
            fontSize="sm"
            mb={6}
          >
            {description}
          </Text>
        )}

        <Flex
          justify="flex-end"
          gap={3}
          fontSize="12px"
          letterSpacing="1px"
          textTransform="uppercase"
        >
          <Box
            cursor="pointer"
            border="1px solid"
            borderColor="black"
            px={4}
            py={2}
            transition="all 0.2s ease"
            _hover={{
              bg: "black",
              color: "white",
              transform: "scale(1.05)"
            }}
            onClick={onCancel}
          >
            Keep editing
          </Box>

          <Box
            cursor="pointer"
            border="1px solid"
            borderColor="black"
            px={4}
            py={2}
            transition="all 0.2s ease"
            _hover={{
              bg: "black",
              color: "white",
              transform: "scale(1.05)"
            }}
            onClick={onConfirm}
          >
            Discard
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}