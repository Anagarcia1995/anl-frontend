import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import NextDates from "./pages/NextDates"
import OldDates from "./pages/OldDates"
import MusicPage from "./pages/MusicPage"
import ReleasePreviewPage from "./pages/ReleasePreviewPage"
import VideoPage from "./pages/VideoPage"
import { Box } from "@chakra-ui/react"

function App() {

  return (
    <BrowserRouter>
      <Box minH="100vh" display="flex" flexDirection="column" bg="black" color="white">

        <Header />

        <Box flex="1" p={4}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/next-dates" element={<NextDates />} />
            <Route path="/old-dates" element={<OldDates />} />
            <Route path="/login" element={<Login />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/music/:id" element={<ReleasePreviewPage />} />
            <Route path="/video" element={<VideoPage />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App