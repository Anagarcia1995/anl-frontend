import {
  API_URL,
  getAuthHeaders,
  getJsonAuthHeaders
} from "./api"

export const fetchEvents = async () => {
  try {
    const response = await fetch(`${API_URL}/api/events/upcoming`)
    const result = await response.json()

    return result.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const createEvent = async (eventData) => {
  const response = await fetch(`${API_URL}/api/events`, {
    method: "POST",
    headers: getJsonAuthHeaders(),
    body: JSON.stringify(eventData)
  })

  const result = await response.json()

  return result.data
}

export const updateEvent = async (id, eventData) => {
  const response = await fetch(`${API_URL}/api/events/${id}`, {
    method: "PUT",
    headers: getJsonAuthHeaders(),
    body: JSON.stringify(eventData)
  })

  const result = await response.json()

  return result.data
}

export const deleteEvent = async (id) => {
  const response = await fetch(`${API_URL}/api/events/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  })

  const result = await response.json()

  return result.data
}