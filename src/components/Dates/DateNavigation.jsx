
import { Flex, Text, Box } from "@chakra-ui/react";

export default function DateNavigation({
  activeTab = "next",
  onTabChange,
}) {
  const tabs = [
    { id: "next", label: "Next Dates" },
    { id: "old", label: "Old Dates" },
  ];

  return (
    <Flex
      w="100%"
      justify="flex-start"
      align="center"
      mb={{
        base: 3,
        md: 5,
      }}
    >
      {/* NAVIGATION CARD */}
      <Flex
        align="center"
        justify="center"
        gap={{
          base: 4,
          md: 5,
        }}
        w="fit-content"
        px={{
          base: 4,
          md: 5,
        }}
        py={{
          base: 3,
          md: 3,
        }}
        border="1px solid rgba(255,255,255,0.65)"
        borderRadius={{
          base: "18px",
          md: "22px",
        }}
        bg="rgba(0,0,0,0.35)"
        backdropFilter="blur(5px)"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <Flex
              key={tab.id}
              align="center"
              gap={{
                base: 4,
                md: 5,
              }}
            >
              {/* VERTICAL DIVIDER */}
              {index > 0 && (
                <Box
                  w="1px"
                  h="22px"
                  bg="rgba(255,255,255,0.45)"
                  flexShrink={0}
                />
              )}

              {/* TAB */}
              <Box
                as="button"
                type="button"
                onClick={() => onTabChange(tab.id)}
                cursor="pointer"
                bg="transparent"
                border="none"
                borderBottom={
                  isActive
                    ? "2px solid white"
                    : "2px solid transparent"
                }
                pb={2}
                transition="all 0.2s ease"
                _hover={{
                  borderColor: "white",
                  "& > p": {
                    color: "white",
                  },
                }}
              >
                <Text
                  fontSize={{
                    base: "12px",
                    md: "14px",
                  }}
                  fontWeight={isActive ? "600" : "500"}
                  letterSpacing="2px"
                  whiteSpace="nowrap"
                  color={
                    isActive ? "white" : "gray.300"
                  }
                  transition="color 0.2s ease"
                >
                  {tab.label}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
