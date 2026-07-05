export const hasUnsavedChanges = (
  initialData,
  currentData
) => {
  return JSON.stringify(initialData)
    !== JSON.stringify(currentData)
}