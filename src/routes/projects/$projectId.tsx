import { createFileRoute } from '@tanstack/react-router'
import { useParams } from '@tanstack/react-router'
import projects, { Project } from '@/data/projects'

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  // Get the projectId from the route params
  const { projectId } = useParams({ from: '/projects/$projectId' })
  console.log('projectId', projectId)

  // Convert projectId to a number (if using index)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return <div>Project not found.</div>
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} style={{ maxWidth: 400 }} />
      <p>{project.shortDescription}</p>
      <p>{project.description}</p>
      <p>
        <strong>Tags:</strong> {project.tags.join(', ')}
      </p>
      <p>
        <strong>Categories:</strong> {project.categories.join(', ')}
      </p>
      <p>
        <strong>Date:</strong> {project.date}
      </p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
    </div>
  )
}
