import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"

import App from "./App.jsx"
import { AuthProvider } from "./context/AuthContext"

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <ChakraProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>
)