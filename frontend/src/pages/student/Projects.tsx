import "../../styles/dashboard.css"

function Projects() {
  const dummyProjects = [
    {
      title: "IoT Smart Farming",
      professor: "Dr. Mehta",
      status: "Ongoing"
    },
    {
      title: "ML Stock Predictor",
      professor: "Dr. Singh",
      status: "Completed"
    }
  ]

  return (
    <div className="page">
      <h2>My Projects</h2>

      <div className="list">
        {dummyProjects.map((proj, idx) => (
          <div key={idx} className="list-card expandable">
            <h3>{proj.title}</h3>
            <p>Professor: {proj.professor}</p>
            <p>Status: {proj.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects