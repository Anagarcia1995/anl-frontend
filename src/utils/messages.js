export const getActionMessage = (entity, action) => {
  return `${entity} ${action}`
}

export const getRequiredMessage = (field) => {
  return `${field} is required`
}

export const getRequiredFieldsMessage = () => {
  return "Please complete all required fields"
}

export const unsavedChangesMessage = {
  title: "Unsaved changes",
  description:
    "You have unsaved changes. Do you want to discard them?",
}