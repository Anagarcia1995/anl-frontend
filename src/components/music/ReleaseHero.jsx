import {
  Box,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

import { FaArrowLeft } from "react-icons/fa"

import { API_URL } from "../../services/api"

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
}) {
  const navigate = useNavigate()

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={{ base: 4, lg: 16 }}
      align={{ base: "stretch", lg: "flex-end" }}
      mb={{ base: 10, lg: 16 }}
    >

      {/* COVER */}

      <Box
        w={{ base: "100%", lg: "30%" }}
      >
        <Icon
          as={FaArrowLeft}
          display={{ base: "block", lg: "none" }}
          boxSize={6}
          mb={6}
          cursor="pointer"
          onClick={() => navigate("/music")}
          transition="all .2s ease"
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

      {/* INFO */}

      <Flex
        w={{ base: "100%", lg: "45%" }}
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
              resetEditor()
              setIsEditing(false)
            }}
          />
        ) : (
          <ReleaseInfo release={release} />
        )}
      </Flex>

      {/* ACTIONS */}

<ReleaseActions
  release={release}
  isEditing={isEditing}
  loadRelease={loadRelease}
  setIsEditing={setIsEditing}
  onDelete={onDelete}
/>

      </Flex>
  )
}