import { createFileRoute, Link } from '@tanstack/react-router'
import projects from '@/data/projects'
import ContentContainer from '@/components/content-container'
import { Card } from '@/components/ui/card'
import ProjectCard from '@/components/project-card'

export const Route = createFileRoute('/projects/')({
  component: ProjectsIndex,
})

function ProjectsIndex() {
  return (
    <ContentContainer>
      <div className="sticky top-0 z-10 bg-[#19191b] border-b border-[#232225] py-4 mb-6">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
      </div>
      <div className="p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </ContentContainer>
  )
}
