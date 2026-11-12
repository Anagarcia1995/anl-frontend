
import { NavLink } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function NavItem({
  to,
  children,
  onClick,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {({ isActive }) => (
        <Flex
          align="center"
          gap={1}
        >
          {/* MOBILE ACTIVE INDICATOR */}
          <Box
            display={{ base: "block", lg: "none" }}
            w="3px"
            h="18px"
            bg="white"
            borderRadius="full"
            opacity={isActive ? 1 : 0}
            transition="opacity .2s ease"
          />

          {/* LABEL */}
          <Box
            position="relative"
            pb={{ base: 0, lg: 1 }}
            borderBottom={{
              base: "none",
              lg: isActive
                ? "1px solid white"
                : "1px solid transparent",
            }}
            role="group"
          >
            {/* INVISIBLE BOLD TEXT:
                RESERVES THE FINAL WIDTH */}
            <Text
              aria-hidden="true"
              visibility="hidden"
              fontSize="14px"
              fontWeight="700"
              letterSpacing="3px"
              textTransform="uppercase"
              whiteSpace="nowrap"
            >
              {children}
            </Text>

            {/* VISIBLE TEXT */}
            <Text
              position="absolute"
              top={0}
              left={0}
              w="100%"
              fontSize="14px"
              fontWeight="400"
              letterSpacing="3px"
              textTransform="uppercase"
              whiteSpace="nowrap"
              color="white"
              transition="font-weight .2s ease"
              _groupHover={{
                fontWeight: "700",
              }}
            >
              {children}
            </Text>
          </Box>
        </Flex>
      )}
    </NavLink>
  );
}
