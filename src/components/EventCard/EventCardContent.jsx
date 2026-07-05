import {
  Box,
  Flex
} from "@chakra-ui/react"

import {
  FiEdit3,
  FiTrash2
} from "react-icons/fi"

import { useAuth } from "../../context/AuthContext"
import EventInfo from "./EventInfo"
import TicketButton from "./TicketButton"

export default function EventCardContent({
  event,
  showButton = true,
  onEdit,
  onDelete
}) {
  const ticketUrl = event.ticketUrl || event.ticket
  const { isAdmin } = useAuth()

  return (
    <Flex
      direction="row"
      justify="space-between"
      align={{
        base: "flex-start",
        md: "center"
      }}
      gap={{
        base: 2,
        md: 4
      }}
    >
      <EventInfo event={event} />

      {showButton && (
        <Flex align="center" gap={4}>
          <TicketButton ticketUrl={ticketUrl} />

          {isAdmin && (
            <Flex
              gap={4}
              color="whiteAlpha.800"
              fontSize="20px"
            >
              <Box
                cursor="pointer"
                onClick={onEdit}
                transition="all 0.2s ease"
                fontSize="17px"
                _hover={{
                  color: "white",
                  transform: "scale(1.05)"
                }}
              >
                <FiEdit3 />
              </Box>

              <Box
                cursor="pointer"
                onClick={onDelete}
                transition="all 0.2s ease"
                fontSize="17px"
                _hover={{
                  color: "white",
                  transform: "scale(1.05)"
                }}
              >
                <FiTrash2 />
              </Box>
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  )
}