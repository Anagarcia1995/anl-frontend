import { Input } from "@chakra-ui/react"

export default function FormInput({
  placeholder,
  value,
  onChange,
  type = "text",
  onMouseDown,
  onKeyDown,
  onFocus
}) {
  return (
    <Input
      size="sm"
      bg="transparent"
      color="white"
      border="none"
      borderBottom="1px solid"
      borderColor="whiteAlpha.600"
      borderRadius="0"
      type={type}
      placeholder={placeholder}
      _placeholder={{
        color: "gray.600"
      }}
      _focusVisible={{
        boxShadow: "none",
        borderColor: "white"
      }}
      value={value}
      onChange={onChange}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
    />
  )
}