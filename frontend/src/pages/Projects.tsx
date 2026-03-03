import type { Project } from "../types/models"

const mockProjects: Project[] = [
  {
    id: 1,
    title: "AI Research Assistant",
    description: "Work on ML models with a professor",
    professor_id: 42,
  },
]

function Projects() {
  return (
    <div>
      <h1>Available Projects</h1>

      {mockProjects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button>Apply</button>
        </div>
      ))}
    </div>
  )
}

export default Projects