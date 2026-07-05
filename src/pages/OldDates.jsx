import { useEffect, useState } from "react"
import { Text, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import EventMonthList from "../components/EventMonthList"
import { fetchEvents } from "../services/eventsService"
import { getPastEvents, groupEventsByMonth } from "../utils/events"

export default function OldDates() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(getPastEvents(data))
      setLoading(false)
    })
  }, [])

  const grouped = groupEventsByMonth(events)
  const entries = Object.entries(grouped)

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      maxW={{
        base: "100%",
        md: "900px"
      }}
      mx={{ md: "auto" }}
      px={{ md: 6 }}
      py={{
        base: 4,
        md: 20
      }}
    >
      {loading ? (
        <Text>Loading...</Text>
      ) : events.length === 0 ? (
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

      <Link
        to="/next-dates"
        style={{
          textDecoration: "none"
        }}
      >
        <Text
          mt={0}
          textAlign="center"
          fontSize="sm"
          color="gray.500"
          cursor="pointer"
          _hover={{
            color: "white"
          }}
        >
          View Next Dates.
        </Text>
      </Link>
    </Box>
  )
}