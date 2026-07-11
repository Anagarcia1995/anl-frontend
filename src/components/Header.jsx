import { useAuth } from "../context/AuthContext"
import MobileMenu from "./Header/MobileMenu"

import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react"

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
  align="center"
  position="relative"
  px={{ base: 4, lg: 10 }}
>
  {/* MOBILE MENU */}

  <Box display={{ base: "block", lg: "none" }}>
    <MobileMenu />

  </Box>

  {/* LOGO */}

  <Box
    position={{ base: "absolute", lg: "static" }}
    left={{ base: "50%", lg: "auto" }}
    transform={{ base: "translateX(-50%)", lg: "none" }}
  >
    {/* MOBILE */}

    <Text
      display={{ base: "block", lg: "none" }}
      fontFamily="'Bebas Neue', sans-serif"
      fontSize="5xl"
      lineHeight="1"
    >
      ART NO LOGIA
    </Text>

    {/* DESKTOP */}

    <Box
      display={{ base: "none", lg: "flex" }}
      flexDirection="column"
      lineHeight="0.73"
    >
      <Text
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="4xl"
      >
        ART
      </Text>

      <Text
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="4xl"
      >
        NO
      </Text>

      <Text
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="4xl"
      >
        LOGIA
      </Text>
    </Box>
  </Box>

  {/* DESKTOP NAV */}

  <Flex
    display={{ base: "none", lg: "flex" }}
    align="center"
    gap={10}
    mb={-16}
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
      color="white"
      fontSize="25px"
      cursor="pointer"
      transition="all 0.2s ease"
      onClick={logout}
      _hover={{
        transform: "scale(1.1)",
      }}
      position={{ base: "static", lg: "absolute" }}
      right={{ lg: 3 }}
      top={{ lg: 0 }}
    >
    </Box>
  )}
</Flex>
    </Box>
  )
}