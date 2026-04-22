import { useState } from "react"
import "../styles/auth.css"

function Register({ setIsLogin }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("student")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          role,
          password
        })
      })

      const data = await response.json()
      console.log(data)

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input 
            placeholder="Institute Email ID" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>

          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <button 
          className="secondary-btn"
          onClick={() => setIsLogin(true)}
        >
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default Register