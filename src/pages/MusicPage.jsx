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
import MusicHeader from "../components/music/MusicHeader"
import { useNavigate } from "react-router-dom"

import {
  getActionMessage,
  getRequiredFieldsMessage,
  getRequiredMessage
} from "../utils/messages"

import {
  Box,
  Button,
} from "@chakra-ui/react"

export default function MusicPage() {

  const { isAdmin } = useAuth()
  const toast = useToast()
  const navigate = useNavigate()
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
    defaultDate,
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


  const handleReleaseClick = (release) => {
  navigate(`/music/${release._id}`)
  }

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
    label: "Release date",
    value: releaseDate !== defaultDate,
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
  px={{ base: 3, lg: 10 }}
  pt={{ base: 5, lg: 12 }}
  pb={{ base: 5, lg: 10 }}
  
>

{/* MUSIC HEADER */}
<MusicHeader
  releaseCount={releases.length}
/>

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
    onCancel={() => setShowUnsavedModal(false)}
    onConfirm={() => {
      setShowUnsavedModal(false)
      resetNewReleaseForm()
      setShowForm(false)
    }}
  />
)}

<ReleasesSection
  releases={releases}
  onReleaseClick={handleReleaseClick}
/>
    </Box>
  )

  
}

