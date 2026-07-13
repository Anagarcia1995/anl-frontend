export const getDefaultDate = () => {
  const now = new Date()

  const currentYear =
    now.getMonth() === 11
      ? now.getFullYear() + 1
      : now.getFullYear()

  return `DD/MM/${currentYear}`
}

export const formatDateForApi = (date) => {
  const [day, month, year] = date.split("/")

  return `${year}-${month}-${day}`
}

export const formatDateForInput = (dateString) => {
  if (!dateString) return ""

  const date = new Date(dateString)

  const day = String(
    date.getDate()
  ).padStart(2, "0")

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0")

  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export const formatDateForPreview = (dateString) => {
  if (!dateString) return ""

  const date = new Date(dateString)

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}