import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

import { getCurrentUser } from "../services/authService"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        setLoading(false)
        return
      }

      try {
        const response = await getCurrentUser()
        setUser(response.user)
      } catch (error) {
        console.error(error)
        localStorage.removeItem("token")
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  const login = (user) => {
    setUser(user)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin: user?.role === "admin",
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)