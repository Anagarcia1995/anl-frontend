import { Box, HStack, Link } from "@chakra-ui/react"
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
    href: "https://www.instagram.com/Artnologia_",
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
      borderTop="3px solid"
      borderColor="white"
      py={6}
      bg="black"
      display="flex"
      justifyContent="center"
    >
      <HStack
        spacing={3}
        fontSize="2xl"
        color="white"
      >
        {socialLinks.map(({ href, icon }) => (
          <Link
            key={href}
            href={href}
            isExternal
            _hover={{
              color: "gray.400"
            }}
          >
            {icon}
          </Link>
        ))}
      </HStack>
    </Box>
  )
}