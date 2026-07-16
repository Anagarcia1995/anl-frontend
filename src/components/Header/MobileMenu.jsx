import {
  Box,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"

import { FiMenu } from "react-icons/fi"

import NavItem from "./NavItem"

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        display={{ base: "flex", lg: "none" }}
        icon={<FiMenu />}
        aria-label="Open menu"
        variant="ghost"
        color="white"
        fontSize="28px"
        onClick={isOpen ? onClose : onOpen}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ boxShadow: "none" }}
      />

      <Box
        display={{ base: "block", lg: "none" }}
        position="fixed"
        top="75px"
        left={isOpen ? 0 : "-180px"}
        w="130px"
        bg="black"
        borderRight="2px solid"
        borderBottom="3px solid"
        borderColor="white"
        transition="left .25s ease"
        zIndex="20"
      >
        <VStack
          align="stretch"
          spacing={0}
        >
          <Box
            py={4}
            px={6}
            borderBottom="2px solid"
            borderColor="white"
          >
            <NavItem
              to="/"
              onClick={onClose}
            >
              Home
            </NavItem>
          </Box>

          <Box
            py={4}
            px={6}
            borderBottom="2px solid"
            borderColor="white"
          >
            <NavItem
              to="/music"
              onClick={onClose}
            >
              Music
            </NavItem>
          </Box>

          <Box
            py={4}
            px={6}
            borderBottom="2px solid"
            borderColor="white"
          >
            <NavItem
              to="/video"
              onClick={onClose}
            >
              Videos
            </NavItem>
          </Box>

          <Box
            py={4}
            px={6}
          >
            <NavItem
              to="/next-dates"
              onClick={onClose}
            >
              Tour
            </NavItem>
          </Box>
        </VStack>
      </Box>
    </>
  )
}