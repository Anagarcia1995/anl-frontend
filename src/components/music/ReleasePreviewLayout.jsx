
import { useState } from "react"

import {
  Box,
  Flex,
  Icon,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react"

import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import ReleaseActions from "./ReleaseActions"
import ReleaseEditForm from "./ReleaseEditForm"
import ReleaseInfo from "./ReleaseInfo"
import UnsavedChangesModal from "../UnsavedChangesModal"

export default function ReleaseHero({
  release,
  isEditing,
  editTitle,
  setEditTitle,
  editArtist,
  setEditArtist,
  editLabel,
  setEditLabel,
  editReleaseDate,
  setEditReleaseDate,
  editSpotify,
  setEditSpotify,
  editAppleMusic,
  setEditAppleMusic,
  editSoundcloud,
  setEditSoundcloud,
  editYoutube,
  setEditYoutube,
  editBeatport,
  setEditBeatport,
  setEditCoverImage,
  handleUpdateRelease,
  resetEditor,
  setIsEditing,
  loadRelease,
  onDelete,
  hasChanges,
}) {
  const navigate = useNavigate()

  const [showUnsavedModal, setShowUnsavedModal] =
    useState(false)

  const handleCancelEdit = () => {
    if (hasChanges) {
      setShowUnsavedModal(true)
      return
    }

    resetEditor()
    setIsEditing(false)
  }

  const actions = (
    <ReleaseActions
      release={release}
      isEditing={isEditing}
      loadRelease={loadRelease}
      setIsEditing={setIsEditing}
      onDelete={onDelete}
    />
  )

  const editForm = (
    <ReleaseEditForm
      editTitle={editTitle}
      setEditTitle={setEditTitle}
      editArtist={editArtist}
      setEditArtist={setEditArtist}
      editLabel={editLabel}
      setEditLabel={setEditLabel}
      editReleaseDate={editReleaseDate}
      setEditReleaseDate={setEditReleaseDate}
      editSpotify={editSpotify}
      setEditSpotify={setEditSpotify}
      editAppleMusic={editAppleMusic}
      setEditAppleMusic={setEditAppleMusic}
      editSoundcloud={editSoundcloud}
      setEditSoundcloud={setEditSoundcloud}
      editYoutube={editYoutube}
      setEditYoutube={setEditYoutube}
      editBeatport={editBeatport}
      setEditBeatport={setEditBeatport}
      setEditCoverImage={setEditCoverImage}
      handleSave={handleUpdateRelease}
      handleCancel={handleCancelEdit}
    />
  )

  return (
    <>
      <Box
        w="100%"
        maxW="950px"
        mx="auto"
        mb={{ base: 10, md: 20 }}
      >
        {/* BACK */}
        <Flex
          justify="flex-end"
          mb={{ base: 2, md: 0 }}
          h={{ base: "auto", md: 0 }}
          position="relative"
          zIndex={2}
        >
          <Icon
            as={FaArrowLeft}
            boxSize={6}
            cursor="pointer"
            transition="all .2s ease"
            _hover={{
              color: "gray.500",
              transform: "scale(1.2)",
            }}
            onClick={() => navigate("/music")}
          />
        </Flex>

        {isEditing ? (
          /* EDIT MODE — PRESERVED */
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 10 }}
            align="flex-start"
          >
            <Box
              w={{ base: "100%", md: "350px" }}
              maxW="350px"
              mx={{ base: "auto", md: 0 }}
              flexShrink={0}
            >
              <Image
                src={release.coverImage}
                alt={release.title}
                w="100%"
                aspectRatio={1}
                objectFit="cover"
              />
            </Box>

            <Box flex="1" minW={0} w="100%">
              {editForm}

              <Flex justify="flex-end" mt={5}>
                {actions}
              </Flex>
            </Box>
          </Flex>
        ) : (
          /* EDITORIAL RELEASE PREVIEW */
          <Box w="100%">
            {/* TITLE */}
            <Heading
              as="h1"
              maxW="650px"
              fontSize={{
                base: "30px",
                md: "52px",
                xl: "60px",
              }}
              fontWeight="700"
              lineHeight="0.90"
              letterSpacing="-2px"
              overflowWrap="anywhere"
            >
              {release.title}
            </Heading>

            {/* ARTIST — RIGHT ALIGNED */}
            <Text
              mt={{ base: 3, md: 1 }}
              mb={{ base: 2, md: 1 }}
              w="100%"
              textAlign="right"
              color="white"
              fontSize={{ base: "13px", md: "20px" }}
              fontWeight="500"
              letterSpacing="2px"
              textTransform="uppercase"
            >
              {release.artist}
            </Text>

            {/* COVER + INFO */}
            <Flex
              direction={{ base: "column", md: "row" }}
              align="stretch"
              gap={{ base: 6, md: 7, xl: 9 }}
              minW={0}
            >
              {/* COVER */}
              <Box
                w={{ base: "100%", md: "350px" }}
                maxW={{ base: "350px", md: "350px" }}
                mx={{ base: "auto", md: 0 }}
                flexShrink={0}
                position="relative"
                aspectRatio={1}
                overflow="hidden"
              >
                <Image
                  src={release.coverImage}
                  alt={release.title}
                  position="absolute"
                  inset={0}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  display="block"
                />
              </Box>

              {/* INFO */}
              <Box
                flex="1"
                minW={0}
                alignSelf="stretch"
              >
                <ReleaseInfo
                  release={release}
                  actions={actions}
                />
              </Box>
            </Flex>
          </Box>
        )}
      </Box>

      {/* UNSAVED CHANGES MODAL */}
      {showUnsavedModal && (
        <UnsavedChangesModal
          title="Discard changes?"
          onCancel={() => setShowUnsavedModal(false)}
          onConfirm={() => {
            setShowUnsavedModal(false)
            resetEditor()
            setIsEditing(false)
          }}
        />
      )}
    </>
  )
}
