import { Box, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FiLogOut } from "react-icons/fi"

import { useAuth } from "../context/AuthContext"

import MobileMenu from "./Header/MobileMenu"
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
      <Box
        maxW="1860px"
        mx="auto"
        px={{ base: 4, lg: 8 }}
      >
        <Flex
          justify="space-between"
          align={{ base: "center", lg: "flex-end" }}
          position="relative"
        >
          {/* MOBILE MENU */}

          <Box display={{ base: "block", lg: "none" }}>
            <MobileMenu />
          </Box>

          {/* LOGO */}

          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "contents",
            }}
          >
            <Box
              position={{ base: "absolute", lg: "static" }}
              left={{ base: "50%", lg: "auto" }}
              transform={{
                base: "translateX(-50%)",
                lg: "none",
              }}
              cursor="pointer"
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
                lineHeight="0.74"
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
          </Link>

          {/* DESKTOP NAV */}

          <Flex
            display={{ base: "none", lg: "flex" }}
            align="center"
            alignSelf="flex-end"
            pb="2px"
            gap={10}
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
              position={{ base: "static", lg: "absolute" }}
              right={{ lg: 12 }}
              top={{ lg: 0 }}
              color="white"
              fontSize="25px"
              cursor="pointer"
              transition="all .2s ease"
              _hover={{
                transform: "scale(1.1)",
              }}
              onClick={logout}
            >
              <FiLogOut size={22} />
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  )
}