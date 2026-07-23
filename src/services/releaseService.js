import {
  API_URL,
  getAuthHeaders,
} from "./api"

export const fetchReleases = async () => {
  try {
    const response = await fetch(`${API_URL}/api/releases`)
    const result = await response.json()

    return result.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const fetchReleaseById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/releases/${id}`)
    const result = await response.json()

    return result.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const createRelease = async (formData) => {
  const response = await fetch(`${API_URL}/api/releases`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: formData,
  })

  const result = await response.json()

  return result.data
}

export const updateRelease = async (id, formData) => {
  const response = await fetch(`${API_URL}/api/releases/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: formData,
  })

  return await response.json()
}

export const toggleReleasePin = async (
  id,
  pinned,
  pinOrder
) => {
  const response = await fetch(
    `${API_URL}/api/releases/${id}`,
    {
      method: "PUT",
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pinned,
        pinOrder,
      }),
    }
  )

  return await response.json()
}

export const deleteRelease = async (id) => {
  const response = await fetch(`${API_URL}/api/releases/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  })

  return await response.json()
}