import {
  Flex,
  Text,
} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function DateNavigation() {
  return (
    <Flex
      justify="right"
      gap={10}
      mb={10}
    >
      <NavLink to="/next-dates">
        {({ isActive }) => (
          <Text
            fontSize="sm"
            letterSpacing="2px"
            textTransform="uppercase"
            borderBottom={
              isActive
                ? "1px solid white"
                : "1px solid transparent"
            }
            pb={1}
            transition="all .2s ease"
            _hover={{
              color: "gray.400",
            }}
          >
            Next Dates
          </Text>
        )}
      </NavLink>

      <NavLink to="/old-dates">
        {({ isActive }) => (
          <Text
            fontSize="sm"
            letterSpacing="2px"
            textTransform="uppercase"
            borderBottom={
              isActive
                ? "1px solid white"
                : "1px solid transparent"
            }
            pb={1}
            transition="all .2s ease"
            _hover={{
              color: "gray.400",
            }}
          >
            Past Dates
          </Text>
        )}
      </NavLink>
    </Flex>
  )
}