import { useEffect, useState } from "react"
import {
  Box,
  Text,
} from "@chakra-ui/react"

import DateNavigation from "../components/Dates/DateNavigation"
import EventMonthList from "../components/EventMonthList"

import { fetchEvents } from "../services/eventsService"
import {
  getPastEvents,
  groupEventsByMonth,
} from "../utils/events"

const EVENTS_PER_PAGE = 6

export default function OldDates() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [visibleEvents, setVisibleEvents] = useState(EVENTS_PER_PAGE)

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(getPastEvents(data))
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Text>Loading...</Text>
  }

  const grouped = groupEventsByMonth(
    events.slice(0, visibleEvents)
  )

  const entries = Object.entries(grouped)

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      maxW={{ base: "100%", md: "900px" }}
      mx={{ md: "auto" }}
      px={{ md: 6 }}
      py={{ base: 4, md: 20 }}
    >
      <DateNavigation />

      {events.length === 0 ? (
        <Text
          color="gray.500"
          fontSize="sm"
          letterSpacing="1px"
          mb={8}
        >
          No past events
        </Text>
      ) : (
        <EventMonthList
          entries={entries}
          showButton={false}
        />
      )}

      {visibleEvents < events.length && (
        <Text
          mt={8}
          textAlign="center"
          fontSize="sm"
          letterSpacing="2px"
          color="gray.500"
          cursor="pointer"
          transition="all .2s ease"
          _hover={{
            color: "white",
          }}
          onClick={() =>
            setVisibleEvents(
              (prev) => prev + EVENTS_PER_PAGE
            )
          }
        >
          Load More
        </Text>
      )}
    </Box>
  )
}