export const validateRequiredFields = (fields) => {
  return fields
    .filter((field) => !field.value)
    .map((field) => field.label)
}