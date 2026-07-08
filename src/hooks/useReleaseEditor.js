import { useState } from "react"
import { formatDateForInput } from "../utils/date"

export default function useReleaseEditor() {
  const [editTitle, setEditTitle] = useState("")
  const [editArtist, setEditArtist] = useState("")
  const [editLabel, setEditLabel] = useState("")
  const [editReleaseDate, setEditReleaseDate] = useState("")
  const [editSpotify, setEditSpotify] = useState("")
  const [editAppleMusic, setEditAppleMusic] = useState("")
  const [editSoundcloud, setEditSoundcloud] = useState("")
  const [editYoutube, setEditYoutube] = useState("")
  const [editBeatport, setEditBeatport] = useState("")
  const [editCoverImage, setEditCoverImage] = useState(null)

  const loadRelease = (release) => {
    setEditTitle(release.title)
    setEditArtist(release.artist)
    setEditLabel(release.label)
setEditReleaseDate(
  formatDateForInput(release.releaseDate)
)
    setEditSpotify(release.spotify || "")
    setEditAppleMusic(release.appleMusic || "")
    setEditSoundcloud(release.soundcloud || "")
    setEditYoutube(release.youtube || "")
    setEditBeatport(release.beatport || "")
    setEditCoverImage(null)
  }

  const resetEditor = () => {
    setEditTitle("")
    setEditArtist("")
    setEditLabel("")
    setEditReleaseDate("")
    setEditSpotify("")
    setEditAppleMusic("")
    setEditSoundcloud("")
    setEditYoutube("")
    setEditBeatport("")
    setEditCoverImage(null)
  }

  return {
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
  }
}