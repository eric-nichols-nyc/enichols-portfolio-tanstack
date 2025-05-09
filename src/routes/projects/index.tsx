import { createFileRoute, Link } from '@tanstack/react-router'
import projects from '@/data/projects'
import ContentContainer from '@/components/content-container'

export const Route = createFileRoute('/projects/')({
  component: ProjectsIndex,
})

function ProjectsIndex() {
  return (
    <ContentContainer>
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
    </ContentContainer>
  )
}
