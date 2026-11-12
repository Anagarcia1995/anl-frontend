
import {
  Button,
  Flex,
  Link,
} from "@chakra-ui/react"

import { SiBeatport } from "react-icons/si"

import ReleaseAdminActions from "./ReleaseAdminActions"

export default function ReleaseActions({
  release,
  isEditing,
  loadRelease,
  setIsEditing,
  onDelete,
}) {
  return (
    <Flex
      w="100%"
      align="center"
      justify="flex-end"
      gap={3}
      minW={0}
    >
      <ReleaseAdminActions
        isEditing={isEditing}
        onEdit={() => {
          loadRelease(release)
          setIsEditing(true)
        }}
        onDelete={onDelete}
      />

      {!isEditing && release.beatport && (
        <Link
          href={release.beatport}
          isExternal
          flexShrink={0}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button
            bg="transparent"
            color="white"
            borderRadius="0"
            border="1px solid white"
            letterSpacing="2px"
            fontSize={{ base: "10px", md: "12px" }}
            fontWeight="600"
            rightIcon={<SiBeatport />}
            w={{ base: "120px", md: "155px" }}
            px={3}
            h={{ base: "34px", md: "38px" }}
            transition="all .25s ease"
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            BUY ON
          </Button>
        </Link>
      )}
    </Flex>
  )
}
