import { useState } from "react"

function Register({ setIsLogin }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("student")
  const [password, setPassword] = useState("")

  return (
    <div>
        <h1>Register</h1>
        <div>
            <form>
                <div>
                    <input 
                      placeholder="Name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                      placeholder="Institute Email ID" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <select 
                      value={role} 
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="student">Student</option>
                      <option value="professor">Professor</option>
                    </select>
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
                    <button>Register</button>
                </div>
            </form>
            <div>
                <button onClick={() => setIsLogin(true)}>Back to Login</button>
            </div>
        </div>
    </div>
  )
}

export default Register