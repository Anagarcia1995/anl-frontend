
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { FaPlay } from "react-icons/fa";

const videos = [
  {
    id: "HSUfDzzpK1s",
    title: "ART NO LOGIA Closing Matinal",
    subtitle: "NY 26 · LOOP BY FABRIK",
    url: "https://www.youtube.com/watch?v=HSUfDzzpK1s&t=575s",
  },
  {
    id: "Phcl9680yLg",
    title: "ART NO LOGIA AT ROOM 666",
    subtitle: "IBIZA · LE.CANTINE",
    url: "https://www.youtube.com/watch?v=Phcl9680yLg&t=1617s",
  },
];

export default function VideosSection() {
  return (
    <Flex
      as="section"
      w="100%"
      maxW="1320px"
      mx="auto"
      px={{
        base: 4,
        md: 6,
        lg: 8,
      }}
      py={{
        base: 10,
        md: 12,
      }}
      minH="100%"
      flex="1"
      direction="column"
      justify="center"
      position="relative"
      bg="black"
      color="white"
      mt={{
        base: "60px",
        md: "55px",
        lg: "70px",
        xl: "120px",
      }}
    >
      {/* VIDEOS GRID */}
      <Flex
        direction={{
          base: "column",
          md: "column",
          lg: "column",
          xl: "row",
        }}
        gap={{
          base: 10,
          md: 12,
          lg: 8,
          xl: "72px",
        }}
        align="stretch"
        w="100%"
      >
        {videos.map((video) => (
          <Link
            key={video.id}
            href={video.url}
            isExternal
            role="group"
            display="block"
            flex="1"
            minW={0}
            color="white"
            textDecoration="none"
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
            _focusVisible={{
              outline: "2px solid white",
              outlineOffset: "5px",
            }}
            aria-label={`Ver en YouTube: ${video.title}`}
          >
            {/* VIDEO CARD */}
            <Box
              h="100%"
              border="1px solid"
              borderColor="rgba(255,255,255,0.42)"
              borderRadius={{
                base: "20px",
                md: "24px",
              }}
              overflow="hidden"
              bg="#10101088"
              transition="border-color 0.25s ease"
              _groupHover={{
                borderColor: "rgba(255,255,255,0.9)",
              }}
            >
              {/* VIDEO IMAGE */}
              <Box
                position="relative"
                w="100%"
                aspectRatio={16 / 8}
                overflow="hidden"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.4s ease"
                  _groupHover={{
                    transform: "scale(1.035)",
                  }}
                />

                {/* IMAGE OVERLAY */}
                <Box
                  position="absolute"
                  inset={0}
                  bg="rgba(0,0,0,0.20)"
                  transition="background 0.3s ease"
                  _groupHover={{
                    bg: "rgba(0, 0, 0, 0.15)",
                  }}
                  pointerEvents="none"
                />

                {/* PLAY BUTTON */}
                <Flex
                  position="absolute"
                  inset={0}
                  align="center"
                  justify="center"
                  pointerEvents="none"
                >
                  <Flex
                    w={{
                      base: "52px",
                      md: "64px",
                    }}
                    h={{
                      base: "52px",
                      md: "64px",
                    }}
                    border="1px solid white"
                    borderRadius="full"
                    bg="rgba(0, 0, 0, 0.33)"
                    backdropFilter="blur(5px)"
                    align="center"
                    justify="center"
                    color="white"
                    transition="all 0.25s ease"
                    _groupHover={{
                      bg: "white",
                      color: "black",
                      transform: "scale(1.08)",
                    }}
                  >
                    <FaPlay size={16} />
                  </Flex>
                </Flex>
              </Box>

              {/* CARD INFORMATION */}
              <Flex
                px={{
                  base: 4,
                  md: 5,
                }}
                pt={{
                  base: 4,
                  md: 5,
                }}
                pb={{
                  base: 4,
                  md: 5,
                }}
                direction="column"
                gap={4}
              >
                {/* TITLE + SUBTITLE */}
                <Flex
                  align="baseline"
                  gap={{
                    base: 2,
                    md: 3,
                  }}
                  flexWrap="wrap"
                >
                  <Text
                    fontFamily="'Space Grotesk', Arial, sans-serif"
                    fontSize={{
                      base: "14px",
                      md: "17px",
                      lg: "18px",
                    }}
                    fontWeight="600"
                    lineHeight="1.4"
                    color="white"
                  >
                    {video.title}
                  </Text>

                  <Text
                    fontFamily="'Space Grotesk', Arial, sans-serif"
                    fontSize={{
                      base: "11px",
                      md: "13px",
                      lg: "14px",
                    }}
                    fontWeight="400"
                    lineHeight="1.4"
                    letterSpacing="0.3px"
                    color="gray.400"
                  >
                    {video.subtitle}
                  </Text>
                </Flex>

                {/* WATCH BUTTON */}
                <Flex justify="flex-end">
                  <Flex
                    align="center"
                    justify="center"
                    minH={{
                      base: "36px",
                      md: "40px",
                    }}
                    px={{
                      base: 4,
                      md: 5,
                    }}
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.75)"
                    fontSize={{
                      base: "10px",
                      md: "11px",
                    }}
                    fontWeight="600"
                    letterSpacing="1.4px"
                    whiteSpace="nowrap"
                    transition="all 0.25s ease"
                    _groupHover={{
                      bg: "white",
                      color: "black",
                    }}
                  >
                    WATCH ON YOUTUBE
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
