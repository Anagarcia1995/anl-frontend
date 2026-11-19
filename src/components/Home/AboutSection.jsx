
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const IMAGE = "/images/hero9.png";

export default function AboutSection() {
  return (
    <>
      {/* =========================
          MOBILE ABOUT - UNCHANGED
      ========================= */}
      <Box
        as="section"
        display={{ base: "block", md: "none" }}
        w="100%"
        mt={0}
        mb={4}
        color="#FFFFFF"
        overflow="hidden"
      >
        {/* TOP EDITORIAL CONTENT */}
        <Box
          px={4}
          pt={9}
          pb={8}
          textAlign="center"
        >
          <Heading
            as="h2"
            fontFamily="'Roboto Condensed', 'Arial Narrow', sans-serif"
            fontSize="clamp(42px, 10vw, 64px)"
            fontWeight="900"
            lineHeight="0.81"
            letterSpacing="-0.055em"
            textTransform="uppercase"
            mb={1}
          >
            NO RUSH
            <br />
            ALL NIGHT LONG
          </Heading>

          <Text
            maxW="360px"
            mx="auto"
            fontFamily="'Space Grotesk', Arial, sans-serif"
            fontSize="13px"
            lineHeight="1.55"
            color="rgba(255,255,255,0.78)"
          >
            A chance to take their time, explore different
            sounds and build a journey at the dancefloor
            from the first track to the last.
          </Text>
        </Box>

        {/* HORIZONTAL IMAGE */}
        <Box
          position="relative"
          w="100%"
          h={{
            base: "220px",
            sm: "270px",
          }}
          overflow="hidden"
          bg="#111"
        >
          <Image
            src={IMAGE}
            alt="ART NO LOGIA"
            position="absolute"
            inset={0}
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center 43%"
            filter="grayscale(1)"
          />

          <Box
            position="absolute"
            inset={0}
            bg="rgba(0,0,0,0.10)"
            pointerEvents="none"
          />
        </Box>

        {/* OVERSIZED MAIN TITLE */}
        <Box
          position="relative"
          w="100%"
          mt="-27px"
          pt={0}
          pb={0}
          overflow="hidden"
          zIndex={2}
        >
          <Text
            as="div"
            fontFamily="'Roboto Condensed', 'Arial Narrow', sans-serif"
            fontWeight="600"
            fontSize="clamp(52px, 15vw, 110px)"
            lineHeight="0.88"
            letterSpacing="-0.065em"
            wordSpacing="0.16em"
            whiteSpace="nowrap"
            textAlign="center"
            color="white"
            transform="scaleX(1)"
            transformOrigin="center bottom"
          >
            ART NO LOGIA
          </Text>
        </Box>

        {/* BOTTOM EDITORIAL COLUMNS */}
        <SimpleGrid
          columns={2}
          spacing={5}
          px={4}
          pt={5}
          pb={9}
          alignItems="start"
        >
          <Text
            fontFamily="'Space Grotesk', Arial, sans-serif"
            fontSize="13px"
            lineHeight="1.6"
            color="rgba(255,255,255,0.88)"
          >
            ART NO LOGIA is a DJ and producer duo
            driven by curiosity, instinct and a
            passion for exploring new sounds
            and pushing their musical boundaries.
          </Text>

          <Text
            fontFamily="'Space Grotesk', Arial, sans-serif"
            fontSize="13px"
            lineHeight="1.6"
            color="rgba(255,255,255,0.88)"
          >
            From{" "}
            <Text as="span" fontWeight="700">
              Cova Santa Ibiza
            </Text>
            {" "}and{" "}
            <Text as="span" fontWeight="700">
              INPUT Barcelona
            </Text>
            {" "}to{" "}
            <Text as="span" fontWeight="700">
              Fabrik Madrid
            </Text>
            {" "}and{" "}
            <Text as="span" fontWeight="700">
              Lost Beach Ecuador
            </Text>
            , their sound travels worldwide,
            reaching audiences across the globe.
          </Text>
        </SimpleGrid>
      </Box>

      {/* =========================
          TABLET + DESKTOP ABOUT
          MD: IPAD MINI
          LG: IPAD PRO
          XL: DESKTOP ORIGINAL
      ========================= */}
      <Box
        as="section"
        display={{ base: "none", md: "block" }}
        position="relative"
        w="100%"
        h={{
          md: "560px",
          lg: "670px",
        }}
        mt={{
          md: 10,
          lg: 16,
        }}
        mb={{
          md: 10,
          lg: 20,
        }}
        bg="#080808"
        color="white"
        overflow="hidden"
        isolation="isolate"
      >
        {/* BACKGROUND */}
        <Image
          src={IMAGE}
          alt=""
          aria-hidden="true"
          position="absolute"
          inset={0}
          zIndex={-2}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center 42%"
          filter="grayscale(1)"
        />

        {/* DARK OVERLAY */}
        <Box
          position="absolute"
          inset={0}
          zIndex={-1}
          bg="rgba(0,0,0,0.46)"
          pointerEvents="none"
        />

        {/* MAIN CONTENT */}
        <Flex
          position="relative"
          zIndex={2}
          w="100%"
          maxW="1500px"
          h="100%"
          mx="auto"
          px={{
            md: 6,
            lg: 8,
            xl: 8,
            "2xl": 0,
          }}
          pt={{
            md: 6,
            lg: 8,
            xl: 9,
          }}
          pb={{
            md: "135px",
            lg: "155px",
            xl: "130px",
          }}
          direction="row"
          justify="space-between"
          align="flex-start"
          gap={{
            md: 8,
            lg: 12,
            xl: 20,
          }}
        >
          {/* =========================
              LEFT COLUMN
          ========================= */}
          <Box
            w={{
              md: "22%",
              lg: "20%",
              xl: "23%",
            }}
            maxW={{
              md: "267px",
              lg: "280px",
            }}
            minW={0}
            alignSelf="flex-start"
          >
            {/* INTRO */}
            <Text
              fontSize={{
                md: "13px",
                lg: "15px",
                xl: "16px",
              }}
              lineHeight={{
                md: "1.48",
                lg: "1.55",
                xl: "1.75",
              }}
              color="rgba(255,255,255,0.94)"
              mb={{
                md: 4,
                lg: 5,
                xl: 8,
              }}
            >
              ART NO LOGIA is a DJ and producer duo
              with a sound shaped by curiosity, instinct
              and a constant desire to explore.
            </Text>

            {/* JOURNEY */}
            <Text
              fontSize={{
                md: "12px",
                lg: "14px",
                xl: "15px",
              }}
              lineHeight={{
                md: "1.5",
                lg: "1.55",
                xl: "1.8",
              }}
              color="rgba(255,255,255,0.8)"
              mb={{
                md: 4,
                lg: 5,
                xl: 8,
              }}
            >
              From the dancefloors of{" "}
              <Text
                as="span"
                fontSize="1.07em"
                fontWeight="700"
                color="white"
              >
                Cova Santa Ibiza
              </Text>
              {" "}and{" "}
              <Text
                as="span"
                fontSize="1.07em"
                fontWeight="700"
                color="white"
              >
                INPUT Barcelona
              </Text>
              {" "}to{" "}
              <Text
                as="span"
                fontSize="1.07em"
                fontWeight="700"
                color="white"
              >
                Fabrik Madrid
              </Text>
              ,{" "}
              <Text
                as="span"
                fontSize="1.07em"
                fontWeight="700"
                color="white"
              >
                Lost Beach Ecuador
              </Text>
              {" "}and clubs across Europe and Latin
              America, their journey continues to evolve
              with every new destination.
            </Text>

            {/* CLOSING TEXT */}
            <Text
              fontSize={{
                md: "12px",
                lg: "14px",
                xl: "15px",
              }}
              lineHeight={{
                md: "1.5",
                lg: "1.55",
                xl: "1.8",
              }}
              color="rgba(255,255,255,0.88)"
            >
              Always moving forward, but staying true
              to what brought them together: a genuine
              love for music.
            </Text>
          </Box>

          {/* =========================
              RIGHT COLUMN
          ========================= */}
          <Box
            w={{
              md: "24%",
              lg: "22%",
              xl: "25.2%",
            }}
            maxW="306px"
            minW={0}
            alignSelf="flex-start"
            mt={{
              md: 0,
              lg: 0,
              xl: 0,
            }}
            textAlign="left"
          >
            {/* EDITORIAL HEADING */}
            <Text
              fontSize={{
                md: "19px",
                lg: "22px",
                xl: "24px",
              }}
              fontWeight="700"
              lineHeight={{
                md: "1.2",
                lg: "1.25",
                xl: "1.3",
              }}
              letterSpacing="-0.5px"
              mb={{
                md: 3,
                lg: 3,
                xl: 4,
              }}
            >
              Every night tells
              <br />
              a different story.
            </Text>

            {/* EDITORIAL DESCRIPTION */}
            <Text
              fontSize={{
                md: "12px",
                lg: "14px",
                xl: "15px",
              }}
              lineHeight={{
                md: "1.5",
                lg: "1.55",
                xl: "1.8",
              }}
              color="rgba(255,255,255,0.86)"
              mb={{
                md: 4,
                lg: 5,
                xl: 8,
              }}
            >
              Among the experiences they enjoy most
              are their{" "}
              <Text
                as="span"
                fontSize="1.09em"
                fontWeight="700"
                color="white"
              >
                All Night Long sessions
              </Text>
              {" "}— a chance to take their time,
              explore different sounds and build a
              journey from the first track to the last.
            </Text>

            {/* NO RUSH */}
            <Heading
              as="h3"
              fontFamily="'Roboto Condensed', 'Arial Narrow', sans-serif"
              fontSize={{
                md: "29px",
                lg: "35px",
                xl: "38px",
              }}
              fontWeight="700"
              lineHeight="1.05"
              letterSpacing="-0.8px"
              textTransform="uppercase"
              mb={{
                md: 3,
                lg: 3,
                xl: 4,
              }}
            >
              NO RUSH.
              <br />
              NO FIXED FORMULA.
            </Heading>

            {/* CLOSING DESCRIPTION */}
            <Text
              fontSize={{
                md: "12px",
                lg: "13px",
                xl: "14px",
              }}
              lineHeight={{
                md: "1.45",
                lg: "1.55",
                xl: "1.7",
              }}
              color="rgba(255,255,255,0.8)"
            >
              Just music, freedom and a dancefloor
              to share it with, where everyone
              can truly belong.
            </Text>
          </Box>
        </Flex>

        {/* =========================
            OVERSIZED MAIN TITLE
        ========================= */}
        <Box
          position="absolute"
          zIndex={3}
          bottom={{
            md: "-6px",
            lg: "-10px",
          }}
          left="0"
          w="100%"
          px={3}
          pointerEvents="none"
        >
          <Text
            as="div"
            fontFamily="'Roboto Condensed', 'Arial Narrow', sans-serif"
            fontWeight="900"
            fontStretch="condensed"
            fontSize="clamp(115px, 16.2vw, 270px)"
            lineHeight="0.78"
            letterSpacing="-0.075em"
            wordSpacing="0.2em"
            whiteSpace="nowrap"
            textAlign="center"
            color="white"
            transform="scaleX(1.04)"
            transformOrigin="center bottom"
          >
            ART NO LOGIA
          </Text>
        </Box>
      </Box>
    </>
  );
}
