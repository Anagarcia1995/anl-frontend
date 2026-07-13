import FormInput from "./FormInput"
import { getDefaultDate } from "../../utils/date"

const editablePositions = [0, 1, 3, 4, 8, 9]
const defaultDate = getDefaultDate()

export default function DateInput({
  date,
  setDate
}) {
  const handleDateMouseDown = (e) => {
    if (date === defaultDate) {
      e.preventDefault()

      requestAnimationFrame(() => {
        e.target.focus()
        e.target.setSelectionRange(0, 0)
      })
    }
  }

  const handleDateKeyDown = (e) => {
    const cursor = e.target.selectionStart

    if (e.key === "Backspace") {
      e.preventDefault()

      const previousPosition = [...editablePositions]
        .reverse()
        .find((position) => position < cursor)

      if (previousPosition === undefined) {
        return
      }

      const newDate = date.split("")

      newDate[previousPosition] =
        previousPosition < 2 ? "D" : "M"

      setDate(newDate.join(""))

      requestAnimationFrame(() => {
        e.target.setSelectionRange(
          previousPosition,
          previousPosition
        )
      })

      return
    }

    if (!/^\d$/.test(e.key)) {
      return
    }

    e.preventDefault()

    if (!editablePositions.includes(cursor)) {
      return
    }

    const newDate = date.split("")
    newDate[cursor] = e.key

    setDate(newDate.join(""))

    const nextPosition =
      editablePositions[
        editablePositions.indexOf(cursor) + 1
      ]

    if (nextPosition !== undefined) {
      requestAnimationFrame(() => {
        e.target.setSelectionRange(
          nextPosition,
          nextPosition
        )
      })
    }
  }

  return (
    <FormInput
      placeholder="DD/MM/YYYY"
      value={date}
      onChange={() => {}}
      onMouseDown={handleDateMouseDown}
      onKeyDown={handleDateKeyDown}
    />
  )
}