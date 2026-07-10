import {
  Box,
  Flex,
  Icon,
  Input,
  SimpleGrid, 
} from "@chakra-ui/react"

import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube
} from "react-icons/fa"

import { SiBeatport } from "react-icons/si"

import FormInput from "../EventForm/FormInput"
import DateInput from "../EventForm/DateInput"
import EventFormActions from "../EventForm/EventFormActions"

export default function ReleaseEditForm({
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
  handleSave,
  handleCancel,
}) {
  return (
    <Box mt={2}>

      <SimpleGrid
        columns={2}
        spacing={5}
        templateColumns={{ base: "60% 32%", lg: "1fr 1fr" }}
      >

        {/* LEFT */}

        <Box mb={4}>

          <Flex  align="center"
            gap={3}
            mb={4}> 
          <FormInput
            placeholder="Title"
            value={editTitle}
onChange={(e) =>
  setEditTitle(
    e.target.value.replace(
      /\b\w/g,
      (char) => char.toUpperCase()
    )
  )
}
          />
            </Flex>
          <Flex  align="center"
            gap={3}
            mb={4}> 
          <FormInput
            placeholder="Artist"
            value={editArtist}
onChange={(e) =>
  setEditArtist(
    e.target.value.toUpperCase()
  )
}
          />
          </Flex>

          <Flex  align="center"
            gap={3}
            mb={4}> 
          <FormInput
            placeholder="Label"
            value={editLabel}
            onChange={(e) =>
              setEditLabel(e.target.value)
            }
          />
            </Flex>

          <Flex  align="center"
            gap={3}
            mb={4}> 
<DateInput
  date={editReleaseDate}
  setDate={setEditReleaseDate}
/>
            </Flex>

          <Input
            type="file"
            accept="image/*"
            borderRadius="0"
            bg="transparent"
            borderColor="whiteAlpha.400"
            onChange={(e) =>
              setEditCoverImage(
                e.target.files[0]
              )
            }
          />

        </Box>

        {/* RIGHT */}

        <Box>

          <Flex
  align="center"
  gap={3}
  mb={4}
          >
            <Icon as={FaSpotify} />
            <Box flex={1}>
              <FormInput
                placeholder="Spotify"
                value={editSpotify}
                onChange={(e) =>
                  setEditSpotify(e.target.value)
                }
              />
            </Box>
          </Flex>

          <Flex
            align="center"
            gap={3}
            mb={4}
          >
            <Icon as={FaApple} />
            <Box flex={1}>
              <FormInput
                placeholder="Apple Music"
                value={editAppleMusic}
                onChange={(e) =>
                  setEditAppleMusic(e.target.value)
                }
              />
            </Box>
          </Flex>

          <Flex
            align="center"
            gap={3}
            mb={4}
          >
            <Icon as={FaSoundcloud} />
            <Box flex={1}>
              <FormInput
                placeholder="SoundCloud"
                value={editSoundcloud}
                onChange={(e) =>
                  setEditSoundcloud(e.target.value)
                }
              />
            </Box>
          </Flex>

          <Flex
            align="center"
            gap={3}
            mb={4}
          >
            <Icon as={FaYoutube} />
            <Box flex={1}>
              <FormInput
                placeholder="YouTube"
                value={editYoutube}
                onChange={(e) =>
                  setEditYoutube(e.target.value)
                }
              />
            </Box>
          </Flex>

          <Flex
            align="center"
            gap={3}
          >
            <Icon as={SiBeatport} />
            <Box flex={1}>
              <FormInput
                placeholder="Beatport"
                value={editBeatport}
                onChange={(e) =>
                  setEditBeatport(e.target.value)
                }
              />
            </Box>
          </Flex>

        </Box>

      </SimpleGrid>

      <Box mt={2}>
        <EventFormActions
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </Box>

    </Box>
  )
}