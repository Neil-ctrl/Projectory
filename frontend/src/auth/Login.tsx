import { useState } from "react"

function Login({ setIsLogin, setIsAuthenticated }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent form submission and page refresh
    if (username == "admin" && password == "123") {
      setIsAuthenticated(true)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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