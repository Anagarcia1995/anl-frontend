import {
  Box,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

import {
  FaApple,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa"

import { SiBeatport } from "react-icons/si"

const socialLinks = [
  {
    href: "https://www.instagram.com/artnologia_",
    icon: <FaInstagram />,
  },
  {
    href: "https://open.spotify.com/intl-es/artist/578uwpciymiRVea76Q8CMK",
    icon: <FaSpotify />,
  },
  {
    href: "https://soundcloud.com/artnologia",
    icon: <FaSoundcloud />,
  },
  {
    href: "https://www.youtube.com/@artnologia",
    icon: <FaYoutube />,
  },
  {
    href: "https://www.tiktok.com/@artnologia",
    icon: <FaTiktok />,
  },
  {
    href: "https://music.apple.com/es/artist/art-no-logia/1627594181",
    icon: <FaApple />,
  },
  {
    href: "https://www.beatport.com/es/artist/art-no-logia/1061996",
    icon: <SiBeatport />,
  },
]

export default function Footer() {
  return (
    <Box
      bg="black"
      borderTop="3px solid"
      borderColor="white"
      py={{ base: 2, lg: 2 }}
      px={8}
    >
      <VStack spacing={3}>
        {/* CONTACT */}

        <Box
          w="100%"
          maxW="1300px"
        >
          <Heading
            display={{ base: "none", lg: "block" }}
            mb={3}
            textAlign="center"
            fontSize="sm"
            fontWeight="500"
            letterSpacing="4px"
            marginTop="5px"
          >
            CONTACT
          </Heading>

          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 1, lg: 10 }}
            textAlign="center"
          >
            <Box>
              <Text
                mb={{ base: "-6px", lg: 0 }}
                fontSize="xs"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="2px"
              >
                BOOKINGS
              </Text>

              <Link
                href="mailto:aldo@conceptoneagency.com"
                fontSize="sm"
                transition="all .2s ease"
                letterSpacing="0.5px"
                _hover={{
                  color: "gray.400",
                }}
              >
                aldo@conceptoneagency.com
              </Link>
            </Box>

            <Box>
              <Text
                mb={{ base: "-6px", lg: 0 }}
                fontSize="xs"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="2px"
              >
                MANAGEMENT
              </Text>

              <Link
                href="mailto:hello@jassigonzalez.com"
                fontSize="sm"
                transition="all .2s ease"
                letterSpacing="0.5px"
                _hover={{
                  color: "gray.400",
                }}
              >
                hello@jassigonzalez.com
              </Link>
            </Box>

            <Box>
              <Text
                mb={{ base: "-6px", lg: 0 }}
                fontSize="xs"
                color="gray.500"
                textTransform="uppercase"
                letterSpacing="2px"
              >
                DEMOS
              </Text>

              <Link
                href="mailto:demoscocoalabel@gmail.com"
                fontSize="sm"
                transition="all .2s ease"
                letterSpacing="0.5px"
                _hover={{
                  color: "gray.400",
                }}
              >
                demoscocoalabel@gmail.com
              </Link>
            </Box>
          </SimpleGrid>
        </Box>

        {/* SOCIALS */}

        <HStack
          spacing={{ base: 4, lg: 8 }}
          justify="center"
          flexWrap="wrap"
          fontSize="2xl"
          color="white"
        >
          {socialLinks.map(({ href, icon }) => (
            <Link
              key={href}
              href={href}
              isExternal
              transition="all .2s ease"
              _hover={{
                color: "gray.400",
                transform: "scale(1.15)",
              }}
            >
              {icon}
            </Link>
          ))}
        </HStack>
      </VStack>

      <Text
        mt={{ base: 2, lg: 2 }}
        fontSize="9px"
        color="gray.500"
        letterSpacing="1px"
        textAlign="center"
        textTransform="uppercase"
      >
        © {new Date().getFullYear()} ART NO LOGIA. ALL RIGHTS
        RESERVED.
      </Text>
    </Box>
  )
}