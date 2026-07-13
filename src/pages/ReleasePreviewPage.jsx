import {
  Box,
  Divider,
  Heading,
} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"

import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { formatDateForApi } from "../utils/date"
import { useState } from "react"
import { showToast } from "../utils/showToast"
import { getActionMessage } from "../utils/messages"

import {
  fetchReleaseById,
  updateRelease,
  deleteRelease
} from "../services/releaseService"

import ReleasesSection from "../components/music/ReleasesSection"
import ReleaseHero from "../components/music/ReleaseHero"
import useReleaseEditor from "../hooks/useReleaseEditor"

export default function ReleasePreview() {

  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()



const [release, setRelease] = useState(null)

const [isEditing, setIsEditing] = useState(false)

const {
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
  editCoverImage,
  setEditCoverImage,
  loadRelease,
  resetEditor,
} = useReleaseEditor()

useEffect(() => {
  const loadCurrentRelease = async () => {
    const data = await fetchReleaseById(id)
    setRelease(data)

loadRelease(data)
setIsEditing(false)

  }

  loadCurrentRelease()

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}, [id])

const handleUpdateRelease = async () => {
  try {
    const formData = new FormData()

    formData.append("title", editTitle)
    formData.append("artist", editArtist)
    formData.append("label", editLabel)
formData.append(
  "releaseDate",
  formatDateForApi(editReleaseDate)
)
    formData.append("spotify", editSpotify)
    formData.append("appleMusic", editAppleMusic)
    formData.append("soundcloud", editSoundcloud)
    formData.append("youtube", editYoutube)
    formData.append("beatport", editBeatport)

    if (editCoverImage) {
      formData.append("coverImage", editCoverImage)
    }

await updateRelease(id, formData)

const updated = await fetchReleaseById(id)

setRelease(updated)

loadRelease(updated)

setIsEditing(false)

showToast(
  toast,
  getActionMessage(
    "Release",
    "updated"
  )
)

  } catch (error) {
    console.error(error)
  }
}

const handleDeleteRelease = async () => {
  try {
await deleteRelease(id)

showToast(
  toast,
  getActionMessage(
    "Release",
    "deleted"
  )
)

setTimeout(() => {
  navigate("/music")
}, 1300)
  } catch (error) {
    console.error(error)
  }
}

if (!release) {
  return (
    <Box p={10}>
      Loading...
    </Box>
  )
}

  return (

    <Box
      maxW="1450px"
      mx="auto"
      px={10}
      py={{ base: 5, lg: 16 }}
      pb={{ base: 5, lg: 10 }}
    >

      {/* ---------- HERO ---------- */}
<ReleaseHero
  release={release}
  isEditing={isEditing}
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
  handleUpdateRelease={handleUpdateRelease}
  resetEditor={resetEditor}
  setIsEditing={setIsEditing}
  loadRelease={loadRelease}
  onDelete={handleDeleteRelease}
/>

      {/* ---------- DIVIDER ---------- */}

<Divider
  borderColor="gray.700"
  mb={5}
/>

<Heading
  fontSize={{
    base: "15px",
    lg: "md"
  }}
  fontWeight="500"
  letterSpacing={{
    base: "3px",
    lg: "2px"
  }}
  mb={{
    base: 4,
    lg: 5
  }}
>
  MORE RELEASES
</Heading>

<Divider
  borderColor="gray.700"
  mb={10}
/>

      <ReleasesSection excludeId={release._id} />

    </Box>

  )

}