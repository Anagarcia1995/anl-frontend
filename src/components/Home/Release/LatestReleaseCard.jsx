
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export default function LatestReleaseCard({ release }) {
  const navigate = useNavigate();

  const goToRelease = () => {
    navigate(`/music/${release._id}`);
  };

  return (
    <Flex
      direction="row"
      w="100%"
      h={{ base: "100%", md: "100%" }}
      minH={0}
      minW={0}
      bg="#080808"
      color="white"
      overflow="hidden"
      cursor="pointer"
      role="link"
      tabIndex={0}
      onClick={goToRelease}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          goToRelease();
        }
      }}
      transition={{ base: "none", md: "background .25s ease" }}
      _hover={{
        bg: { base: "#080808", md: "#151515" },
      }}
    >
      {/* INFORMATION */}
      <Flex
        order={{ base: 2, md: 1 }}
        direction="column"
        justify="space-between"
        w={{
          base: "55%",
          md: "30%",
        }}
        flexShrink={0}
        minW={0}
        px={{
          base: 3,
          md: 3,
          lg: 4,
        }}
        py={{
          base: 5,
          md: 3,
          lg: 4,
        }}
      >
        {/* TOP INFORMATION */}
        <Box>
          <Text
            display={{ base: "none", md: "block" }}
            fontFamily="'Space Grotesk', Arial, sans-serif"
            fontSize={{ md: "9px", lg: "10px" }}
            fontWeight="700"
            letterSpacing="0.16em"
            textTransform="uppercase"
            mb={{
              md: 3,
              lg: 4,
            }}
          >
            LATEST RELEASE
          </Text>

          <Heading
            as="h3"
            mt={{ base: 2, md: 0 }}
            fontFamily="'Bebas Neue', Impact, sans-serif"
            fontWeight="400"
            fontSize={{
              base: "clamp(31px, 7vw, 46px)",
              md: "clamp(30px, 3vw, 46px)",
              lg: "clamp(42px, 3.8vw, 62px)",
            }}
            lineHeight="0.95"
            textTransform="uppercase"
            overflowWrap="anywhere"
          >
            {release.title}
          </Heading>

          <Text
            mt={{ base: 1, md: 2 }}
            fontFamily="'Space Grotesk', Arial, sans-serif"
            fontSize={{
              base: "12px",
              md: "10px",
              lg: "16px",
            }}
            fontWeight="600"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color="gray.300"
            overflowWrap="anywhere"
          >
            {release.artist}
          </Text>

          {/* MOBILE LABEL */}
          {release.label && (
            <Text
              display={{ base: "block", md: "none" }}
              mt={5}
              fontFamily="'Space Grotesk', Arial, sans-serif"
              fontSize="12px"
              fontWeight="400"
              letterSpacing="0.04em"
              lineHeight="1.4"
              color="gray.300"
              overflowWrap="anywhere"
            >
              {release.label}
            </Text>
          )}

          {/* DESKTOP LABEL */}
          {release.label && (
            <Text
              display={{ base: "none", md: "block" }}
              mt={{ md: 4, lg: 5 }}
              fontFamily="'Space Grotesk', Arial, sans-serif"
              fontSize={{ md: "11px", lg: "13px" }}
              color="gray.300"
              letterSpacing="0.04em"
              lineHeight="1.4"
              overflowWrap="anywhere"
            >
              {release.label}
            </Text>
          )}
        </Box>

        {/* EXPLORE */}
        <Box>
          <Text
            display="inline-block"
            fontFamily="'Space Grotesk', Arial, sans-serif"
            fontSize="12px"
            fontWeight="700"
            letterSpacing="0.13em"
            textTransform="uppercase"
            borderBottom="1px solid white"
            pb={1}
            transition={{
              base: "none",
              md: "opacity .2s ease",
            }}
            _hover={{
              opacity: { base: 1, md: 0.6 },
            }}
          >
            EXPLORE
          </Text>
        </Box>
      </Flex>

      {/* COVER */}
      <Flex
        order={{ base: 1, md: 2 }}
        w={{
          base: "45%",
          md: "70%",
        }}
        flexShrink={0}
        minW={0}
        minH={0}
        align="center"
        justify="center"
        px={{
          base: 2,
          md: 3,
          lg: 4,
        }}
        py={{
          base: 4,
          md: 3,
          lg: 4,
        }}
      >
        <Box
          position="relative"
          w={{
            base: "100%",
            md: "100%",
          }}
          maxW={{
            base: "100%",
            md: "360px",
          }}
          maxH={{
            base: "none",
            md: "calc(400px - 32px)",
          }}
          aspectRatio={1}
          flexShrink={1}
          sx={{
            "@media (min-width: 48em)": {
              width: "min(100%, 360px, calc(400px - 32px))",
            },
          }}
        >
          <Image
            className="latest-cover"
            src={release.coverImage}
            alt={release.title}
            display="block"
            w="100%"
            h="100%"
            objectFit="contain"
          />

          {/* MOBILE BANNER */}
          <Flex
            display={{ base: "flex", md: "none" }}
            position="absolute"
            top={0}
            right={0}
            bg="white"
            color="#080808"
            px={{ base: 2, sm: 3 }}
            py="5px"
            align="center"
            justify="center"
            zIndex={2}
          >
            <Text
              fontFamily="'Space Grotesk', Arial, sans-serif"
              fontSize={{
                base: "8px",
                sm: "9px",
              }}
              fontWeight="700"
              letterSpacing="0.08em"
              lineHeight="1"
              whiteSpace="nowrap"
            >
              LATEST RELEASE
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
