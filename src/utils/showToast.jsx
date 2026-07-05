import { Box } from "@chakra-ui/react"

export const showToast = (toast, message) => {
  toast({
    position: "top",
    duration: 1000,
    containerStyle: {
      marginTop: "250px"
    },
    render: () => (
      <Box
        mt={20}
        bg="white"
        color="black"
        border="1px solid"
        borderColor="whiteAlpha.300"
        px={6}
        py={4}
        fontSize="12px"
        letterSpacing="2px"
        textTransform="uppercase"
        textAlign="center"
      >
        {message}
      </Box>
    )
  })
}