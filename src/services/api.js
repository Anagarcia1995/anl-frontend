export const API_URL = "http://localhost:3000"

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`
})

export const getJsonAuthHeaders = () => ({
  "Content-Type": "application/json",
  ...getAuthHeaders()
})