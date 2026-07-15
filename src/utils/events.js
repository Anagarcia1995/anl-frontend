export const getUpcomingEvents = (events) => {
  const now = new Date()

  return events
    .filter(e => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}

export const getPastEvents = (events) => {
  const now = new Date()

  return events
    .filter(e => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const groupEventsByMonth = (events) => {
  const grouped = {}

  events.forEach((event) => {
    const date = new Date(event.date)

    const month = date
      .toLocaleDateString("en-US", {
        month: "short",
      })
      .toUpperCase()

    const year = date.getFullYear()

    const key = `${month} ${year}`

    if (!grouped[key]) {
      grouped[key] = []
    }

    grouped[key].push(event)
  })

  return grouped
}