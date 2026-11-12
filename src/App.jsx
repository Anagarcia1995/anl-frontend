import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import HomePage from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import NextDates from "./pages/NextDates";
import MusicPage from "./pages/MusicPage";
import ReleasePreviewPage from "./pages/ReleasePreviewPage";
import VideoPage from "./pages/VideoPage";

// Animación global para todas las páginas
const pageFadeAnimation = {
  "@keyframes pageFadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
};

function AppContent() {
  const location = useLocation();

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="black"
      color="white"
      position="relative"
    >
      <Header />

      {/* MAIN CONTENT */}
      <Box
        as="main"
        flex="1"
        minH={0}
        position="relative"
        zIndex={0}
      >
        <Box
          key={location.pathname}
          animation="pageFadeIn 0.25s ease-out both"
          sx={pageFadeAnimation}
          minH="100%"
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/next-dates"
              element={<NextDates />}
            />

            <Route
              path="/login"
              element={
                <Box p={4}>
                  <Login />
                </Box>
              }
            />

            <Route
              path="/music"
              element={
                <Box p={4}>
                  <MusicPage />
                </Box>
              }
            />

            <Route
              path="/music/:id"
              element={
                <Box p={4}>
                  <ReleasePreviewPage />
                </Box>
              }
            />

            <Route
              path="/video"
              element={
                <Box p={4}>
                  <VideoPage />
                </Box>
              }
            />
          </Routes>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box
        position="relative"
        zIndex={1}
        flexShrink={0}
        bg="black"
      >
        <Footer />
      </Box>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;