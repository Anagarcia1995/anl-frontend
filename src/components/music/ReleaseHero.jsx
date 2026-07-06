import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

import { FaArrowLeft } from "react-icons/fa"
import { SiBeatport } from "react-icons/si"

import { API_URL } from "../../services/api"

import ReleaseInfo from "./ReleaseInfo"
import ReleaseEditForm from "./ReleaseEditForm"
import ReleaseAdminActions from "./ReleaseAdminActions"

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

      <Flex
        w={{ base: "100%", lg: "20%" }}
        minH={{ base: "auto", lg: "390px" }}
        direction="column"
        align={{ base: "stretch", lg: "flex-end" }}
        justify={{ base: "flex-start", lg: "space-between" }}
      >
        <Icon
          as={FaArrowLeft}
          boxSize={6}
          cursor="pointer"
          alignSelf={{ base: "flex-start", lg: "flex-end" }}
          display={{ base: "none", lg: "block" }}
          onClick={() => navigate("/music")}
          transition="all .2s ease"
          _hover={{
            color: "gray.500",
            transform: "scale(1.25)",
          }}
        />

        <ReleaseAdminActions
          onEdit={() => {
            loadRelease(release)
            setIsEditing(true)
          }}
          onDelete={() => {}}
        />

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
          alignSelf={{ base: "center", lg: "flex-end" }}
          transition="all .2s ease"
          _hover={{
            bg: "white",
            color: "black",
            transform: "scale(1.08)",
          }}
        >
          BUY ON
        </Button>
      </Flex>

    </Flex>
  )
}