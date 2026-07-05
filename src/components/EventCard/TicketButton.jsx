import { Button } from "@chakra-ui/react"

export default function TicketButton({
  ticketUrl
}) {
  return (
    <Button
      as={ticketUrl ? "a" : "button"}
      href={ticketUrl || undefined}
      target={ticketUrl ? "_blank" : undefined}
      rel={ticketUrl ? "noreferrer" : undefined}
      fontSize="12px"
      letterSpacing="2px"
      variant="outline"
      borderColor="white"
      color="white"
      borderRadius="0"
      cursor={ticketUrl ? "pointer" : "default"}
      transition="all 0.2s ease"
      w="86px"
      _hover={
        ticketUrl
          ? {
              bg: "white",
              color: "black"
            }
          : {}
      }
    >
      {ticketUrl ? "TICKETS" : "SOON"}
    </Button>
  )
}