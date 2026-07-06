import {
  Box,
  Input,
  SimpleGrid
} from "@chakra-ui/react"

import FormInput from "../EventForm/FormInput"
import EventFormActions from "../EventForm/EventFormActions"

export default function ReleaseForm({
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
  setCoverImage,
  handleSaveRelease,
  onCancel
}) {
  return (
    <Box mb={8}>
      <SimpleGrid
        columns={2}
        spacing={2}
        mb={4}
      >
        <FormInput
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <FormInput
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <FormInput
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />

        <FormInput
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />

        <FormInput
          placeholder="Spotify URL"
          value={spotify}
          onChange={(e) => setSpotify(e.target.value)}
        />

        <FormInput
          placeholder="Apple Music URL"
          value={appleMusic}
          onChange={(e) => setAppleMusic(e.target.value)}
        />

        <FormInput
          placeholder="SoundCloud URL"
          value={soundcloud}
          onChange={(e) => setSoundcloud(e.target.value)}
        />

        <FormInput
          placeholder="YouTube URL"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <FormInput
          placeholder="Beatport URL"
          value={beatport}
          onChange={(e) => setBeatport(e.target.value)}
        />
      </SimpleGrid>

      <Input
        mb={4}
        type="file"
        accept="image/*"
        onChange={(e) => setCoverImage(e.target.files[0])}
      />

      <EventFormActions
        onSave={handleSaveRelease}
        onCancel={onCancel}
      />
    </Box>
  )
}