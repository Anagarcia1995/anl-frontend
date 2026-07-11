import {
  Box,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react"

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

import {
  useEffect,
  useState,
} from "react"

import { useNavigate } from "react-router-dom"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import { API_URL } from "../../services/api"

export default function ReleaseCarousel({
  releases,
}) {
  const navigate = useNavigate()

  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(
        emblaApi.selectedScrollSnap()
      )
    }

    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <Box mt="70px">

      {/* CAROUSEL + ARROWS */}

      <Box
        position="relative"
        px={12}
      >
        {/* LEFT */}

        <Icon
          as={FaChevronLeft}
          position="absolute"
          left="0"
          top="40%"
          transform="translateY(-50%)"
          cursor="pointer"
          boxSize={5}
          zIndex={2}
          transition="all .2s ease"
          _hover={{
            color: "gray.400",
            transform:
              "translateY(-50%) scale(1.15)",
          }}
          onClick={() =>
            emblaApi?.scrollPrev()
          }
        />

        {/* VIEWPORT */}

        <Box
          overflow="hidden"
          ref={emblaRef}
        >
          {/* CONTAINER */}

          <Box display="flex">
            {releases.map((release) => (
              <Box
                key={release._id}
                flex="0 0 25%"
                px={2}
                cursor="pointer"
                onClick={() =>
                  navigate(
                    `/music/${release._id}`
                  )
                }
              >
                <Image
                  src={`${API_URL}${release.coverImage}`}
                  alt={release.title}
                  w="100%"
                  aspectRatio={1}
                  objectFit="cover"
                  transition="all .3s ease"
                  _hover={{
                    transform:
                      "scale(1.04)",
                  }}
                />

                <Text
                  mt={3}
                  ml="5px"
                  fontSize="sm"
                  color="white"
                  letterSpacing="1px"
                  noOfLines={1}
                >
                  {release.title}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT */}

        <Icon
          as={FaChevronRight}
          position="absolute"
          right="0"
          top="40%"
          transform="translateY(-50%)"
          cursor="pointer"
          boxSize={5}
          zIndex={2}
          transition="all .2s ease"
          _hover={{
            color: "gray.400",
            transform:
              "translateY(-50%) scale(1.15)",
          }}
          onClick={() =>
            emblaApi?.scrollNext()
          }
        />
      </Box>

      {/* INDICATORS */}

      <Box
        mt={12}
        display="flex"
        justifyContent="center"
        gap={2}
      >
        {releases.map((_, index) => (
          <Box
            key={index}
            w={
              index === selectedIndex
                ? "38px"
                : "18px"
            }
            h="2px"
            bg={
              index === selectedIndex
                ? "white"
                : "whiteAlpha.300"
            }
            transition="all .25s ease"
            cursor="pointer"
            onClick={() =>
              emblaApi?.scrollTo(index)
            }
          />
        ))}
      </Box>
    </Box>
  )
}