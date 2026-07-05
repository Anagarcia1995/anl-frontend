import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { showToast } from "../utils/showToast";

import {
  Box,
  Input,
  VStack,
  Text
} from "@chakra-ui/react";

import {
  login,
  getCurrentUser
} from "../services/authService";

import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const toast = useToast();
  const { login: loginUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(
        email,
        password
      );

      localStorage.setItem(
        "token",
        data.token
      );

      const response =
        await getCurrentUser();
      loginUser(response.user);

      showToast(
        toast,
        "You're in.",
      );


      setTimeout(() => {
        navigate("/next-dates");
      }, 2500);

} catch (error) {
  const message =
    error.message === "Too many login attempts. Please try again later."
      ? error.message
      : "Wrong email or password."

  showToast(toast, message)
}
  };

  return (
    <Box
      maxW="420px"
      mx="auto"
      pt="120px"
      px={6}
    >
      <Text
        textAlign="center"
        fontSize="sm"
        letterSpacing="6px"
        color="white"
        mb={12}
      >
        ADMIN LOGIN
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack
          gap={6}
          align="stretch"
        >

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            bg="transparent"
            color="white"
            border="none"
            borderBottom="1px solid"
            borderColor="whiteAlpha.600"
            borderRadius="0"
            px={0}
            _placeholder={{
              color: "gray.600"
            }}
            _focusVisible={{
              boxShadow: "none",
              borderColor: "white"
            }}
          />

          <Box position="relative">

            <Input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              bg="transparent"
              color="white"
              border="none"
              borderBottom="1px solid"
              borderColor="whiteAlpha.600"
              borderRadius="0"
              px={0}
              _placeholder={{
                color: "gray.600"
              }}
              _focusVisible={{
                boxShadow: "none",
                borderColor: "white"
              }}
            />

<Box
  position="absolute"
  right="0"
  top="50%"
  transform="translateY(-50%)"
  cursor="pointer"
  color="gray.500"
  _hover={{
    color: "white"
  }}
  onClick={() =>
    setShowPassword(
      !showPassword
    )
  }
>
<Text
  fontSize="md"
  lineHeight="1"
  userSelect="none"
  color="white"
>
  {showPassword ? "◡" : "◠"}
</Text>
</Box>

          </Box>

          <Box
            as="button"
            type="submit"
            alignSelf="flex-end"
            border="1px solid"
            borderColor="white"
            px={5}
            py={2}
            fontSize="12px"
            letterSpacing="2px"
            textTransform="uppercase"
            transition="all 0.2s ease"
            _hover={{
              bg: "white",
              color: "black"
            }}
          >
            Login
          </Box>


        </VStack>
      </form>
    </Box>
  );
}

export default Login;