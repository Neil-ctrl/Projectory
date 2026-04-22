import "../../styles/dashboard.css"

function Home({ user }) {
  return (
    <div className="page">
      <h2>Home</h2>
      <div className="card">
        <p>Welcome, {user.name}</p>
      </div>
    </div>
  )
}

export default Home