import { Box, Text, Flex } from "@chakra-ui/react"
import { FiPower } from "react-icons/fi"
import { useAuth } from "../context/AuthContext"

export default function Header() {
  const { isAdmin, logout } = useAuth()

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="10"
      py={4}
      borderBottom="3px solid"
      borderColor="white"
      bg="black"
    >
      <Flex
        align="center"
        justify="center"
        position="relative"
      >
        <Text
          fontFamily="'Bebas Neue', sans-serif"
          fontSize={{
            base: "5xl",
            md: "6xl",
            lg: "7xl"
          }}
          color="white"
        >
          ART NO LOGIA
        </Text>

        {isAdmin && (
          <Box
            position="absolute"
            right={3}
            top={0}
            color="white"
            fontSize="25px"
            cursor="pointer"
            transition="all 0.2s ease"
            onClick={logout}
            _hover={{
              transform: "scale(1.1)"
            }}
          >
            <FiPower />
          </Box>
        )}
      </Flex>
    </Box>
  )
}