import { useState } from "react"

function Login({ setIsLogin, setIsAuthenticated }) {
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            placeholder="Email" 
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {error && <div style={{color: "red"}}>{error}</div>}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        <button onClick={() => setIsLogin(false)}>Go to Register a new account</button>
      </div>
    </div>
  )
}

export default Login