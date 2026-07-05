export const getDefaultEventDate = () => {
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