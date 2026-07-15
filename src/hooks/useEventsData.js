import { useEffect, useState } from "react"

import { validateRequiredFields } from "../utils/validateRequiredFields"

import {
  getRequiredFieldsMessage,
  getRequiredMessage,
  getActionMessage
} from "../utils/messages"

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

const missingFields = validateRequiredFields([
  {
    label: "Event name",
    value: eventName,
  },
  {
    label: "Venue name",
    value: venueName,
  },
  {
    label: "City",
    value: city,
  },
  {
    label: "Date",
    value: date,
  },
])

if (missingFields.length > 1) {
  showToast(
    toast,
    getRequiredFieldsMessage()
  )
  return
}

if (missingFields.length === 1) {
  showToast(
    toast,
    getRequiredMessage(missingFields[0])
  )
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

      showToast(
        toast,
        getActionMessage(
          "Event",
          "created"
        )
      )
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

      showToast(
        toast,
        getActionMessage(
          "Event",
          "deleted"
        )
      )
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

      showToast(
        toast,
        getActionMessage(
          "Event",
          "updated"
        )
      )
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