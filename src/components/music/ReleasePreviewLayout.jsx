
import { useState } from "react";

import {
  Box,
  Flex,
  Grid,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";

import ReleaseActions from "./ReleaseActions";
import ReleaseEditForm from "./ReleaseEditForm";
import ReleaseInfo from "./ReleaseInfo";
import UnsavedChangesModal from "../UnsavedChangesModal";
import { formatDateForPreview } from "../../utils/date";

export default function ReleaseHero({
  release,
  isEditing,
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
  handleUpdateRelease,
  resetEditor,
  setIsEditing,
  loadRelease,
  onDelete,
  hasChanges,
}) {
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);

  const handleCancelEdit = () => {
    if (hasChanges) {
      setShowUnsavedModal(true);
      return;
    }

    resetEditor();
    setIsEditing(false);
  };

  const actions = (
    <ReleaseActions
      release={release}
      isEditing={isEditing}
      loadRelease={loadRelease}
      setIsEditing={setIsEditing}
      onDelete={onDelete}
    />
  );

  const editForm = (
    <ReleaseEditForm
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
      handleSave={handleUpdateRelease}
      handleCancel={handleCancelEdit}
    />
  );

  const mobileValueStyles = {
    fontSize: "11px",
    fontWeight: "500",
    lineHeight: "1.35",
    color: "white",
    overflowWrap: "anywhere",
  };

  return (
    <>
      <Box w="100%" maxW="800px" mx="auto">
        {isEditing ? (
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 10 }}
            align="flex-start"
          >
            <Box
              w={{ base: "100%", md: "350px" }}
              maxW="350px"
              mx={{ base: "auto", md: 0 }}
              flexShrink={0}
            >
              <Image
                src={release.coverImage}
                alt={release.title}
                w="100%"
                aspectRatio={1}
                objectFit="cover"
              />
            </Box>

            <Box flex="1" minW={0} w="100%">
              {editForm}

              <Flex justify="flex-end" mt={5}>
                {actions}
              </Flex>
            </Box>
          </Flex>
        ) : (
          <>
            {/* MOBILE: BELOW 700PX */}
            <Box
              display={{ base: "block", md: "none" }}
              sx={{
                "@media (min-width: 700px) and (max-width: 767px)": {
                  display: "none",
                },
              }}
              w="100%"
              minW={0}
              position="relative"
              overflow="hidden"
              borderRadius="36px"
              border="1px solid rgba(255,255,255,0.28)"
              bg="rgba(8, 8, 12, 0.17)"
              backdropFilter="blur(22px)"
              WebkitBackdropFilter="blur(22px)"
              p={4}
            >
              <Grid
                templateColumns="minmax(0, 1fr) minmax(0, 1fr)"
                gap={3}
                alignItems="start"
              >
                {/* LEFT: TITLE, ARTIST, DATE, LABEL */}
                <Flex
                  direction="column"
                  minW={0}
                  h="100%"
                  justifyContent="center"
                  gap={3}
                >
                  <Box minW={0}>
                    <Heading
                      as="h1"
                      fontSize="17px"
                      fontWeight="600"
                      lineHeight="1.15"
                      letterSpacing="-0.4px"
                      overflowWrap="anywhere"
                      mb={1}
                    >
                      {release.title}
                    </Heading>

                    <Text
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="1.35"
                      color="white"
                      overflowWrap="anywhere"
                    >
                      {release.artist || "—"}
                    </Text>
                  </Box>

                  <Box>
                    <Text {...mobileValueStyles}>
                      {formatDateForPreview(release.releaseDate)}
                    </Text>
                  </Box>

                  <Box>
                    <Text {...mobileValueStyles}>
                      {release.label || "—"}
                    </Text>
                  </Box>
                </Flex>

                {/* RIGHT: COVER */}
                <Box
                  w="100%"
                  minW={0}
                  aspectRatio={1}
                  position="relative"
                  overflow="hidden"
                  borderRadius="25px"
                >
                  <Image
                    src={release.coverImage}
                    alt={release.title}
                    position="absolute"
                    inset={0}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    display="block"
                  />
                </Box>
              </Grid>

              {/* MOBILE: PLATFORMS + BUY RELEASE */}
              <Box mt={5}>
                <ReleaseInfo
                  release={release}
                  actions={actions}
                  mobileOnly
                />
              </Box>
            </Box>

            {/* GALAXY 700PX+ / TABLET / DESKTOP */}
            <Grid
              display={{ base: "none", md: "grid" }}
              sx={{
                "@media (min-width: 700px) and (max-width: 767px)": {
                  display: "grid",
                },
              }}
              w="100%"
              templateColumns="repeat(2, minmax(0, 1fr))"
              gap={3}
              alignItems="stretch"
            >
              {/* INFORMATION CARD */}
              <Flex
                minW={0}
                aspectRatio={1}
                minH={0}
                position="relative"
                overflow="hidden"
                borderRadius="54px"
                border="1px solid rgba(255,255,255,0.28)"
                bg="rgba(8, 8, 12, 0.17)"
                backdropFilter="blur(22px)"
                WebkitBackdropFilter="blur(22px)"
                p={{ base: 7, md: 7, lg: 8 }}
                direction="column"
                justify="space-between"
                gap={0}
              >
                {/* TITLE + ARTIST */}
                <Box minW={0} flexShrink={0}>
                  <Heading
                    as="h1"
                    fontSize={{
                      base: "26px",
                      md: "26px",
                      lg: "30px",
                    }}
                    fontWeight="500"
                    lineHeight="1.15"
                    letterSpacing="-0.8px"
                    overflowWrap="anywhere"
                    mb={2}
                  >
                    {release.title}
                  </Heading>

                  <Text
                    fontSize="12px"
                    fontWeight="600"
                    letterSpacing="1.5px"
                    color="gray.300"
                    mb={1}
                  >
                    ARTIST
                  </Text>

                  <Text
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight="1.4"
                    color="white"
                    overflowWrap="anywhere"
                  >
                    {release.artist || "—"}
                  </Text>
                </Box>

                <ReleaseInfo
                  release={release}
                  actions={actions}
                />
              </Flex>

              {/* COVER CARD */}
              <Box
                minW={0}
                aspectRatio={1}
                position="relative"
                overflow="hidden"
                borderRadius="54px"
                border="1px solid rgba(255,255,255,0.28)"
                bg="rgba(0,0,0,0.4)"
              >
                <Image
                  src={release.coverImage}
                  alt={release.title}
                  position="absolute"
                  inset={0}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  display="block"
                />
              </Box>
            </Grid>
          </>
        )}
      </Box>

      {showUnsavedModal && (
        <UnsavedChangesModal
          title="Discard changes?"
          onCancel={() => setShowUnsavedModal(false)}
          onConfirm={() => {
            setShowUnsavedModal(false);
            resetEditor();
            setIsEditing(false);
          }}
        />
      )}
    </>
  );
}
