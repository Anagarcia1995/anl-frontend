
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  FaApple,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { SiBeatport } from "react-icons/si";

const socialLinks = [
  {
    href: "https://www.instagram.com/artnologia_",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    href: "https://open.spotify.com/intl-es/artist/578uwpciymiRVea76Q8CMK",
    icon: <FaSpotify />,
    label: "Spotify",
  },
  {
    href: "https://soundcloud.com/artnologia",
    icon: <FaSoundcloud />,
    label: "SoundCloud",
  },
  {
    href: "https://www.youtube.com/@artnologia",
    icon: <FaYoutube />,
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@artnologia",
    icon: <FaTiktok />,
    label: "TikTok",
  },
  {
    href: "https://music.apple.com/es/artist/art-no-logia/1627594181",
    icon: <FaApple />,
    label: "Apple Music",
  },
  {
    href: "https://www.beatport.com/es/artist/art-no-logia/1061996",
    icon: <SiBeatport />,
    label: "Beatport",
  },
];

const contactLinks = [
  {
    label: "MANAGEMENT",
    email: "hello@jassigonzalez.com",
  },
  {
    label: "BOOKINGS",
    email: "aldo@conceptoneagency.com",
  },
];

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      borderTop="1px solid"
      borderColor="white"
      px={{
        base: 5,
        md: 8,
        lg: 12,
      }}
      py={{
        base: 4,
        md: 7,
        lg: 4,
      }}
    >
      <Flex
        w="100%"
        maxW="1200px"
        mx="auto"
        direction={{
          base: "column",
          md: "row",
        }}
        align="stretch"
        gap={{
          base: 5,
          md: 0,
        }}
      >
        {/* LEFT 50%: CONTACT */}
        <Flex
          flex="1"
          minW={0}
          direction="column"
          align={{
            base: "stretch",
            md: "center",
          }}
          justify="space-between"
          gap={{
            base: 3,
            md: 5,
          }}
          pr={{
            base: 0,
            md: 7,
            lg: 10,
          }}
        >
          {/* MOBILE CONTACT */}
          <Box display={{ base: "block", md: "none" }}>
            <Heading
              as="h2"
              fontSize="13px"
              fontWeight="500"
              letterSpacing="3px"
              lineHeight="1.2"
              mb={3}
            >
              CONTACT
            </Heading>

            <Flex
              w="100%"
              gap={4}
              align="flex-start"
            >
              {contactLinks.map(({ label, email }) => (
                <Box
                  key={label}
                  flex="1"
                  minW={0}
                >
                  <Text
                    mb="4px"
                    fontSize="10px"
                    fontWeight="500"
                    letterSpacing="1.2px"
                    color="gray.500"
                  >
                    {label}
                  </Text>

                  <Link
                    href={`mailto:${email}`}
                    display="block"
                    fontSize="11px"
                    fontWeight="400"
                    lineHeight="1.5"
                    color="white"
                    overflowWrap="anywhere"
                    transition="color 0.2s ease"
                    _hover={{
                      color: "gray.400",
                      textDecoration: "none",
                    }}
                  >
                    {email}
                  </Link>
                </Box>
              ))}
            </Flex>
          </Box>

{/* DESKTOP CONTACT */}
<Flex
  display={{
    base: "none",
    md: "flex",
  }}
  direction="row"
  align="center"
  justify="space-between"
  gap={5}
  w="100%"
>
  <Heading
    as="h2"
    flexShrink={0}
    fontSize={{
      md: "22px",
      lg: "26px",
    }}
    fontWeight="500"
    letterSpacing={{
      md: "3px",
      lg: "4px",
    }}
    lineHeight="1.1"
  >
    CONTACT
  </Heading>

  <VStack
    align="stretch"
    spacing={4}
    minW={0}
  >
    {contactLinks.map(({ label, email }) => (
      <Flex
        key={label}
        direction="row"
        align="center"
        gap={0}
      >
        <Text
          minW="100px"
          fontSize="10px"
          fontWeight="600"
          letterSpacing="1.5px"
          color="gray.500"
        >
          {label}
        </Text>

        <Link
          href={`mailto:${email}`}
          fontSize={{
            md: "12px",
            lg: "13px",
          }}
          fontWeight="400"
          letterSpacing="0.2px"
          color="white"
          overflowWrap="anywhere"
          transition="color 0.2s ease"
          _hover={{
            color: "gray.400",
            textDecoration: "none",
          }}
        >
          {email}
        </Link>
      </Flex>
    ))}
  </VStack>
</Flex>

        </Flex>

        {/* RIGHT 50%: SOCIALS + COPYRIGHT */}
        <Flex
          flex="1"
          minW={0}
          direction="column"
          align="center"
          justify="center"
          borderLeft={{
            base: "none",
            md: "1px solid",
          }}
          borderColor="rgba(255,255,255,0.2)"
          pl={{
            base: 0,
            md: 7,
            lg: 10,
          }}
          gap={{
            base: 3,
            md: 5,
          }}
        >
          {/* SOCIAL ICONS */}
          <HStack
            spacing={{
              base: 5,
              md: 4,
              lg: 6,
            }}
            justify="center"
            flexWrap="wrap"
            rowGap={4}
            color="white"
          >
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                isExternal
                aria-label={label}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{
                  base: "20px",
                  md: "24px",
                  lg: "27px",
                }}
                transition="all 0.25s ease"
                _hover={{
                  color: "gray.400",
                  transform: "translateY(-3px)",
                }}
                _focusVisible={{
                  outline: "1px solid white",
                  outlineOffset: "5px",
                }}
              >
                {icon}
              </Link>
            ))}
          </HStack>

          {/* COPYRIGHT */}
          <Text
            fontSize={{
              base: "8px",
              md: "9px",
            }}
            fontWeight="400"
            letterSpacing="1.3px"
            color="gray.500"
            textTransform="uppercase"
            textAlign="center"
          >
            © {new Date().getFullYear()} ART NO LOGIA.
            ALL RIGHTS RESERVED.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
