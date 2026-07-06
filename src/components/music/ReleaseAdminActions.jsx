import { Flex, Icon } from "@chakra-ui/react"

import { FiEdit2, FiTrash2 } from "react-icons/fi"

import { useAuth } from "../../context/AuthContext"

export default function ReleaseAdminActions({
  onEdit,
  onDelete
}) {
  const { isAdmin } = useAuth()

  if (!isAdmin) return null

  return (
    <Flex
      mt={3}
      gap={4}
      color="white"
      fontSize="18px"
    >
      <Icon
        as={FiEdit2}
        cursor="pointer"
        transition="all .2s ease"
        _hover={{
          color: "white",
          transform: "scale(1.15)"
        }}
        onClick={(e) => {
          e.stopPropagation()
          onEdit?.()
        }}
      />

      <Icon
        as={FiTrash2}
        cursor="pointer"
        transition="all .2s ease"
        _hover={{
          color: "white",
          transform: "scale(1.15)"
        }}
        onClick={(e) => {
          e.stopPropagation()
          onDelete?.()
        }}
      />
    </Flex>
  )
}