import { hasUnsavedChanges } from "./hasUnsavedChanges"

export const hasUnsavedReleaseChanges = (
  initialData,
  currentData
) => {
  return hasUnsavedChanges(
    initialData,
    currentData
  )
}