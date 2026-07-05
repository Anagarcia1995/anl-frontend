import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import NextDates from "./pages/NextDates"
import OldDates from "./pages/OldDates"
import { Box } from "@chakra-ui/react"

function App() {

  return (
    <BrowserRouter>
      <Box minH="100vh" display="flex" flexDirection="column" bg="black" color="white">

        <Header />

        <Box flex="1" p={4}>
          <Routes>
            <Route path="/" element={<Navigate to="/next-dates" />} />
            <Route path="/next-dates" element={<NextDates />} />
            <Route path="/old-dates" element={<OldDates />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App