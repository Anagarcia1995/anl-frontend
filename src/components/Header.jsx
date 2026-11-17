
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { useAuth } from "../context/AuthContext";
import MobileMenu from "./Header/MobileMenu";
import NavItem from "./Header/NavItem";

export default function Header() {
  const { isAdmin, logout } = useAuth();

  const [mobileMenuState, setMobileMenuState] = useState({
    open: false,
    route: "",
  });

  const headerRef = useRef(null);
  const location = useLocation();

  const isMobileMenuOpen =
    mobileMenuState.open &&
    mobileMenuState.route === location.pathname;

  // CLOSE MOBILE MENU
  const closeMobileMenu = useCallback(() => {
    setMobileMenuState((prev) => ({
      ...prev,
      open: false,
    }));
  }, []);

  // TOGGLE MOBILE MENU
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuState((prev) => {
      const currentlyOpen =
        prev.open && prev.route === location.pathname;

      return {
        open: !currentlyOpen,
        route: location.pathname,
      };
    });
  }, [location.pathname]);

  // CLOSE ON OUTSIDE CLICK / ESCAPE
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <Box
      ref={headerRef}
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      w="100%"
      zIndex={1000}
      py={{ base: 2, lg: 2.5 }}
      bg="rgba(0, 0, 0, 0.15)"
      backdropFilter="blur(8px)"
      WebkitBackdropFilter="blur(8px)"
      transition="background-color .3s ease"
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
          minH={{ base: "40px", lg: "auto" }}
        >
          {/* MOBILE MENU - FULL WIDTH */}
          <Box
            display={{ base: "block", lg: "none" }}
            position="relative"
            w="100%"
            minW={0}
            pr={isAdmin ? "32px" : 0}
            zIndex={3}
          >
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
              onClose={closeMobileMenu}
            />
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
                base: `translateX(-50%) translateY(${
                  isMobileMenuOpen ? "-5px" : "0"
                })`,
                lg: "none",
              }}
              opacity={{
                base: isMobileMenuOpen ? 0 : 1,
                lg: 1,
              }}
              pointerEvents={{
                base: isMobileMenuOpen ? "none" : "auto",
                lg: "auto",
              }}
              transition="opacity .25s ease, transform .25s ease"
              cursor="pointer"
              color="white"
              zIndex={isMobileMenuOpen ? 0 : 4}
            >
              {/* MOBILE LOGO */}
              <Text
                display={{ base: "block", lg: "none" }}
                fontFamily="'Bebas Neue', sans-serif"
                fontSize={{ base: "4xl", md: "5xl" }}
                lineHeight="1"
                whiteSpace="nowrap"
              >
                ART NO LOGIA
              </Text>

              {/* DESKTOP LOGO */}
              <Box
                display={{ base: "none", lg: "flex" }}
                flexDirection="column"
                lineHeight="0.74"
              >
                <Text
                  fontFamily="'Bebas Neue', sans-serif"
                  fontSize="3xl"
                >
                  ART
                </Text>

                <Text
                  fontFamily="'Bebas Neue', sans-serif"
                  fontSize="3xl"
                >
                  NO
                </Text>

                <Text
                  fontFamily="'Bebas Neue', sans-serif"
                  fontSize="3xl"
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
            <NavItem to="/next-dates">Tour</NavItem>
          </Flex>

          {/* ADMIN LOGOUT */}
          {isAdmin && (
            <Box
              position={{
                base: "absolute",
                lg: "absolute",
              }}
              right={{ base: 0, lg: 12 }}
              top={{ base: "50%", lg: 0 }}
              transform={{
                base: "translateY(-50%)",
                lg: "none",
              }}
              color="white"
              fontSize="25px"
              cursor="pointer"
              transition="opacity .2s ease"
              _hover={{ opacity: 0.7 }}
              onClick={logout}
              zIndex={5}
            >
              <FiLogOut size={22} />
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
