import { useEffect, useState } from "react"

import {
  fetchEvents,
  createEvent,
  deleteEvent,
  updateEvent
} from "../services/eventsService"

import { getUpcomingEvents } from "../utils/events"
import { formatDateForApi } from "../utils/date"

export default function useEventsData({
  toast,
  showToast,
  newEventForm,
  onEventCreated
}) {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(getUpcomingEvents(data))
      setLoading(false)
    })
  }, [])

  const handleSaveEvent = async () => {
    const {
      eventName,
      venueName,
      ticketUrl,
      city,
      countryCode,
      date,
      resetNewEventForm
    } = newEventForm

    const eventData = {
      eventName,
      venueName,
      ticketUrl,
      city,
      countryCode: countryCode || "ES",
      date: formatDateForApi(date)
    }

    if (!city || !date) {
      console.error("Missing required event data", eventData)
      return
    }

    try {
      const createdEvent = await createEvent(eventData)

      if (!createdEvent) {
        return
      }

      setEvents((prev) =>
        getUpcomingEvents([
          ...prev,
          createdEvent
        ])
      )

      resetNewEventForm()
      onEventCreated()

      showToast(toast, "Event created")
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent(id)

      setEvents((prev) =>
        prev.filter((event) => event._id !== id)
      )

      showToast(toast, "Event deleted")
    } catch (error) {
      console.error("Error deleting event", error)
    }
  }

  const handleUpdateEvent = async (id, updatedData) => {
    try {
      const updatedEvent = await updateEvent(id, updatedData)

      setEvents((prev) =>
        prev.map((event) =>
          event._id === id
            ? updatedEvent
            : event
        )
      )

      showToast(toast, "Event updated")
    } catch (error) {
      console.error("Error updating event", error)
    }
  }

  return {
    events,
    loading,
    handleSaveEvent,
    handleDeleteEvent,
    handleUpdateEvent
  }
}