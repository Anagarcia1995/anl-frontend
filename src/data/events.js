export const getNextDates = (events) => {
  const now = new Date()

  return events
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}

export const getOldDates = (events) => {
  const now = new Date()

  return events
    .filter(e => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}