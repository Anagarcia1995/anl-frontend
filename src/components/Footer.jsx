
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

const galaxyFooterStyles = {
  "@media (min-width: 700px) and (max-width: 767px)": {
    padding: "28px 32px",

    "& .footer-main": {
      flexDirection: "row",
      gap: 0,
    },

    "& .footer-contact": {
      alignItems: "stretch",
      gap: "12px",
      paddingRight: "16px",
    },

    "& .footer-mobile-contact": {
      display: "none",
    },

    "& .footer-tablet-contact": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      gap: "12px",
    },

    "& .footer-contact-heading": {
      fontSize: "20px",
      letterSpacing: "2.5px",
    },

    "& .footer-contact-list": {
      width: "100%",
      gap: "8px",
    },

    "& .footer-contact-row": {
      gap: "12px",
    },

    "& .footer-contact-label": {
      minWidth: "85px",
      fontSize: "10px",
      letterSpacing: "1.2px",
    },

    "& .footer-contact-email": {
      fontSize: "12px",
      letterSpacing: "0.1px",
      whiteSpace: "nowrap",
      overflowWrap: "normal",
    },

    "& .footer-social": {
      borderLeft: "1px solid rgba(255,255,255,0.2)",
      paddingLeft: "16px",
      gap: "20px",
    },

    "& .footer-social-icons": {
      columnGap: "16px",
    },

    "& .footer-social-link": {
      fontSize: "24px",
    },

    "& .footer-copyright": {
      fontSize: "9px",
    },
  },
};

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
        xl: 12,
      }}
      py={{
        base: 4,
        md: 7,
        lg: 4,
        xl: 4,
      }}
      sx={galaxyFooterStyles}
    >
      <Flex
        className="footer-main"
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
          className="footer-contact"
          flex="1"
          minW={0}
          direction="column"
          align={{
            base: "stretch",
            md: "stretch",
            lg: "center",
            xl: "center",
          }}
          justify="space-between"
          gap={{
            base: 3,
            md: 3,
            lg: 5,
            xl: 5,
          }}
          pr={{
            base: 0,
            md: 4,
            lg: 4,
            xl: 10,
          }}
        >
          {/* MOBILE CONTACT - UNCHANGED */}
          <Box
            className="footer-mobile-contact"
            display={{ base: "block", md: "none" }}
          >
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

          {/* TABLET + DESKTOP CONTACT */}
          <Flex
            className="footer-tablet-contact"
            display={{
              base: "none",
              md: "flex",
            }}
            direction={{
              md: "column",
              lg: "row",
              xl: "row",
            }}
            align={{
              md: "flex-start",
              lg: "center",
              xl: "center",
            }}
            justify={{
              md: "center",
              lg: "space-between",
              xl: "space-between",
            }}
            gap={{
              md: 3,
              lg: 2,
              xl: 5,
            }}
            w="100%"
          >
            <Heading
              className="footer-contact-heading"
              as="h2"
              flexShrink={0}
              fontSize={{
                md: "20px",
                lg: "18px",
                xl: "26px",
              }}
              fontWeight="500"
              letterSpacing={{
                md: "2.5px",
                lg: "2px",
                xl: "4px",
              }}
              lineHeight="1.1"
            >
              CONTACT
            </Heading>

            <VStack
              className="footer-contact-list"
              align="stretch"
              spacing={{
                md: 2,
                lg: 3,
                xl: 4,
              }}
              minW={0}
              w={{
                md: "100%",
                lg: "auto",
                xl: "auto",
              }}
            >
              {contactLinks.map(({ label, email }) => (
                <Flex
                  className="footer-contact-row"
                  key={label}
                  direction="row"
                  align="center"
                  gap={{
                    md: 3,
                    lg: 2,
                    xl: 0,
                  }}
                  minW={0}
                >
                  <Text
                    className="footer-contact-label"
                    minW={{
                      md: "85px",
                      lg: "65px",
                      xl: "100px",
                    }}
                    flexShrink={0}
                    fontSize={{
                      md: "10px",
                      lg: "12px",
                      xl: "10px",
                    }}
                    fontWeight="600"
                    letterSpacing={{
                      md: "1.2px",
                      lg: "0.8px",
                      xl: "1.5px",
                    }}
                    color="gray.500"
                  >
                    {label}
                  </Text>

                  <Link
                    className="footer-contact-email"
                    href={`mailto:${email}`}
                    fontSize={{
                      md: "12px",
                      lg: "14px",
                      xl: "13px",
                    }}
                    fontWeight="400"
                    letterSpacing={{
                      md: "0.1px",
                      lg: "0",
                      xl: "0.2px",
                    }}
                    color="white"
                    whiteSpace={{
                      md: "nowrap",
                      lg: "nowrap",
                      xl: "normal",
                    }}
                    overflowWrap={{
                      md: "normal",
                      lg: "normal",
                      xl: "anywhere",
                    }}
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
          className="footer-social"
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
            md: 4,
            lg: 5,
            xl: 10,
          }}
          gap={{
            base: 3,
            md: 5,
          }}
        >
          {/* SOCIAL ICONS */}
          <HStack
            className="footer-social-icons"
            spacing={{
              base: 5,
              md: 4,
              lg: 4,
              xl: 6,
            }}
            justify="center"
            flexWrap="wrap"
            rowGap={4}
            color="white"
          >
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                className="footer-social-link"
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
                  xl: "27px",
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
            className="footer-copyright"
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
