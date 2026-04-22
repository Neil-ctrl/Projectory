// import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Projects from "./pages/student/Projects"
import StudentDashboard from "./pages/student/StudentDashboard"
import type { UserRole } from "./types/models"

function App() {
  // TEMP auth state (will later come from backend)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [role, setRole] = useState<UserRole>("student")
  const [user, setUser] = useState(null)

  return (
    <>
      {(!isAuthenticated) ? (isLogin ? <Login setIsLogin={setIsLogin} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/> : <Register setIsLogin={setIsLogin}/>) : user?.role === "student" ? (<StudentDashboard user={user} />) : <div>Prof Dashboard goes here</div>}
    </>
  )
}

export default App