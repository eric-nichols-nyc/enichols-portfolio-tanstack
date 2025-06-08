import { createFileRoute, Link } from '@tanstack/react-router';
import projects from '@/data/projects';
import ContentContainer from '@/components/content-container';
import { Card } from '@/components/ui/card';
import ProjectCard from '@/components/project-card';
import { ShineBorder } from '@/components/ui/shine-border';
import { GradientText } from '@/components/ui/gradient-text';
import Header from '@/components/header';

export const Route = createFileRoute('/projects/')({
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <ContentContainer>
      <div className="flex flex-col w-full justify-center items-center">
        <Header
          title="Featured Projects"
          subtitle="A showcase of things I've built, tinkered, and loved 💡✨"
        />
        <div className="p-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="relative fade-in">
                  <ShineBorder
                    borderWidth={2}
                    duration={10}
                    shineColor={['#a78bfa', '#f472b6', '#38bdf8']}
                  />
                  <ProjectCard project={project} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentContainer>
  );
}
