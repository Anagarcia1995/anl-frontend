import {
  Box,
  Icon,
  Image,
  Text,
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

export default function ReleaseCarousel({
  releases,
}) {
  const navigate = useNavigate()

  const [selectedIndex, setSelectedIndex] =
    useState(0)

  const [emblaRef, emblaApi] =
    useEmblaCarousel(
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
    <Box mt={{ base: 3, lg: "70px" }}>
      {/* CAROUSEL */}

      <Box
        position="relative"
        px={{ base: 5, lg: 12 }}
      >
        <Icon
          as={FaChevronLeft}
          position="absolute"
          left="0"
          top="40%"
          transform="translateY(-50%)"
          boxSize={5}
          cursor="pointer"
          zIndex={2}
          transition="all .3s ease"
          _hover={{
            color: "gray.400",
            transform:
              "translateY(-50%) scale(1.25)",
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
          <Box display="flex">
            {releases.map((release) => (
              <Box
                key={release._id}
                flex={{
                  base: "0 0 33%",
                  lg: "0 0 25%",
                }}
                px={{ base: 1, lg: 2 }}
                cursor="pointer"
                onClick={() =>
                  navigate(
                    `/music/${release._id}`
                  )
                }
              >
                <Image
                  src={release.coverImage}
                  alt={release.title}
                  w="100%"
                  aspectRatio={1}
                  objectFit="cover"
                  transition="all .5s ease"
                  _hover={{
                    transform:
                      "scale(1.14)",
                  }}
                />

                <Text
                  mt={{ base: 1, lg: 3 }}
                  ml={{ base: 1, lg: "5px" }}
                  fontSize={{
                    base: "xs",
                    lg: "sm",
                  }}
                  color="white"
                  letterSpacing="0.5px"
                  noOfLines={1}
                >
                  {release.title}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Icon
          as={FaChevronRight}
          position="absolute"
          right="0"
          top="40%"
          transform="translateY(-50%)"
          boxSize={5}
          cursor="pointer"
          zIndex={2}
          transition="all .3s ease"
          _hover={{
            color: "gray.400",
            transform:
              "translateY(-50%) scale(1.25)",
          }}
          onClick={() =>
            emblaApi?.scrollNext()
          }
        />
      </Box>

      {/* INDICATORS */}

      <Box
        mt={{ base: 5, lg: 10 }}
        display="flex"
        justifyContent="center"
        gap={2}
      >
        {releases.map((release, index) => (
          <Box
            key={release._id}
            w={
              index === selectedIndex
                ? "40px"
                : "18px"
            }
            h="2px"
            bg={
              index === selectedIndex
                ? "white"
                : "whiteAlpha.300"
            }
            cursor="pointer"
            transition="all .25s ease"
            onClick={() =>
              emblaApi?.scrollTo(index)
            }
          />
        ))}
      </Box>
    </Box>
  )
}