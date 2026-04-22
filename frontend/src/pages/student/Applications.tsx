import "../../styles/dashboard.css"

function Applications() {
  const dummyApps = [
    {
      title: "AI-based Traffic Control",
      professor: "Dr. Sharma",
      date: "2026-04-10",
      status: "Pending"
    },
    {
      title: "IoT Smart Farming",
      professor: "Dr. Mehta",
      date: "2026-04-05",
      status: "Accepted"
    },
    {
      title: "Blockchain Voting System",
      professor: "Dr. Rao",
      date: "2026-03-28",
      status: "Rejected"
    }
  ]

  return (
    <div className="page">
      <h2>My Applications</h2>

      <div className="list">
        {dummyApps.map((app, idx) => (
          <div key={idx} className="list-card">
            <h3>{app.title}</h3>
            <p>Professor: {app.professor}</p>
            <p>Date: {app.date}</p>
            <span className={`status ${app.status.toLowerCase()}`}>
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Applications