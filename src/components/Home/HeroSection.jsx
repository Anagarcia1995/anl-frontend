import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const mobileDescription =
  "ART NO LOGIA is a DJ and producer duo from Málaga, blending grooves, hypnotic rhythms and forward-thinking electronic sounds to create their identity on the dancefloor.";

const desktopDescription =
  "ART NO LOGIA is a DJ and production duo from Málaga, driven by a shared passion for electronic music. Blending groove, energy and forward-thinking sounds, they create experiences that go beyond the booth and connect directly with the dancefloor.";

export default function HeroSection() {
  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      minH={{
        base: "auto",
        md: "580px",
        lg: "620px",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      isolation="isolate"
      pt={{
        base: "50px",
        md: "115px",
        lg: "130px",
      }}
      pb={0}
      px={0}
    >
      {/* BACKGROUND BLUR */}
      <Box
        position="absolute"
        inset="-15px"
        zIndex={-2}
        backgroundImage="url('/images/hero5.png')"
        backgroundSize="cover"
        backgroundPosition="center 30%"
        filter="blur(6px)"
        transform="scale(1.02)"
        pointerEvents="none"
      />

      {/* BACKGROUND OVERLAY */}
      <Box
        position="absolute"
        inset={0}
        zIndex={-1}
        bg="rgba(0,0,0,0.35)"
        pointerEvents="none"
      />

      {/* HERO CONTENT */}
      <Box
        position="relative"
        zIndex={1}
        w={{
          base: "90%",
          md: "85%",
          lg: "80%",
          xl: "78%",
        }}
        maxW="1120px"
mt={{
  base: 14,
  md: 10,
  lg: 12,
}}
mb={{
  base: 8,
  md: 10,
  lg: 12,
}}
      >
        {/* MAIN CARD */}
        <Flex
          direction="row"
          w="100%"
          h={{
            base: "270px",
            sm: "310px",
            md: "390px",
          }}
          borderRadius={{
            base: "30px",
            md: "16px",
          }}
          overflow="hidden"
          boxShadow="0 20px 65px rgba(0,0,0,0.25)"
          align="stretch"
        >
          {/* LEFT IMAGE */}
          <Box
            position="relative"
            w={{ base: "50%", md: "60%" }}
            h="100%"
            flexShrink={0}
            overflow="hidden"
            bg="#111"
          >
            <Image
              src="/images/hero5.png"
              alt="ART NO LOGIA DJ duo"
              position="absolute"
              inset={0}
              w="100%"
              h="100%"
              objectFit="cover"
transform={{
  base: "scale(1.35) translateY(-10%)",
  md: "scale(1)",
}}
transformOrigin="center center"
              objectPosition={{
                base: "center 30%",
                md: "center 50%",
                lg: "center 50%",
              }}
            />

            {/* IMAGE GRADIENT */}
            <Box
              display={{ base: "none", md: "block" }}
              position="absolute"
              inset={0}
              bgGradient="linear(to-b, transparent 35%, rgba(0,0,0,0.62) 100%)"
            />
          </Box>

          {/* RIGHT INFO */}
          <Flex
            w={{ base: "50%", md: "40%" }}
            h="100%"
            bg="#FFFFFF"
            color="#080808"
            direction="column"
            justify="space-between"
            px={{
              base: 3,
              sm: 4,
              md: 5,
              lg: 7,
              xl: 8,
            }}
            py={{
              base: 6,
              sm: 5,
              md: 6,
              lg: 7,
            }}
            minW={0}
            overflow="hidden"
          >
            <Box>
              {/* MOBILE TITLE */}
              <Heading
                as="h1"
                display={{ base: "block", md: "none" }}
                fontFamily="'Bebas Neue', Impact, sans-serif"
                fontWeight="400"
                fontSize={{
                  base: "clamp(28px, 10.5vw, 42px)",
                  sm: "clamp(34px, 7vw, 48px)",
                }}
                lineHeight="0.9"
                letterSpacing="-0.02em"
                whiteSpace="nowrap"
                mb={4}
              >
                MUSIC FROM
                <br />
                THE FUTURE.
              </Heading>

              {/* DESKTOP TITLE */}
              <Heading
                as="h1"
                display={{ base: "none", md: "block" }}
                fontFamily="'Bebas Neue', Impact, sans-serif"
                fontWeight="400"
                fontSize={{
                  md: "clamp(36px, 4vw, 60px)",
                  lg: "clamp(48px, 4.5vw, 72px)",
                  xl: "clamp(58px, 7vw, 82px)",
                }}
                lineHeight="0.92"
                letterSpacing="-0.015em"
                whiteSpace="nowrap"
                mb={4}
              >
                MUSIC FROM
                <br />
                THE FUTURE.
              </Heading>

              {/* DIVIDER */}
              <Box
                w="100%"
                h="1px"
                bg="rgba(0,0,0,0.25)"
                mb={{ base: 4, md: 4 }}
              />

              {/* MOBILE DESCRIPTION */}
              <Text
                display={{ base: "block", md: "none" }}
                fontFamily="'Space Grotesk', Arial, sans-serif"
                fontSize={{
                  base: "12px",
                  sm: "11px",
                }}
                lineHeight="1.45"
                color="#252525"
                textAlign="justify"
                textJustify="inter-word"
                hyphens="auto"
                lang="en"
              >
                {mobileDescription}
              </Text>

              {/* DESKTOP DESCRIPTION */}
              <Text
                display={{ base: "none", md: "block" }}
                fontFamily="'Space Grotesk', Arial, sans-serif"
                fontSize={{
                  md: "11px",
                  lg: "14px",
                }}
                lineHeight="1.55"
                color="#252525"
                textAlign="justify"
                textJustify="inter-word"
                hyphens="auto"
                lang="en"
              >
                {desktopDescription}
              </Text>
            </Box>

            {/* DESKTOP BOTTOM */}
            <Flex
              display={{ base: "none", md: "flex" }}
              justify="center"
              align="center"
              flexWrap="wrap"
              gap={{ md: 2, lg: 16 }}
              borderTop="1px solid rgba(0,0,0,0.25)"
              pt={3}
            >
              {["LISTEN", "FEEL", "CONNECT"].map((word) => (
                <Text
                  key={word}
                  fontSize={{
                    base: "xs",
                    lg: "md",
                  }}
                  letterSpacing="4px"
                  textTransform="uppercase"
                  transition="all .4s ease"
                  fontWeight={500}
                  whiteSpace="nowrap"
                >
                  {word}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Flex>

        {/* MOBILE - TEXT ON BLURRED BACKGROUND */}
        <Flex
          display={{ base: "flex", md: "none" }}
          w="100%"
          justify="center"
          align="center"
          gap={{ base: 8, sm: 7 }}
          mt={6}
          px={2}
        >
          {["LISTEN", "FEEL", "CONNECT"].map((word) => (
            <Text
              key={word}
              fontSize={{
                base: "xs",
                lg: "md",
              }}
              letterSpacing="4px"
              textTransform="uppercase"
              transition="all .4s ease"
              fontWeight={500}
              color="#FFFFFF"
              textShadow="0 2px 8px rgba(0,0,0,0.65)"
              whiteSpace="nowrap"
            >
              {word}
            </Text>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}