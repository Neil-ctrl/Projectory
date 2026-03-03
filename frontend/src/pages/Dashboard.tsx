import type { UserRole } from "../types/models"

interface Props {
  role: UserRole
}

function Dashboard({ role }: Props) {
  return (
    <div>
      <h1>Dashboard</h1>

      {role === "professor" ? (
        <p>Your posted projects</p>
      ) : (
        <p>Your applications</p>
      )}
    </div>
  )
}

export default Dashboard