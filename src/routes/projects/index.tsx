import { createFileRoute, Link } from '@tanstack/react-router'
import projects from '@/data/projects'

export const Route = createFileRoute('/projects/')({
  component: ProjectsIndex,
})

function ProjectsIndex() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to="/projects/$projectId" params={{ projectId: project.id }}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
