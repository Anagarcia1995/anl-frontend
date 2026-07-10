import { NavLink } from "react-router-dom"
import { Text } from "@chakra-ui/react"

export default function NavItem({
  to,
  children,
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Text
          fontSize="14px"
          letterSpacing="3px"
          textTransform="uppercase"
          pb={1}
          borderBottom={
            isActive
              ? "1px solid white"
              : "2px solid transparent"
          }
          transition="all .2s ease"
          _hover={{
            color: "gray.400",
          }}
        >
          {children}
        </Text>
      )}
    </NavLink>
  )
}