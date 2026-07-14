import {
  Box,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { API_URL } from "../../services/api"
import { useState } from "react"

import UnsavedChangesModal from "../UnsavedChangesModal"
import ReleaseInfo from "./ReleaseInfo"
import ReleaseEditForm from "./ReleaseEditForm"
import ReleaseActions from "./ReleaseActions"

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
  const [showUnsavedModal, setShowUnsavedModal] = useState(false)

return (
  <>
    {/* MOBILE / TABLET */}

    <Flex
      display={{ base: "flex", lg: "none" }}
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
          onClick={() => navigate("/music")}
        />

        <Image
          src={`${API_URL}${release.coverImage}`}
          alt={release.title}
          w="100%"
          aspectRatio={1}
          objectFit="cover"
          boxShadow="2xl"
        />
      </Box>

      <ReleaseInfo release={release} />

      <ReleaseActions
        release={release}
        isEditing={isEditing}
        loadRelease={loadRelease}
        setIsEditing={setIsEditing}
        onDelete={onDelete}
      />
    </Flex>

    {/* DESKTOP */}

    <Flex
      display={{ base: "none", xl: "flex" }}
      direction="row"
      gap={{
        lg: 10,
        xl: 16,
      }}
      align="flex-end"
      mb={16}
    >
      <Box
        w="30%"
        minW="390px"
      >
        <Image
          src={`${API_URL}${release.coverImage}`}
          alt={release.title}
          w="100%"
          aspectRatio={1}
          objectFit="cover"
          boxShadow="2xl"
        />
      </Box>

      <Flex
        w="45%"
        direction="column"
        justify="space-between"
      >
        {isEditing ? (
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
            handleCancel={() => {
              if (hasChanges) {
                setShowUnsavedModal(true)
                return
              }

              resetEditor()
              setIsEditing(false)
            }}
          />
        ) : (
          <ReleaseInfo release={release} />
        )}
      </Flex>

      <ReleaseActions
        release={release}
        isEditing={isEditing}
        loadRelease={loadRelease}
        setIsEditing={setIsEditing}
        onDelete={onDelete}
      />
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