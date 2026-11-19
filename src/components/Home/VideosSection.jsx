
import {
  Box,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const featuredVideos = [
  {
    id: "HSUfDzzpK1s",
    url: "https://www.youtube.com/watch?v=HSUfDzzpK1s&t=575s",
  },
  {
    id: "Phcl9680yLg",
    url: "https://www.youtube.com/watch?v=Phcl9680yLg&t=1617s",
  },
];

export default function VideosSection() {
  return (
    <Box
      as="section"
      w="100%"
      maxW="1320px"
      mx="auto"
      px={{
        base: 4,
        md: 6,
        lg: 8,
      }}
      pt={{
        base: 16,
        md: 12,
        lg: 16,
      }}
      pb={{
        base: 12,
        md: 16,
        lg: 20,
      }}
      bg="black"
      color="white"
    >
      {/* VIDEOS GRID */}
      <Flex
        direction={{
          base: "column",
          lg: "row",
        }}
        gap={{
          base: 5,
          md: 8,
          lg: "72px",
        }}
        align="stretch"
        w="100%"
      >
        {featuredVideos.map((video) => (
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
            }}
            _focusVisible={{
              outline: "2px solid white",
              outlineOffset: "5px",
            }}
            aria-label="Watch ART NO LOGIA DJ set on YouTube"
          >
            {/* VIDEO IMAGE - NO BORDER OR RADIUS */}
            <Box
              position="relative"
              w="100%"
              aspectRatio={{
                base: "18 / 7",
                md: "16 / 5",
                lg: "16 / 9",
              }}
              overflow="hidden"
              bg="#101010"
            >
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt="ART NO LOGIA DJ set"
                position="absolute"
                inset={0}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.4s ease"
                _groupHover={{
                  transform: "scale(1.035)",
                }}
              />

              {/* DARK OVERLAY */}
              <Box
                position="absolute"
                inset={0}
                bg="rgba(0,0,0,0.20)"
                transition="background 0.3s ease"
                _groupHover={{
                  bg: "rgba(0,0,0,0.35)",
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
                    base: "44px",
                    md: "58px",
                  }}
                  h={{
                    base: "44px",
                    md: "58px",
                  }}
                  align="center"
                  justify="center"
                  border="1px solid white"
                  borderRadius="full"
                  bg="rgba(0,0,0,0.25)"
                  backdropFilter="blur(5px)"
                  color="white"
                  transition="all 0.25s ease"
                  _groupHover={{
                    bg: "white",
                    color: "black",
                    transform: "scale(1.08)",
                  }}
                >
                  <FaPlay size={14} />
                </Flex>
              </Flex>
            </Box>
          </Link>
        ))}
      </Flex>

      {/* EXPLORE ALL SETS */}
      <Flex
        justify="flex-end"
        mt={{
          base: 5,
          md: 7,
          lg: 8,
        }}
      >
        <Link
          as={RouterLink}
          to="/video"
          display="inline-flex"
          alignItems="center"
          color="white"
          fontFamily="'Space Grotesk', Arial, sans-serif"
          fontSize={{
            base: "11px",
            md: "13px",
          }}
          fontWeight="600"
          letterSpacing="2px"
          textTransform="uppercase"
          textDecoration="none"
          borderBottom="1px solid rgba(255,255,255,0.7)"
          pb={2}
          transition="all 0.25s ease"
          _hover={{
            color: "gray.400",
            borderColor: "gray.400",
            textDecoration: "none",
          }}
        >
          EXPLORE ALL SETS
        </Link>
      </Flex>
    </Box>
  );
}
