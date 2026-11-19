
import { useEffect, useState } from "react";

import {
  Box,
  Divider,
  Heading,
  useToast,
} from "@chakra-ui/react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import ReleasePreviewLayout from "../components/music/ReleasePreviewLayout";
import ReleasesSection from "../components/music/ReleasesSection";
import UnsavedChangesModal from "../components/UnsavedChangesModal";

import useReleaseEditor from "../hooks/useReleaseEditor";

import {
  deleteRelease,
  fetchReleaseById,
  updateRelease,
} from "../services/releaseService";

import {
  formatDateForApi,
  formatDateForInput,
} from "../utils/date";

import { getActionMessage } from "../utils/messages";
import { hasUnsavedChanges } from "../utils/hasUnsavedChanges";
import { showToast } from "../utils/showToast";

export default function ReleasePreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [release, setRelease] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showSwitchModal, setShowSwitchModal] = useState(false);
  const [switchTarget, setSwitchTarget] = useState(null);

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
  } = useReleaseEditor();

  useEffect(() => {
    const loadReleaseData = async () => {
      const data = await fetchReleaseById(id);

      setRelease(data);
      loadRelease(data);
      setIsEditing(false);
    };

    loadReleaseData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const showReleaseToast = (action) =>
    showToast(
      toast,
      getActionMessage("Release", action)
    );

  const initialData = {
    title: release?.title || "",
    artist: release?.artist || "",
    label: release?.label || "",
    releaseDate: release?.releaseDate
      ? formatDateForInput(release.releaseDate)
      : "",
    spotify: release?.spotify || "",
    appleMusic: release?.appleMusic || "",
    soundcloud: release?.soundcloud || "",
    youtube: release?.youtube || "",
    beatport: release?.beatport || "",
  };

  const currentData = {
    title: editTitle,
    artist: editArtist,
    label: editLabel,
    releaseDate: editReleaseDate,
    spotify: editSpotify,
    appleMusic: editAppleMusic,
    soundcloud: editSoundcloud,
    youtube: editYoutube,
    beatport: editBeatport,
  };

  const hasChanges = hasUnsavedChanges(
    initialData,
    currentData
  );

  const handleUpdateRelease = async () => {
    try {
      const formData = new FormData();

      formData.append("title", editTitle);
      formData.append("artist", editArtist);
      formData.append("label", editLabel);
      formData.append(
        "releaseDate",
        formatDateForApi(editReleaseDate)
      );

      formData.append("spotify", editSpotify);
      formData.append("appleMusic", editAppleMusic);
      formData.append("soundcloud", editSoundcloud);
      formData.append("youtube", editYoutube);
      formData.append("beatport", editBeatport);

      if (editCoverImage) {
        formData.append(
          "coverImage",
          editCoverImage
        );
      }

      await updateRelease(id, formData);

      const updated = await fetchReleaseById(id);

      setRelease(updated);
      loadRelease(updated);
      setIsEditing(false);

      showReleaseToast("updated");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRelease = async () => {
    try {
      await deleteRelease(id);

      showReleaseToast("deleted");

      setTimeout(() => {
        navigate("/music");
      }, 1300);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReleaseClick = (selectedRelease) => {
    if (!isEditing || !hasChanges) {
      navigate(`/music/${selectedRelease._id}`);
      return;
    }

    setSwitchTarget(selectedRelease);
    setShowSwitchModal(true);
  };

  if (!release) {
    return (
      <Box
        px={10}
        pt={{
          base: "85px",
          md: "140px",
          lg: "155px",
        }}
      >
        Loading...
      </Box>
    );
  }

  return (
    <Box
      w="100%"
      bg="black"
      color="white"
      overflow="hidden"
    >
      {/* HERO — FULL WIDTH BACKGROUND */}
      <Box
        position="relative"
        w="100%"
        overflow="hidden"
        isolation="isolate"
        pt={{
          base: "105px",
          md: "140px",
          lg: "155px",
        }}
        pb={{
          base: 10,
          md: 24,
          lg: 28,
        }}
      >
        {/* COVER COLORS — STRONG AT TOP */}
        {!isEditing && (
          <>
            <Box
              position="absolute"
              inset={0}
              zIndex={-2}
              backgroundImage={`url("${release.coverImage}")`}
              backgroundSize="cover"
              backgroundPosition="center center"
              backgroundRepeat="no-repeat"
              filter="blur(3px)"
              opacity={0.85}
              pointerEvents="none"
            />

            {/* SMOOTH FADE TO BLACK */}
            <Box
              position="absolute"
              inset={0}
              zIndex={-1}
              background="linear-gradient(
                to bottom,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) 15%,
                rgba(0,0,0,0.20) 25%,
                rgba(0,0,0,0.50) 35%,
                rgba(0,0,0,0.80) 45%,
                rgba(0,0,0,0.95) 55%,
                #000000 65%,
                #000000 100%
              )"
              pointerEvents="none"
            />
          </>
        )}

        {/* CENTERED CARDS */}
        <Box
          w="100%"
          maxW="770px"
          mx="auto"
          px={{
            base: 5,
            md: 6,
            lg: 0,
          }}
          position="relative"
          zIndex={1}
        >
          <ReleasePreviewLayout
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
            hasChanges={hasChanges}
          />
        </Box>
      </Box>

      {/* MORE RELEASES — BLACK BACKGROUND */}
      <Box
        w="100%"
        maxW="1600px"
        mx="auto"
        px={{ base: 6, lg: 8 }}
        pb={{ base: 12, md: 20, lg: 28 }}
      >
        {/* FULL-WIDTH EDITORIAL BANNER */}
        <Box
          w="100vw"
          position="relative"
          left="50%"
          transform="translateX(-50%)"
          mb={{ base: 7, md: 50 }}
          sx={{
            "@media (min-width: 700px) and (max-width: 767px)": {
              marginBottom: "40px",
            },
          }}
        >
          <Divider
            borderColor="rgba(255,255,255,0.35)"
            opacity={1}
          />

          <Link
            to="/music"
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box
              px={{ base: 4, md: 10, lg: 12 }}
              pt={{ base: 4, md: 12, lg: 7 }}
              pb={{ base: 4, md: 10, lg: 5 }}
              transition="color .25s ease"
              _hover={{ color: "gray.400" }}
              sx={{
                "@media (min-width: 700px) and (max-width: 767px)": {
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  paddingTop: "48px",
                  paddingBottom: "40px",
                },
              }}
            >
              <Heading
                as="h2"
                fontFamily="'Bebas Neue', Impact, sans-serif"
                fontWeight="400"
                fontSize={{
                  base: "clamp(12px, 9vw, 31px)",
                  sm: "clamp(14px, 4.15vw, 21px)",
                  md: "clamp(48px, 5.5vw, 90px)",
                  lg: "clamp(64px, 7vw, 110px)",
                }}
                lineHeight="0.9"
                letterSpacing="-0.02em"
                color="white"
                textTransform="uppercase"
                whiteSpace="nowrap"
                sx={{
                  "@media (min-width: 700px) and (max-width: 767px)": {
                    fontSize: "clamp(36px, 5.5vw, 42px)",
                  },
                }}
              >
                TAKE A DEEPER LOOK INTO OUR SOUND
              </Heading>
            </Box>
          </Link>

          <Divider
            borderColor="rgba(255,255,255,0.35)"
            opacity={1}
          />
        </Box>

        <ReleasesSection
          excludeId={release._id}
          onReleaseClick={handleReleaseClick}
        />

        {showSwitchModal && (
          <UnsavedChangesModal
            title="Discard changes?"
            onCancel={() => {
              setShowSwitchModal(false);
              setSwitchTarget(null);
            }}
            onConfirm={() => {
              setShowSwitchModal(false);
              resetEditor();
              setIsEditing(false);
              navigate(
                `/music/${switchTarget._id}`
              );
            }}
          />
        )}
      </Box>
    </Box>
  );
}
