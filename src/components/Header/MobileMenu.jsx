
import {
  Box,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";

import { NavLink, useLocation } from "react-router-dom";

const links = [
  { label: "HOME", to: "/" },
  { label: "MUSIC", to: "/music" },
  { label: "TOUR", to: "/next-dates" },
  { label: "VIDEOS", to: "/video" },
];

export default function MobileMenu({
  isOpen,
  onToggle,
  onClose,
}) {
  const location = useLocation();

  return (
    <Flex
      display={{ base: "flex", lg: "none" }}
      w="100%"
      minW={0}
      align="center"
      position="relative"
    >
      {/* HAMBURGER / X */}
      <IconButton
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        icon={
          <Box
            position="relative"
            w="23px"
            h="20px"
          >
            {/* TOP LINE */}
            <Box
              position="absolute"
              top={isOpen ? "9px" : "3px"}
              left="1px"
              w="21px"
              h="2px"
              bg="white"
              borderRadius="full"
              transform={
                isOpen ? "rotate(45deg)" : "rotate(0deg)"
              }
              transition="top .25s ease, transform .25s ease"
            />

            {/* MIDDLE LINE */}
            <Box
              position="absolute"
              top="9px"
              left="1px"
              w="21px"
              h="2px"
              bg="white"
              borderRadius="full"
              opacity={isOpen ? 0 : 1}
              transition="opacity .15s ease"
            />

            {/* BOTTOM LINE */}
            <Box
              position="absolute"
              top={isOpen ? "9px" : "15px"}
              left="1px"
              w="21px"
              h="2px"
              bg="white"
              borderRadius="full"
              transform={
                isOpen ? "rotate(-45deg)" : "rotate(0deg)"
              }
              transition="top .25s ease, transform .25s ease"
            />
          </Box>
        }
        variant="ghost"
        color="white"
        bg="transparent"
        flexShrink={0}
        minW="36px"
        w="36px"
        h="40px"
        p={0}
        onClick={onToggle}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ boxShadow: "none" }}
      />

      {/* MOBILE NAVIGATION */}
      <Flex
        id="mobile-navigation"
        as="nav"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        flex="1"
        minW={0}
        align="center"
        justify="center"
        gap={0}
        pl="2px"
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? "visible" : "hidden"}
        pointerEvents={isOpen ? "auto" : "none"}
        transform={
          isOpen
            ? "translateX(0)"
            : "translateX(8px)"
        }
        transition="
          opacity .25s ease,
          transform .25s ease,
          visibility .25s ease
        "
        whiteSpace="nowrap"
      >
        {links.map((link, index) => {
          const active =
            link.to === "/"
              ? location.pathname === "/"
              : location.pathname === link.to ||
                location.pathname.startsWith(`${link.to}/`);

          return (
            <Flex
              key={link.to}
              align="center"
              flexShrink={0}
              gap={0}
            >
              {/* CENTERED SEPARATOR */}
              {index > 0 && (
                <Text
                  color="rgba(255,255,255,0.6)"
                  fontSize="13px"
                  fontWeight="400"
                  lineHeight="1"
                  mx={{
                    base: "15px",
                    sm: "7px",
                    md: "9px",
                  }}
                  textAlign="center"
                >
                  |
                </Text>
              )}

              {/* LINK */}
              <NavLink
                to={link.to}
                onClick={onClose}
                tabIndex={isOpen ? 0 : -1}
                style={{
                  textDecoration: "none",
                }}
              >
                <Text
                  color="white"
                  fontFamily="'Space Grotesk', Arial, sans-serif"
                  fontSize={{
                    base: "clamp(11px, 3.5vw, 14px)",
                    sm: "14px",
                    md: "15px",
                  }}
                  fontWeight={active ? "700" : "500"}
                  letterSpacing="-0.035em"
                  lineHeight="1.2"
                  transition="opacity .2s ease"
                  _hover={{
                    opacity: 0.7,
                  }}
                >
                  {link.label}
                </Text>
              </NavLink>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
