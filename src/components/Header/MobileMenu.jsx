import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
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
        variant="ghost"
        color="white"
        fontSize="28px"
        aria-label="Open menu"
        onClick={onOpen}
        _hover={{
          bg: "transparent",
        }}
      />

      

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >

 

        <DrawerOverlay />

        

        <DrawerContent bg="black" color="white" maxW="110px">
          <DrawerCloseButton />

          

          <DrawerBody pt={20} px={4}>
            <VStack
              align="flex-start"
              spacing={8}
            >
              <NavItem to="/">Home</NavItem>

              <NavItem to="/music">
                Music
              </NavItem>

              <NavItem to="/video">
                Videos
              </NavItem>

              <NavItem to="/next-dates">
                Tour
              </NavItem>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}