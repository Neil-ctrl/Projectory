// import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Projects from "./pages/Projects"
import Dashboard from "./pages/Dashboard"
import type { UserRole } from "./types/models"

function App() {
  // TEMP auth state (will later come from backend)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [role, setRole] = useState<UserRole>("student")

  return (
    <>
      {(!isAuthenticated) ? (isLogin ? <Login setIsLogin={setIsLogin} setIsAuthenticated={setIsAuthenticated}/> : <Register setIsLogin={setIsLogin}/>) : <Dashboard />}
    </>
  )
}

export default App