function Navbar({ currentPage, setCurrentPage }) {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Projectory</div>

      <div style={styles.links}>
        <span
          style={currentPage === "home" ? styles.active : styles.link}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </span>

        <span
          style={currentPage === "applications" ? styles.active : styles.link}
          onClick={() => setCurrentPage("applications")}
        >
          My Applications
        </span>

        <span
          style={currentPage === "projects" ? styles.active : styles.link}
          onClick={() => setCurrentPage("projects")}
        >
          My Projects
        </span>

        <span
          style={currentPage === "explore" ? styles.active : styles.link}
          onClick={() => setCurrentPage("explore")}
        >
          Explore
        </span>
      </div>
    </div>
  )
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  links: {
    display: "flex",
    gap: "20px",
    cursor: "pointer",
  },
  link: {
    color: "#555",
  },
  active: {
    color: "#4f46e5",
    fontWeight: "bold",
  }
}

export default Navbar