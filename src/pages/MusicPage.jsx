import ReleaseForm from "../components/music/ReleaseForm"
import ReleasesSection from "../components/music/ReleasesSection"
import { useState } from "react"
import useReleasesData from "../hooks/useReleasesData"
import { createRelease } from "../services/releaseService"
import { formatDateForApi } from "../utils/date"
import { validateRequiredFields } from "../utils/validateRequiredFields"
import { FiPlus } from "react-icons/fi"
import { useAuth } from "../context/AuthContext"
import { useToast } from "@chakra-ui/react"
import { showToast } from "../utils/showToast"
import useNewReleaseForm from "../hooks/useNewReleaseForm"
import UnsavedChangesModal from "../components/UnsavedChangesModal"

import {
  getActionMessage,
  getRequiredFieldsMessage,
  getRequiredMessage
} from "../utils/messages"

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react"

export default function MusicPage() {

  const { isAdmin } = useAuth()
  const toast = useToast()
  const [showForm, setShowForm] = useState(false)
  const [showUnsavedModal, setShowUnsavedModal] = useState(false)

  const {
    releases,
    loadReleases,
  } = useReleasesData()

  const {
    title,
    setTitle,
    artist,
    setArtist,
    label,
    setLabel,
    releaseDate,
    setReleaseDate,
    spotify,
    setSpotify,
    appleMusic,
    setAppleMusic,
    soundcloud,
    setSoundcloud,
    youtube,
    setYoutube,
    beatport,
    setBeatport,
    coverImage,
    setCoverImage,
    resetNewReleaseForm,
    hasNewReleaseChanges,
  } = useNewReleaseForm()

  const handleSaveRelease = async () => {
  try {

    
const missingFields = validateRequiredFields([
  {
    label: "Title",
    value: title,
  },
  {
    label: "Artist",
    value: artist,
  },
  {
    label: "Label",
    value: label,
  },
  {
    label: "Beatport link",
    value: beatport,
  },
  {
    label: "Cover image",
    value: coverImage,
  },
])

if (missingFields.length > 1) {
  showToast(
    toast,
    getRequiredFieldsMessage()
  )
  return
}

if (missingFields.length === 1) {
  showToast(
    toast,
    getRequiredMessage(missingFields[0])
  )
  return
}

    const formData = new FormData()

    formData.append("title", title)
    formData.append("artist", artist)
    formData.append("label", label)
formData.append(
  "releaseDate",
  formatDateForApi(releaseDate)
)
    formData.append("spotify", spotify)
    formData.append("appleMusic", appleMusic)
    formData.append("soundcloud", soundcloud)
    formData.append("youtube", youtube)
    formData.append("beatport", beatport)

    if (coverImage) {
      formData.append("coverImage", coverImage)
    }

await createRelease(formData)

await loadReleases()

showToast(
  toast,
  getActionMessage(
    "Release",
    "created"
  )
)

resetNewReleaseForm()
setShowForm(false)
  } catch (error) {
    console.error(error)
  }
}

  return (
    <Box
  mt={0}
  px={{ base: 6, lg: 10 }}
  pt={{ base: 8, lg: 12 }}
  pb={{ base: 5, lg: 10 }}
  
>

{/* MUSIC HEADER */}

<Box mb={{ base: 6, lg: 12 }}>
  {/* TITLE */}

  <Heading
    fontFamily="'Bebas Neue', sans-serif"
    fontSize={{
      base: "3xl",
      lg: "8xl",
    }}
    fontWeight="400"
    lineHeight="0.8"
    letterSpacing="2px"
    mb={{
      base: 3,
      lg: 5,
    }}
  >
    MUSIC
  </Heading>

  {/* MOBILE + DESKTOP INFO */}

  <Flex
    direction={{
      base: "column",
      lg: "row",
    }}
    align={{
      base: "stretch",
      lg: "center",
    }}
    gap={{
      base: 2,
      lg: 6,
    }}
  >
    <Text
      color="gray.400"
      fontSize={{
        base: "12px",
        lg: "sm",
      }}
      letterSpacing={{
        base: "1.3px",
        lg: "4px",
      }}
      textTransform="uppercase"
      whiteSpace="nowrap"
    >
      Originals · Remixes · Collaborations
    </Text>

    <Flex
      flex="1"
      align="center"
      gap={{
        base: 3,
        lg: 6,
      }}
    >
      <Box
        flex="1"
        h="1px"
        bg="whiteAlpha.400"
      />

      <Text
        color="gray.400"
        fontSize={{
          base: "12px",
          lg: "sm",
        }}
        letterSpacing={{
          base: "1.5px",
          lg: "3px",
        }}
        textTransform="uppercase"
        whiteSpace="nowrap"
      >
        {String(releases.length).padStart(2, "0")} Releases
      </Text>
    </Flex>
  </Flex>
</Box>

{isAdmin && !showForm && (
  <Button
  w="100%"
  h="32px"
  mb={6}
  variant="outline"
  borderColor="gray.400"
  color="white"
  borderRadius="0"
  transition="all .2s ease"
  _hover={{
    bg: "white",
    color: "black",
  }}
    onClick={() => setShowForm(true)}
  >
    <FiPlus size={23} />
  </Button>
)}

{isAdmin && showForm && (
  <ReleaseForm
    title={title}
    setTitle={setTitle}
    artist={artist}
    setArtist={setArtist}
    label={label}
    setLabel={setLabel}
    releaseDate={releaseDate}
    setReleaseDate={setReleaseDate}
    spotify={spotify}
    setSpotify={setSpotify}
    appleMusic={appleMusic}
    setAppleMusic={setAppleMusic}
    soundcloud={soundcloud}
    setSoundcloud={setSoundcloud}
    youtube={youtube}
    setYoutube={setYoutube}
    beatport={beatport}
    setBeatport={setBeatport}
    setCoverImage={setCoverImage}
    handleSaveRelease={handleSaveRelease}
onCancel={() => {
  if (hasNewReleaseChanges) {
    setShowUnsavedModal(true)
    return
  }

  resetNewReleaseForm()
  setShowForm(false)
}}
  />
)}

{showUnsavedModal && (
  <UnsavedChangesModal
    title="Unsaved changes"
    description="You have unsaved changes. Do you want to discard them?"
    onCancel={() => setShowUnsavedModal(false)}
    onConfirm={() => {
      setShowUnsavedModal(false)
      resetNewReleaseForm()
      setShowForm(false)
    }}
  />
)}

<ReleasesSection releases={releases} />

    </Box>
  )

  
}

