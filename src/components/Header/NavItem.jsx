import { NavLink } from "react-router-dom"
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react"

export default function NavItem({
  to,
  children,
  onClick,
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Flex
          align="center"
          gap={1}
          onClick={onClick}
        >
          {/* MOBILE */}

          <Box
            display={{ base: "block", lg: "none" }}
            w="3px"
            h="18px"
            bg="white"
            borderRadius="full"
            opacity={isActive ? 1 : 0}
            transition="opacity .2s ease"
          />

          <Text
            fontSize="14px"
            letterSpacing="3px"
            textTransform="uppercase"
            pb={{ base: 0, lg: 1 }}
            borderBottom={{
              base: "none",
              lg: isActive
                ? "1px solid white"
                : "2px solid transparent",
            }}
            transition="all .2s ease"
            _hover={{
              color: "gray.400",
            }}
          >
            {children}
          </Text>
        </Flex>
      )}
    </NavLink>
  )
}