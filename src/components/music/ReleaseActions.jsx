import { Flex, Link, Text } from "@chakra-ui/react";

import ReleaseAdminActions from "./ReleaseAdminActions";

export default function ReleaseActions({
  release,
  isEditing,
  loadRelease,
  setIsEditing,
  onDelete,
}) {
  return (
    <Flex
      w="100%"
      align="center"
      justify="flex-end"
      gap={3}
      minW={0}
    >
      <ReleaseAdminActions
        isEditing={isEditing}
        onEdit={() => {
          loadRelease(release);
          setIsEditing(true);
        }}
        onDelete={onDelete}
      />

      {!isEditing && release.beatport && (
        <Link
          href={release.beatport}
          isExternal
          display="inline-flex"
          alignItems="center"
          flexShrink={0}
          color="white"
          textDecoration="none"
          transition="color .25s ease"
          _hover={{
            color: "gray.400",
            textDecoration: "none",
          }}
          _focusVisible={{
            outline: "1px solid white",
            outlineOffset: "5px",
          }}
        >
          <Text
            fontSize={{ base: "11px", md: "12px" }}
            fontWeight="600"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            BUY RELEASE
          </Text>
        </Link>
      )}
    </Flex>
  );
}