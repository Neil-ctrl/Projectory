import "../../styles/dashboard.css"

function Explore() {
  const dummyExplore = [
    {
      title: "Computer Vision for Surveillance",
      professor: "Dr. Iyer"
    },
    {
      title: "5G Network Optimization",
      professor: "Dr. Gupta"
    },
    {
      title: "Autonomous Drone Navigation",
      professor: "Dr. Nair"
    }
  ]

  return (
    <div className="page">
      <h2>Explore Projects</h2>

      <input className="search" placeholder="Search projects..." />

      <div className="list">
        {dummyExplore.map((proj, idx) => (
          <div key={idx} className="list-card">
            <h3>{proj.title}</h3>
            <p>Professor: {proj.professor}</p>
            <button className="apply-btn">Apply</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore