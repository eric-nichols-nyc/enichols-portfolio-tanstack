import { createFileRoute } from '@tanstack/react-router'
import { useParams } from '@tanstack/react-router'
import projects, { Project } from '@/data/projects'
import ContentContainer from '@/components/content-container'
import StickyHeader from '@/components/sticky-header'
import { Link } from '@tanstack/react-router'

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
    <ContentContainer>
      <StickyHeader>
        <div className="relative flex items-center justify-center">
          <Link to="/projects" className="absolute left-0 text-[#a78bfa] hover:underline text-base font-medium">← Back</Link>
          <h1 className="text-3xl font-bold text-white text-center">{project.title}</h1>
        </div>
      </StickyHeader>
      <div>
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
    </ContentContainer>
  )
}
