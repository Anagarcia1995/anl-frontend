
import { Button } from "@chakra-ui/react";

export default function TicketButton({ ticketUrl }) {
  return (
    <Button
      as={ticketUrl ? "a" : "button"}
      href={ticketUrl || undefined}
      target={ticketUrl ? "_blank" : undefined}
      rel={ticketUrl ? "noreferrer" : undefined}
      fontSize={{
        base: "11px",
        md: "12px",
      }}
      letterSpacing="2px"
      variant="outline"
      borderColor="white"
      color="white"
      borderRadius="0"
      cursor={ticketUrl ? "pointer" : "default"}
      transition="all 0.2s ease"
      w={{
        base: "108px",
        md: "86px",
      }}
      minW={{
        base: "108px",
        md: "86px",
      }}
      h={{
        base: "30px",
        md: "40px",
      }}
      minH={{
        base: "30px",
        md: "40px",
      }}
      px={3}
      _hover={
        ticketUrl
          ? {
              bg: "white",
              color: "black",
            }
          : {}
      }
    >
      {ticketUrl ? "TICKETS" : "SOON"}
    </Button>
  );
}
