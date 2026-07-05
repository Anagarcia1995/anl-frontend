import { useState } from "react"
import { Text, Box, Button, useToast } from "@chakra-ui/react"
import { showToast } from "../utils/showToast"
import { Link } from "react-router-dom"
import { FiPlus } from "react-icons/fi"

import useNewEventForm from "../hooks/useNewEventForm"
import useEventsData from "../hooks/useEventsData"

import { useAuth } from "../context/AuthContext"
import EventMonthList from "../components/EventMonthList"
import EventForm from "../components/EventForm/EventForm"
import UnsavedChangesModal from "../components/UnsavedChangesModal"

import { groupEventsByMonth } from "../utils/events"

export default function NextDates() {
  const [showForm, setShowForm] = useState(false)
  const [activeEditor, setActiveEditor] = useState(null)
  const [showSwitchModal, setShowSwitchModal] = useState(false)
  const [switchTarget, setSwitchTarget] = useState(null)
  const [hasActiveEditorChanges, setHasActiveEditorChanges] = useState(false)

  const toast = useToast()
  const { isAdmin } = useAuth()

  const {
    eventName,
    setEventName,
    venueName,
    setVenueName,
    ticketUrl,
    setTicketUrl,
    date,
    setDate,
    city,
    countryCode,
    filteredCities,
    preferredRegion,
    setPreferredRegion,
    handleCitySearch,
    handleSelectCity,
    resetNewEventForm,
    hasNewEventChanges
  } = useNewEventForm()

  const {
    events,
    loading,
    handleSaveEvent,
    handleDeleteEvent,
    handleUpdateEvent
  } = useEventsData({
    toast,
    showToast,
    newEventForm: {
      eventName,
      venueName,
      ticketUrl,
      city,
      countryCode,
      date,
      resetNewEventForm
    },
    onEventCreated: () => {
      setShowForm(false)
    }
  })

  const grouped = groupEventsByMonth(events)
  const entries = Object.entries(grouped)

  const handleRequestEdit = (eventId) => {
    if (showForm) {
      if (hasNewEventChanges) {
        setSwitchTarget(eventId)
        setShowSwitchModal(true)
        return
      }

      setShowForm(false)
      setActiveEditor(eventId)
      return
    }

    if (activeEditor && activeEditor !== eventId) {
      if (hasActiveEditorChanges) {
        setSwitchTarget(eventId)
        setShowSwitchModal(true)
        return
      }

      setActiveEditor(eventId)
      return
    }

    setActiveEditor(eventId)
  }

  const handleCancelEdit = () => {
    setActiveEditor(null)
    setHasActiveEditorChanges(false)
  }

  const handleConfirmSwitchEditor = () => {
    setShowForm(false)

    if (switchTarget === "new") {
      setActiveEditor(null)
      resetNewEventForm()
      setShowForm(true)
    } else if (switchTarget === "close-new") {
      resetNewEventForm()
    } else {
      setActiveEditor(switchTarget)
    }

    setSwitchTarget(null)
    setShowSwitchModal(false)
    setHasActiveEditorChanges(false)
  }

  const handleCancelSwitchEditor = () => {
    setSwitchTarget(null)
    setShowSwitchModal(false)
  }

  const handleRequestNewEvent = () => {
    if (activeEditor && hasActiveEditorChanges) {
      setSwitchTarget("new")
      setShowSwitchModal(true)
      return
    }

    setActiveEditor(null)
    resetNewEventForm()
    setShowForm(true)
  }

  const handleCloseNewEvent = () => {
    if (hasNewEventChanges) {
      setSwitchTarget("close-new")
      setShowSwitchModal(true)
      return
    }

    setShowForm(false)
  }

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
      {showSwitchModal && (
        <UnsavedChangesModal
          title={
            switchTarget === "close-new"
              ? "Discard new event?"
              : "Discard changes?"
          }
          onConfirm={handleConfirmSwitchEditor}
          onCancel={handleCancelSwitchEditor}
        />
      )}

      {isAdmin && !showForm && (
        <Button
          size="sm"
          mb={6}
          variant="outline"
          borderColor="gray.400"
          color="white"
          borderRadius="0"
          transition="all 0.2s ease"
          _hover={{
            bg: "white",
            color: "black"
          }}
          onClick={handleRequestNewEvent}
        >
          <FiPlus size={23} />
        </Button>
      )}

      {isAdmin && showForm && (
        <EventForm
          eventName={eventName}
          setEventName={setEventName}
          venueName={venueName}
          setVenueName={setVenueName}
          ticketUrl={ticketUrl}
          setTicketUrl={setTicketUrl}
          city={city}
          preferredRegion={preferredRegion}
          setPreferredRegion={setPreferredRegion}
          filteredCities={filteredCities}
          handleCitySearch={handleCitySearch}
          handleSelectCity={handleSelectCity}
          date={date}
          setDate={setDate}
          handleSaveEvent={handleSaveEvent}
          onCancel={handleCloseNewEvent}
        />
      )}

      {loading ? (
        <Text>Loading...</Text>
      ) : events.length === 0 ? (
        <Text
          color="gray.500"
          fontSize="sm"
          letterSpacing="1px"
          mb={8}
        >
          No upcoming events
        </Text>
      ) : (
        <EventMonthList
          entries={entries}
          activeEditor={activeEditor}
          onRequestEdit={handleRequestEdit}
          onCancelEdit={handleCancelEdit}
          onDirtyChange={setHasActiveEditorChanges}
          onDelete={handleDeleteEvent}
          onUpdate={handleUpdateEvent}
        />
      )}

      <Link
        to="/old-dates"
        style={{
          textDecoration: "none"
        }}
      >
        <Text
          mt={0}
          textAlign="center"
          fontSize="sm"
          letterSpacing="1px"
          color="gray.500"
          cursor="pointer"
          _hover={{
            color: "white"
          }}
        >
          View Past Dates
        </Text>
      </Link>
    </Box>
  )
}