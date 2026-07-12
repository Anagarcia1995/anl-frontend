import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  SimpleGrid
} from "@chakra-ui/react"

import {
  FaInstagram,
  FaSpotify,
  FaSoundcloud,
  FaYoutube,
  FaTiktok,
  FaApple
} from "react-icons/fa"

import { SiBeatport } from "react-icons/si"

const socialLinks = [
  {
    href: "https://www.instagram.com/artnologia_",
    icon: <FaInstagram />
  },
  {
    href: "https://open.spotify.com/intl-es/artist/578uwpciymiRVea76Q8CMK",
    icon: <FaSpotify />
  },
  {
    href: "https://soundcloud.com/artnologia",
    icon: <FaSoundcloud />
  },
  {
    href: "https://www.youtube.com/@artnologia",
    icon: <FaYoutube />
  },
  {
    href: "https://www.tiktok.com/@artnologia",
    icon: <FaTiktok />
  },
  {
    href: "https://music.apple.com/es/artist/art-no-logia/1627594181",
    icon: <FaApple />
  },
  {
    href: "https://www.beatport.com/es/artist/art-no-logia/1061996",
    icon: <SiBeatport />
  }
]

export default function Footer() {
  return (
    <Box
      bg="black"
      borderTop="3px solid"
      borderColor="white"
      py={{ base: 4, lg: 6 }}
      px={8}
    >

      <VStack spacing={5}>

        {/* CONTACT */}

        <Box w="100%" maxW="1300px">

          <Heading
            fontSize="sm"
            fontWeight="500"
            letterSpacing="4px"
            textAlign="center"
            mb={4}
            display={{ base: "none", lg: "block" }}
          >
            CONTACT
          </Heading>

          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 2, lg: 10 }}
            textAlign="center"
          >

            <Box>

              <Text
                fontSize="xs"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="2px"
                mb={-1}
              >
                BOOKINGS
              </Text>

              <Link
                href="mailto:aldo@conceptoneagency.com"
                fontSize="sm"
                transition="all .2s ease"
                _hover={{
                  color: "gray.400"
                }}
              >
                aldo@conceptoneagency.com
              </Link>

            </Box>

            <Box>

              <Text
                fontSize="xs"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="2px"
                mb={-1}
              >
                MANAGEMENT
              </Text>

              <Link
                href="https://instagram.com/jassigonzalez"
                isExternal
                fontSize="sm"
                transition="all .2s ease"
                _hover={{
                  color: "gray.400"
                }}
              >
                jassigonzalez@conceptoneagency.com
              </Link>

            </Box>


            <Box>

              <Text
                fontSize="xs"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="2px"
                mb={-1}
              >
                PROMO
              </Text>

              <Link
                href="mailto:aldo@conceptoneagency.com"
                fontSize="sm"
                transition="all .2s ease"
                _hover={{
                  color: "gray.400"
                }}
              >
                artnologia@cocoamusic.com
              </Link>

            </Box>

          </SimpleGrid>

        </Box>

        {/* SOCIALS */}

        <HStack
          spacing={{ base: 4, lg: 6 }}
          fontSize="2xl"
          color="white"
          flexWrap="wrap"
          justify="center"
        >

          {socialLinks.map(({ href, icon }) => (
            <Link
              key={href}
              href={href}
              isExternal
              transition="all .2s ease"
              _hover={{
                color: "gray.400",
                transform: "scale(1.15)"
              }}
            >
              {icon}
            </Link>
          ))}

        </HStack>

      </VStack>

      <Text
  mt={{ base: 2, lg: 5 }}
  fontSize="9px"
  color="gray.500"
  letterSpacing="1.5px"
  textAlign="center"
  textTransform="uppercase"
>
  © {new Date().getFullYear()} ART NO LOGIA. ALL RIGHTS RESERVED.
</Text>

    </Box>
  )
}