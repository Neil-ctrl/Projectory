export type UserRole = "student" | "professor"

export interface User {
  id: number
  email: string
  role: UserRole
}

export interface Project {
  id: number
  title: string
  description: string
  professor_id: number
}

export interface Application {
  id: number
  project_id: number
  student_id: number
  status: "pending" | "accepted" | "rejected"
}