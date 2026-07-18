export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000"

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
})

export const getJsonAuthHeaders = () => ({
  "Content-Type": "application/json",
  ...getAuthHeaders(),
})