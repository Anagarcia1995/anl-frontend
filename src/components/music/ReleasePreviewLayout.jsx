import { useState } from "react"

import {
  Box,
  Flex,
  Icon,
  Image,
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

  const releaseContent = isEditing ? (
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
  ) : (
    <ReleaseInfo release={release} />
  )

  return (
    <>
      {/* MOBILE */}

      <Flex
        display={{ base: "flex", md: "none" }}
        direction="column"
        gap={6}
        mb={10}
      >
        <Box
          maxW="350px"
          w="100%"
          mx="auto"
        >
          <Icon
            as={FaArrowLeft}
            boxSize={6}
            mb={6}
            cursor="pointer"
            display="block"
            onClick={() => navigate("/music")}
          />

          <Image
            src={release.coverImage}
            alt={release.title}
            w="100%"
            aspectRatio={1}
            objectFit="cover"
            boxShadow="2xl"
          />
        </Box>

        <Box px={3}>
          {releaseContent}

          <Box mt={6}>
            <ReleaseActions
              release={release}
              isEditing={isEditing}
              loadRelease={loadRelease}
              setIsEditing={setIsEditing}
              onDelete={onDelete}
            />
          </Box>
        </Box>
      </Flex>

      {/* TABLET + DESKTOP */}

<Flex
  display={{ base: "none", md: "flex" }}
  gap={12}
  align="flex-end"
  justify="center"
  maxW="1280px"
  mx="auto"
  mb={16}
>
        <Box
          w={{
            md: "330px",
            xl: "30%",
          }}
          minW={{
            md: "260px",
            xl: "390px",
          }}
        >
          <Image
            src={release.coverImage}
            alt={release.title}
            w="100%"
            aspectRatio={1}
            objectFit="cover"
            boxShadow="2xl"
          />
        </Box>

        <Box
          flex="1"
          maxW="420px"
        >
          {releaseContent}
        </Box>

        <Box flex="0 0 20px">
          <ReleaseActions
            release={release}
            isEditing={isEditing}
            loadRelease={loadRelease}
            setIsEditing={setIsEditing}
            onDelete={onDelete}
          />
        </Box>
      </Flex>

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