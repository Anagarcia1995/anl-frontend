import {
  Button,
  Flex,
  Icon,
  Link,
} from "@chakra-ui/react"

import { FaArrowLeft } from "react-icons/fa"
import { SiBeatport } from "react-icons/si"
import { useNavigate } from "react-router-dom"

import ReleaseAdminActions from "./ReleaseAdminActions"

export default function ReleaseActions({
  release,
  isEditing,
  loadRelease,
  setIsEditing,
  onDelete,
}) {
  const navigate = useNavigate()

  return (
    <Flex
      w={{ base: "100%", lg: "20%" }}
      minH={{ base: "auto", lg: "450px" }}
      direction="column"
      align={{ base: "stretch", lg: "flex-end" }}
      justify={{ base: "flex-start", lg: "space-between" }}
    >
      {/* BACK */}

      <Icon
        as={FaArrowLeft}
        boxSize={6}
        cursor="pointer"
        alignSelf={{ base: "flex-start", lg: "flex-end" }}
        display={{ base: "none", lg: "block" }}
        transition="all .2s ease"
        _hover={{
          color: "gray.500",
          transform: "scale(1.25)",
        }}
        onClick={() => navigate("/music")}
      />

      {/* ACTIONS */}

      <Flex
        direction={{
          base: "column",
          lg: "column",
          xl: "row",
        }}
        align="flex-end"
        gap={4}
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
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              bg="black"
              color="white"
              borderRadius="0"
              border="1px solid white"
              letterSpacing="2px"
              fontSize={{ base: "xs", lg: "sm" }}
              rightIcon={<SiBeatport />}
              w={{ base: "170px", lg: "auto" }}
              px={{ base: 0, lg: 8 }}
              h={{ base: "48px", lg: "45px" }}
              transition="all .2s ease"
              _hover={{
                bg: "white",
                color: "black",
                transform: "scale(1.08)",
              }}
            >
              BUY ON
            </Button>
          </Link>
        )}
      </Flex>
    </Flex>
  )
}