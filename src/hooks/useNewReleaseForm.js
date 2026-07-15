import { useState } from "react"
import { getDefaultDate } from "../utils/date"


export default function useNewReleaseForm() {

  const defaultDate = getDefaultDate()

  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [label, setLabel] = useState("")
  const [releaseDate, setReleaseDate] = useState(defaultDate)
  const [spotify, setSpotify] = useState("")
  const [appleMusic, setAppleMusic] = useState("")
  const [soundcloud, setSoundcloud] = useState("")
  const [youtube, setYoutube] = useState("")
  const [beatport, setBeatport] = useState("")
  const [coverImage, setCoverImage] = useState(null)


  const resetNewReleaseForm = () => {
    setTitle("")
    setArtist("")
    setLabel("")
    setReleaseDate(defaultDate)
    setSpotify("")
    setAppleMusic("")
    setSoundcloud("")
    setYoutube("")
    setBeatport("")
    setCoverImage(null)
  }

const hasNewReleaseChanges = Boolean(
  title.trim() ||
  artist.trim() ||
  label.trim() ||
  releaseDate !== defaultDate ||
  spotify.trim() ||
  appleMusic.trim() ||
  soundcloud.trim() ||
  youtube.trim() ||
  beatport.trim() ||
  coverImage
)

  return {
    title,
    setTitle,
    artist,
    setArtist,
    label,
    setLabel,
    releaseDate,
    setReleaseDate,
    defaultDate,
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
  }
}