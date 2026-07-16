import { Button } from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi"

import ReleaseForm from "./ReleaseForm"
import UnsavedChangesModal from "../UnsavedChangesModal"

export default function MusicAdminSection({
  isAdmin,
  showForm,
  setShowForm,
  hasNewReleaseChanges,
  showUnsavedModal,
  setShowUnsavedModal,
  resetNewReleaseForm,
  handleSaveRelease,

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
}) {
  if (!isAdmin) return null

  return (
    <>
      {!showForm ? (
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
      ) : (
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
    </>
  )
}