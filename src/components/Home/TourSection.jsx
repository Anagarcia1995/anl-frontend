import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { fetchEvents } from "../../services/eventsService"
import { getUpcomingEvents } from "../../utils/events"

const formatEventDate = (date) => {
  if (!date) return ""

  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
  }).format(new Date(date))

  return formatted.toUpperCase()
}

export default function TourSection() {
  const navigate = useNavigate()

  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents()

        setEvents(
          getUpcomingEvents(data).slice(0, 4)
        )
      } catch (error) {
        console.error(
          "Error loading home events",
          error
        )
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  if (loading) return null
  if (!events.length) return null

  const handleEventClick = (ticketUrl) => {
    if (!ticketUrl) return

    window.open(
      ticketUrl,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <Box
      w="calc(100% + 32px)"
      ml="-16px"
      py={{ base: 4, lg: 12 }}
    >
      <Box
        position="relative"
        minH={{ base: "410px", lg: "550px" }}
        overflow="hidden"
      >
        {/* BACKGROUND */}

        <Box
          position="absolute"
          inset="0"
          bgImage="url('/images/tour-dates.png')"
          bgSize="cover"
          bgPosition={{
            base: "center 65%",
            lg: "center 60%",
          }}
          filter="blur(1px) brightness(0.62)"
          transform="scale(1.02)"
        />

        {/* OVERLAY */}

        <Box
          position="absolute"
          inset="0"
          bg="rgba(0,0,0,.25)"
        />

        {/* EVENTS */}

        <Flex
          position="relative"
          zIndex={1}
          minH={{ base: "410px", lg: "550px" }}
          direction="column"
          justify="center"
          align="center"
          px={{ base: 14, lg: 16 }}
        >
          <Flex
            direction="column"
            w={{
              base: "100%",
              lg: "35%",
            }}
            gap={{ base: 3, lg: 5 }}
          >
            {events.map((event) => {
const eventDetails = [
  event.venueName,
    event.city,

]
  .filter(Boolean)
  .join(" - ")

              return (
                <Box
                  key={event._id}
                  minW={0}
                  pb={3}
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.500"
                  cursor={
                    event.ticketUrl
                      ? "pointer"
                      : "default"
                  }
                  role={
                    event.ticketUrl
                      ? "link"
                      : undefined
                  }
                  tabIndex={
                    event.ticketUrl
                      ? 0
                      : undefined
                  }
                  transition="all .25s ease"
                  _hover={
                    event.ticketUrl
                      ? {
                          pl: 2,
                          borderColor: "white",
                        }
                      : undefined
                  }
                  onClick={() =>
                    handleEventClick(
                      event.ticketUrl
                    )
                  }
                  onKeyDown={(e) => {
                    if (
                      event.ticketUrl &&
                      (e.key === "Enter" ||
                        e.key === " ")
                    ) {
                      handleEventClick(
                        event.ticketUrl
                      )
                    }
                  }}
                >
                  {/* EVENT NAME */}

                  <Text
                    fontSize={{
                      base: "sm",
                      lg: "xl",
                    }}
                    fontWeight="600"
                    letterSpacing="1.2px"
                    textTransform="uppercase"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {formatEventDate(event.date)}  {event.eventName}
                  </Text>

                  {/* DATE + CITY + VENUE */}

                  <Text
                    mt={1}
                    color="gray.300"
                    fontSize={{
                      base: "md",
                      lg: "md",
                    }}
                    letterSpacing="1px"
                    textTransform="none"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {eventDetails}
                  </Text>
                </Box>
              )
            })}
          </Flex>

          {/* VIEW ALL */}

          <Text
            mt={{ base: 8, lg: 10 }}
            cursor="pointer"
            fontSize={{
              base: "xs",
              lg: "sm",
            }}
            letterSpacing="4px"
            textTransform="uppercase"
            transition="all .4s ease"
            _hover={{
              transform: "scale(1.1)",
              color: "gray.300",
            }}
            onClick={() =>
              navigate("/next-dates")
            }
          >
            TOUR & TICKETS
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}