import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import EventEditForm from "../EventEditForm"
import EventCardContent from "./EventCardContent"
import { formatDateForApi } from "../../utils/date"
import { formatDateForInput } from "../../utils/date"

import {
  hasUnsavedChanges
} from "../../utils/hasUnsavedChanges"


export default function EventCard({
  event,
  showButton = true,
  onDelete,
  onUpdate,
  isEditing,
  onRequestEdit,
  onCancelEdit,
  onDirtyChange
}) {

  const [editEventName, setEditEventName] =
    useState(event.eventName || "")

  const [editVenueName, setEditVenueName] =
    useState(event.venueName || "")

  const [editCity, setEditCity] =
    useState(event.city || "")

  const [editCountryCode, setEditCountryCode] =
    useState(event.countryCode || "")

  const [editTicketUrl, setEditTicketUrl] =
    useState(event.ticketUrl || "")

  const [editDate, setEditDate] =
    useState(
      formatDateForInput(event.date)
    )

  const initialData = {
    eventName: event.eventName || "",
    venueName: event.venueName || "",
    city: event.city || "",
    countryCode: event.countryCode || "",
    ticketUrl: event.ticketUrl || "",
    date: formatDateForInput(
      event.date
    )
  }

  const currentData = {
    eventName: editEventName,
    venueName: editVenueName,
    city: editCity,
    countryCode: editCountryCode,
    ticketUrl: editTicketUrl,
    date: editDate
  }

  const hasChanges =
    hasUnsavedChanges(
      initialData,
      currentData
    )

  useEffect(() => {

    if (!isEditing) {

      queueMicrotask(() => {

        setEditEventName(
          event.eventName || ""
        )

        setEditVenueName(
          event.venueName || ""
        )

        setEditCity(
          event.city || ""
        )

        setEditCountryCode(
          event.countryCode || ""
        )

        setEditTicketUrl(
          event.ticketUrl || ""
        )

        setEditDate(
          formatDateForInput(
            event.date
          )
        )

      })

    }

  }, [isEditing, event])

  useEffect(() => {

    if (
      isEditing &&
      onDirtyChange
    ) {

      onDirtyChange(
        hasChanges
      )

    }

  }, [
    hasChanges,
    isEditing,
    onDirtyChange
  ])

  const handleSave = async () => {

    const updatedData = {
      eventName: editEventName,
      venueName: editVenueName,
      city: editCity,
      countryCode: editCountryCode,
      ticketUrl: editTicketUrl,
      date: formatDateForApi(editDate)
    }

    await onUpdate(
      event._id,
      updatedData
    )

    onCancelEdit()

  }

  return (

    <Box
      py={4}
      borderColor="gray.600"
    >

      {isEditing ? (

        <EventEditForm
          editEventName={editEventName}
          setEditEventName={setEditEventName}
          editVenueName={editVenueName}
          setEditVenueName={setEditVenueName}
          editCity={editCity}
          setEditCity={setEditCity}
          editCountryCode={editCountryCode}
          setEditCountryCode={setEditCountryCode}
          editDate={editDate}
          setEditDate={setEditDate}
          editTicketUrl={editTicketUrl}
          setEditTicketUrl={setEditTicketUrl}
          handleSave={handleSave}
          handleCancel={() => {
            if (hasChanges) {
              onDirtyChange(true)
              onRequestEdit(null)
              return
            }

            onCancelEdit()
          }}
        />

      ) : (

        <EventCardContent
          event={event}
          showButton={showButton}
          onEdit={() =>
            onRequestEdit(
              event._id
            )
          }
          onDelete={onDelete}
        />

      )}

    </Box>

  )

}