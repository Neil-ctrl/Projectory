import { useState } from "react"
import Navbar from "../../components/Navbar"
import "../../styles/dashboard.css"

import Home from "./Home"
import Applications from "./Applications"
import Projects from "./Projects"
import Explore from "./Explore"

function StudentDashboard({ user }) {
  const [page, setPage] = useState("home")

  return (
    <div>
      <Navbar currentPage={page} setCurrentPage={setPage} />

      <div className="dashboard-container">
        {page === "home" && <Home user={user} />}
        {page === "applications" && <Applications />}
        {page === "projects" && <Projects />}
        {page === "explore" && <Explore />}
      </div>
    </div>
  )
}

export default StudentDashboard