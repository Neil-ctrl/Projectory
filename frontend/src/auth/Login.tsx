import { useState } from "react"
import "../styles/auth.css"

function Login({ setIsLogin, setIsAuthenticated, setUser }) {
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: userEmail,
          password: password
        }),
      })

      const data = await response.json()

      if (data.message === "Login successful") {
        setUser({
          id: data.user_id,
          role: data.role,
          email: userEmail,
          name: data.name
        })
        console.log(data)
        setIsAuthenticated(true)
      }
      else {
        setError(data.message)
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to connect to server")
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Email" 
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="error">{error}</div>}

          <button type="submit">Login</button>
        </form>

        <button 
          className="secondary-btn"
          onClick={() => setIsLogin(false)}
        >
          Go to Register
        </button>
      </div>
    </div>
  )
}

export default Login