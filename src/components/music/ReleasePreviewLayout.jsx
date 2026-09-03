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

  const tabletStyles =
    "@media screen and (min-width: 700px) and (max-width: 1279px)"

  const galaxyStyles =
    "@media screen and (min-width: 700px) and (max-width: 767px)"

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
        display="flex"
        css={{
          "@media (min-width: 700px)": {
            display: "none",
          },
        }}
        direction="column"
        gap={6}
        mb={10}
      >
        <Box
          maxW="350px"
          w="100%"
          mx="auto"
        >
          <Flex
            justify="flex-end"
            mb={8}
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

      {/* TABLET / IPAD — 700px a 1279px */}
      <Box
        display="none"
        sx={{
          [tabletStyles]: {
            display: "block",
          },
        }}
        mb={16}
        maxW="1100px"
        mx="auto"
      >
        {/* BACK */}
        <Flex
          justify="flex-end"
          mb={6}
          px={{
            md: 6,
            lg: 10,
          }}
          sx={{
            [galaxyStyles]: {
              paddingLeft: "20px",
              paddingRight: "20px",
            },
          }}
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

        {/* IMAGEN + INFO */}
        <Flex
          align="stretch"
          justify="center"
          gap={12}
          sx={{
            [galaxyStyles]: {
              gap: "36px",
            },
          }}
        >
          {/* COVER */}
          <Box
            w={{
              md: "330px",
              lg: "360px",
            }}
            minW={{
              md: "260px",
              lg: "320px",
            }}
            sx={{
              [galaxyStyles]: {
                width: "250px",
                minWidth: "250px",
              },
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

          {/* INFO + BUY */}
          <Box
            flex="1"
            maxW="420px"
            minW={0}
            display="flex"
            flexDirection="column"
            sx={{
              [galaxyStyles]: {
                maxWidth: "250px",
              },
            }}
          >
            {/* INFO */}
<Box
  mt={{
    md: 10,
    lg: 0,
  }}
>
  {releaseContent}
</Box>

            {/* BUY ON SE EMPUJA HASTA ABAJO */}
            <Box
              mt="auto"
              w="100%"
            >
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
      </Box>

      {/* DESKTOP — XL + */}
      <Flex
        display={{
          base: "none",
          xl: "flex",
        }}
        gap={12}
        align="flex-end"
        justify="center"
        maxW="1280px"
        mx="auto"
        mb={16}
      >
        {/* COVER */}
        <Box
          w="30%"
          minW="390px"
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

        {/* INFO */}
        <Box
          flex="1"
          maxW="420px"
        >
          {releaseContent}
        </Box>

        {/* ACTIONS */}
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
          onCancel={() =>
            setShowUnsavedModal(false)
          }
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