import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"

import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube
} from "react-icons/fa"

import { SiBeatport } from "react-icons/si"
import { useRef, useState } from "react"


import FormInput from "../EventForm/FormInput"
import EventFormActions from "../EventForm/EventFormActions"
import DateInput from "../EventForm/DateInput"

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
}) 
{
  const [coverPreview, setCoverPreview] = useState(null)
  const fileInputRef = useRef(null)

  return (
<Box
  maxW="1400px"
  mx="auto"
  px={{ base: 0, lg: 8 }}
  mb="40px"
>
<SimpleGrid
  columns={{ base: 2, lg: 3 }}
  spacing={{ base: 4, lg: 10 }}
templateColumns={{
  base: "1fr 1fr",
  lg: "260px 1fr 1fr",
}}
  alignItems="start"
>
  {/* COVER */}

{/* COVER */}

<Box display={{ base: "none", lg: "block" }}>
  <Box
    w="90%"
    mx="auto"
    aspectRatio={1}
    border="1px solid"
    borderColor="whiteAlpha.300"
    display="flex"
    alignItems="center"
    justifyContent="center"
    overflow="hidden"

  cursor="pointer"
  transition="all .2s ease"
  _hover={{
    opacity: 0.8,
  }}
    
onClick={() => {
  fileInputRef.current?.click()
}}

  >
    {coverPreview ? (
      <Image
        src={coverPreview}
        alt="Cover preview"
        w="100%"
        h="100%"
        objectFit="cover"
      />
    ) : (
      <Text
        color="gray.500"
        letterSpacing="2px"
        textTransform="uppercase"
        fontSize="sm"
        
      >
        COVER PREVIEW
      </Text>
    )}
  </Box>
</Box>

  {/* INFO */}

<Box
  mt={{ base: 0, lg: 0 }}
  px={{ base: 2, lg: 0 }}
>
    <Flex mb={4}>
      <Box flex={1}>
        <FormInput
          placeholder="Title"
          value={title}
onChange={(e) =>
  setTitle(
    e.target.value.replace(
      /\b\w/g,
      (char) => char.toUpperCase()
    )
  )
}
        />
      </Box>
    </Flex>

    <Flex mb={4}>
      <Box flex={1}>
        <FormInput
          placeholder="Artist"
          value={artist}
onChange={(e) =>
  setArtist(
    e.target.value.toUpperCase()
  )
}
        />
      </Box>
    </Flex>

    <Flex mb={4}>
      <Box flex={1}>
        <FormInput
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </Box>
    </Flex>

    <Flex mb={4}>
      <Box flex={1}>
<DateInput
    date={releaseDate}
    setDate={setReleaseDate}
/>
      </Box>
    </Flex>

    <Input
      ref={fileInputRef}
      type="file"
      accept="image/*"
      borderRadius="0"
      bg="transparent"
      borderColor="whiteAlpha.400"
      onChange={(e) => {
        const file = e.target.files[0]

        if (!file) return

        setCoverImage(file)
        setCoverPreview(URL.createObjectURL(file))
      }}
    />
  </Box>

  {/* PLATFORMS */}

  <Box px={{ base: 0, lg: 0 }}>
    <Flex align="center" gap={3} mb={4}>
      <Icon as={FaSpotify} />
      <Box flex={1}>
        <FormInput
          placeholder="Spotify"
          value={spotify}
          onChange={(e) => setSpotify(e.target.value)}
        />
      </Box>
    </Flex>

    <Flex align="center" gap={3} mb={4}>
      <Icon as={FaApple} />
      <Box flex={1}>
        <FormInput
          placeholder="Apple Music"
          value={appleMusic}
          onChange={(e) => setAppleMusic(e.target.value)}
        />
      </Box>
    </Flex>

    <Flex align="center" gap={3} mb={4}>
      <Icon as={FaSoundcloud} />
      <Box flex={1}>
        <FormInput
          placeholder="SoundCloud"
          value={soundcloud}
          onChange={(e) => setSoundcloud(e.target.value)}
        />
      </Box>
    </Flex>

    <Flex align="center" gap={3} mb={4}>
      <Icon as={FaYoutube} />
      <Box flex={1}>
        <FormInput
          placeholder="YouTube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
      </Box>
    </Flex>

    <Flex align="center" gap={3}>
      <Icon as={SiBeatport} />
      <Box flex={1}>
        <FormInput
          placeholder="Beatport"
          value={beatport}
          onChange={(e) => setBeatport(e.target.value)}
        />
      </Box>
    </Flex>
  </Box>
</SimpleGrid>

      <EventFormActions
        onSave={handleSaveRelease}
        onCancel={onCancel}
      />
    </Box>
  )
}