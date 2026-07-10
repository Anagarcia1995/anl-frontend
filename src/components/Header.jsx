import { Box, Text, Flex } from "@chakra-ui/react"
import { FiPower } from "react-icons/fi"
import { useAuth } from "../context/AuthContext"

import NavItem from "./Header/NavItem"

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
        justify="space-between"
        align="flex-end"
        position="relative"
        px={{ base: 4, lg: 10 }}
      >
        {/* LOGO */}

        <Box
          display="flex"
          flexDirection="column"
          lineHeight="0.73"
        >
          <Text
            fontFamily="'Bebas Neue', sans-serif"
            fontSize={{
              base: "5xl",
              md: "6xl",
              lg: "4xl",
            }}
          >
            ART
          </Text>

          <Text
            fontFamily="'Bebas Neue', sans-serif"
            fontSize={{
              base: "5xl",
              md: "6xl",
              lg: "4xl",
            }}
          >
            NO
          </Text>

          <Text
            fontFamily="'Bebas Neue', sans-serif"
            fontSize={{
              base: "5xl",
              md: "6xl",
              lg: "4xl",
            }}
          >
            LOGIA
          </Text>
        </Box>

        {/* DESKTOP NAV */}

<Flex
  display={{ base: "none", lg: "flex" }}
  align="center"
  gap={10}
  mb={-1}
  mr="15px"
>
  <NavItem to="/">Home</NavItem>
  <NavItem to="/music">Music</NavItem>
  <NavItem to="/video">Videos</NavItem>
  <NavItem to="/next-dates">Tour</NavItem>
</Flex>

        {/* LOGOUT */}

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
              transform: "scale(1.1)",
            }}
          >
            <FiPower />
          </Box>
        )}
      </Flex>
    </Box>
  )
}