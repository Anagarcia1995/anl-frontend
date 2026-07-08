import { useState } from "react"
import { getDefaultDate } from "../utils/date"


export default function useNewReleaseForm() {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [label, setLabel] = useState("")
  const [releaseDate, setReleaseDate] = useState(getDefaultDate())
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
    setReleaseDate(getDefaultDate())
    setSpotify("")
    setAppleMusic("")
    setSoundcloud("")
    setYoutube("")
    setBeatport("")
    setCoverImage(null)
  }

  const hasNewReleaseChanges =
    title ||
    artist ||
    label ||
    releaseDate ||
    spotify ||
    appleMusic ||
    soundcloud ||
    youtube ||
    beatport ||
    coverImage

  return {
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
  }
}