import React from "react";

interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    shortDescription: string;
    tags: string[];
    url: string;
    learnMoreUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-[#10131a] border border-[#232225] rounded-xl p-6 flex flex-col gap-4 shadow-sm min-h-[400px]">
      <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-2">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
      </div>
      <p className="text-base text-[#b3b0b7] mb-4">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-[#232225] text-[#b3b0b7] px-3 py-1 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[#a78bfa] text-sm hover:underline flex items-center gap-1">Visit site <svg xmlns='http://www.w3.org/2000/svg' className='inline w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 7l-10 10m0 0h6m-6 0V11' /></svg></a>
      </div>
    </div>
  );
} 