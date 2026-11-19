
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useEffect, useState } from "react";

import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  fetchReleases,
  updatePinOrder,
} from "../../services/releaseService";

import SortableReleaseCard from "./SortableReleaseCard";

export default function ReleasesSection({
  releases: releasesProp,
  setReleases,
  loadReleases,
  excludeId,
  onReleaseClick,
  onTogglePin,
  isAdmin,
}) {
  const [localReleases, setLocalReleases] = useState([]);

  useEffect(() => {
    if (releasesProp) return;

    const loadLocalReleases = async () => {
      try {
        const data = await fetchReleases();
        setLocalReleases(data);
      } catch (error) {
        console.error("Error loading releases:", error);
      }
    };

    loadLocalReleases();
  }, [releasesProp]);

  const releases = releasesProp ?? localReleases;

  const filteredReleases = excludeId
    ? releases.filter(
        (release) => release._id !== excludeId
      )
    : releases;

  const sortedReleases = [...filteredReleases].sort(
    (a, b) =>
      new Date(b.releaseDate) -
      new Date(a.releaseDate)
  );

  const latestRelease = sortedReleases[0];

  const featuredReleases = sortedReleases
    .filter(
      (release) =>
        release.pinned &&
        release._id !== latestRelease?._id
    )
    .sort(
      (a, b) => a.pinOrder - b.pinOrder
    );

  const otherReleases = sortedReleases.filter(
    (release) =>
      !release.pinned &&
      release._id !== latestRelease?._id
  );

  const releasesToRender = [
    latestRelease,
    ...featuredReleases,
    ...otherReleases,
  ].filter(Boolean);

  const handleDragEnd = async ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = featuredReleases.findIndex(
      (release) => release._id === active.id
    );

    const newIndex = featuredReleases.findIndex(
      (release) => release._id === over.id
    );

    if (oldIndex === -1 || newIndex === -1) return;
    if (!setReleases || !loadReleases) return;

    const reordered = arrayMove(
      featuredReleases,
      oldIndex,
      newIndex
    );

    const reorderedIds = reordered.map(
      (release) => release._id
    );

    const previousReleases = releasesProp;

    try {
      setReleases((prev) =>
        prev.map((release) => {
          const index = reorderedIds.indexOf(
            release._id
          );

          if (index === -1) return release;

          return {
            ...release,
            pinOrder: index + 1,
          };
        })
      );

      const payload = reordered.map(
        (release, index) => ({
          _id: release._id,
          pinOrder: index + 1,
        })
      );

      await updatePinOrder(payload);
      await loadReleases();
    } catch (error) {
      console.error(error);

      if (releasesProp && setReleases) {
        setReleases(previousReleases);
      }
    }
  };

  return (
    <Box
      maxW={{ base: "700px", md: "100%" }}
      sx={{
        "@media (min-width: 700px) and (max-width: 767px)": {
          maxWidth: "100%",
        },
      }}
      mx="auto"
      w="100%"
    >
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={featuredReleases.map(
            (release) => release._id
          )}
          strategy={rectSortingStrategy}
        >
          <SimpleGrid
            columns={{
              base: 2,
              md: 3,
              xl: 4,
            }}
            spacing={{ base: 4, lg: 10 }}
            sx={{
              "@media (min-width: 700px) and (max-width: 767px)": {
                gridTemplateColumns:
                  "repeat(3, minmax(0, 1fr))",
              },
            }}
          >
            {releasesToRender.map((release) => (
              <Box
                key={release._id}
                w="100%"
                maxW={{
                  base: "320px",
                  xl: "none",
                }}
                mx="auto"
              >
                <SortableReleaseCard
                  release={release}
                  onClick={onReleaseClick}
                  onTogglePin={onTogglePin}
                  isAdmin={isAdmin}
                  isLatest={
                    release._id === latestRelease?._id
                  }
                />
              </Box>
            ))}
          </SimpleGrid>
        </SortableContext>
      </DndContext>
    </Box>
  );
}
