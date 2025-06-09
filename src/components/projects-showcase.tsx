import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Zap, Users, TrendingUp, Calendar, Kanban, BarChart3, Brain, MessageSquare, FileText, HelpCircle, ChefHat, List, LucideIcon } from 'lucide-react';
import { ShineBorder } from './ui/shine-border';

// Type definitions
interface ProjectMetric {
  label: string;
  value: string;
}

interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  metrics: ProjectMetric[];
  demoUrl: string;
  githubUrl: string;
  image: string;
  badges: string[];
  highlights: string[];
}

interface AIProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  icon: React.ReactElement<LucideIcon>;
  badge: string;
}

interface ProjectCardProps {
  project: FeaturedProject | AIProject;
  featured?: boolean;
}

type TabType = 'featured' | 'ai';

const ProjectShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('featured');

  const featuredProjects: FeaturedProject[] = [
    {
      id: 'audiograph',
      title: 'AudioGraph',
      subtitle: 'Artist Analytics Platform',
      description: 'Comprehensive dual-app system tracking music artists across platforms with automated data collection and comparative analytics.',
      problem: 'Music industry professionals needed real-time analytics to track artist performance across multiple platforms without manual data collection.',
      solution: 'Built automated system collecting daily metrics from Spotify and YouTube APIs, storing in Supabase, with admin/client dashboard architecture.',
      tech: ['React 18', 'Next.js 14', 'Node.js', 'Supabase', 'Spotify API', 'YouTube API', 'Cron Jobs', 'TypeScript'],
      features: [
        'Automated daily data collection via cron jobs',
        'Real-time artist comparison dashboard',
        'Admin panel for artist management',
        'Client portal for viewing analytics',
        'Historical trend analysis',
        'Performance metrics visualization'
      ],
      metrics: [
        { label: 'Artists Tracked', value: '50+' },
        { label: 'Data Points Monthly', value: '10K+' },
        { label: 'API Calls Daily', value: '200+' },
        { label: 'Response Time', value: '<2s' }
      ],
      demoUrl: 'https://audiograph.vercel.app/',
      githubUrl: 'https://github.com/eric-nichols-nyc/audiograph',
      image: '/api/placeholder/600/400',
      badges: ['Full Stack', 'API Integration', 'Real-time Data'],
      highlights: [
        'Architected scalable data collection system',
        'Implemented secure multi-tenant architecture',
        'Built responsive admin and client interfaces'
      ]
    },
    {
      id: 'ai-taskwizard',
      title: 'AI-TaskWizard',
      subtitle: 'Microfrontend Productivity Suite',
      description: 'Enterprise-scale microfrontend architecture with 6 integrated applications sharing UI, auth, and design system packages.',
      problem: 'Need for scalable, maintainable productivity suite with shared components and independent deployment capabilities.',
      solution: 'Implemented microfrontend architecture with shared design system, unified authentication, and modular application structure.',
      tech: ['React 18', 'TypeScript', 'Monorepo', 'Lerna', 'Webpack Module Federation', 'Shared UI Library', 'Auth System'],
      features: [
        'Dashboard with unified workspace',
        'Calendar application with scheduling',
        'Kanban board for task management',
        'Shared authentication across apps',
        'Centralized design system',
        'Independent app deployment'
      ],
      metrics: [
        { label: 'Applications', value: '6' },
        { label: 'Shared Components', value: '40+' },
        { label: 'Code Reuse', value: '85%' },
        { label: 'Bundle Size', value: 'Optimized' }
      ],
      demoUrl: 'https://ai-taskwizard-host.vercel.app/',
      image: '/images/taskwizard.png',
      githubUrl: 'https://github.com/eric-nichols-nyc/ai-taskmaster',
      badges: ['Microfrontend', 'Monorepo', 'Enterprise Architecture'],
      highlights: [
        'Designed scalable microfrontend architecture',
        'Created comprehensive shared design system',
        'Implemented unified authentication strategy'
      ]
    }
  ];

  const aiProjects: AIProject[] = [
    {
      id: 'moodflix',
      title: 'MoodFlix',
      subtitle: 'AI Movie Recommendation Engine',
      description: 'Sentiment analysis pipeline that recommends movies based on user mood detection.',
      tech: ['React', 'Node.js', 'Sentiment Analysis API', 'TMDB API'],
      features: ['Real-time mood detection', 'Personalized recommendations', 'Movie database integration'],
      demoUrl: '#',
      githubUrl: '#',
      icon: <Brain className="w-6 h-6" />,
      badge: 'AI-Powered'
    },
    {
      id: 'ai-interview',
      title: 'AI Interview Assistant',
      subtitle: 'Life-like Interview Simulation',
      description: 'Conversational AI that conducts realistic job interviews with real-time feedback.',
      tech: ['React', 'OpenAI API', 'Speech Recognition', 'WebRTC'],
      features: ['Natural conversation flow', 'Real-time feedback', 'Interview analytics'],
      demoUrl: '#',
      githubUrl: '#',
      icon: <MessageSquare className="w-6 h-6" />,
      badge: 'AI-Powered'
    },
    {
      id: 'ai-resume',
      title: 'AI Resume Builder',
      subtitle: 'Smart Resume Generation',
      description: 'AI-powered resume builder with intelligent content suggestions and optimization.',
      tech: ['Next.js 14', 'Google Gemini API', 'PDF.js', 'Tailwind CSS'],
      features: ['AI content suggestions', 'PDF export', 'Multiple templates'],
      demoUrl: '#',
      githubUrl: '#',
      icon: <FileText className="w-6 h-6" />,
      badge: 'AI-Powered'
    },
    {
      id: 'ai-quiz',
      title: 'AI Quiz Generator',
      subtitle: 'PDF to Quiz Conversion',
      description: 'Upload PDFs and generate interactive quizzes using AI content analysis.',
      tech: ['React', 'PDF Processing', 'OpenAI API', 'Question Generation'],
      features: ['PDF text extraction', 'Smart question generation', 'Interactive quiz interface'],
      demoUrl: '#',
      githubUrl: '#',
      icon: <HelpCircle className="w-6 h-6" />,
      badge: 'AI-Powered'
    },
    {
      id: 'ai-todo',
      title: 'AI Todo Assistant',
      subtitle: 'Smart Task Management',
      description: 'Todo list that uses AI tools to populate tasks from chatbot conversations.',
      tech: ['React', 'AI Integration', 'Task Management', 'Natural Language Processing'],
      features: ['Chatbot integration', 'Smart task extraction', 'Priority suggestions'],
      demoUrl: '#',
      githubUrl: '#',
      icon: <List className="w-6 h-6" />,
      badge: 'AI-Powered'
    },
    {
      id: 'ai-recipe',
      title: 'AI Recipe Generator',
      subtitle: 'Personalized Recipe Creation',
      description: 'Generate custom recipes based on ingredients, dietary restrictions, and preferences.',
      tech: ['React', 'Recipe API', 'AI Content Generation', 'Nutrition Analysis'],
      features: ['Ingredient-based generation', 'Dietary customization', 'Nutrition tracking'],
      demoUrl: '#',
      githubUrl: '#',
      icon: <ChefHat className="w-6 h-6" />,
      badge: 'AI-Powered'
    }
  ];

  // Type guard to check if project is a FeaturedProject
  const isFeaturedProject = (project: FeaturedProject | AIProject): project is FeaturedProject => {
    return 'problem' in project;
  };

  const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
    if (featured && isFeaturedProject(project)) {
      return (
        <div className="bg-[#10131a] relative rounded-lg shadow-lg mb-8">
              <ShineBorder
                    borderWidth={2}
                    duration={10}
                    shineColor={['#a78bfa', '#f472b6', '#38bdf8']}
                  />
          <div className="overflow-hidden">
            <div className="h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-black to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-xl opacity-90">{project.subtitle}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              {project.badges.map((badge: string, index: number) => (
                <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <p className="text-gray-500 text-lg mb-6">{project.description}</p>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                <p className="text-gray-600 text-sm">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">{project.solution}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Project Metrics</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric: ProjectMetric, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-gray-600 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Technical Highlights</h4>
              <div className="space-y-2">
                {project.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-500 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a 
                href={project.demoUrl}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
              <a 
                href={project.githubUrl}
                className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    // AI Project Card (smaller format)
    const aiProject = project as AIProject;
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                {aiProject.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{aiProject.title}</h3>
                <p className="text-sm text-gray-600">{aiProject.subtitle}</p>
              </div>
            </div>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
              {aiProject.badge}
            </span>
          </div>

          <p className="500text-gray- text-sm mb-4">{aiProject.description}</p>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {aiProject.tech.slice(0, 3).map((tech: string, index: number) => (
                <span key={index} className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
              {aiProject.tech.length > 3 && (
                <span className="text-gray-500 text-xs">+{aiProject.tech.length - 3} more</span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <div className="space-y-1">
              {aiProject.features.slice(0, 2).map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600 text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <a 
              href={aiProject.demoUrl}
              className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex-1 justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Demo</span>
            </a>
            <a 
              href={aiProject.githubUrl}
              className="flex items-center space-x-1 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700 transition-colors flex-1 justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-3 h-3" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => handleTabChange('featured')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'featured' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Featured Projects
          </button>
          <button
            onClick={() => handleTabChange('ai')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'ai' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            AI Applications
          </button>
        </div>
      </div>

      {/* Project Content */}
      {activeTab === 'featured' && (
        <div>
          {featuredProjects.map((project: FeaturedProject) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      )}

      {activeTab === 'ai' && (
        <div>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Applications</h2>
            <p className="text-gray-600">
              A collection of applications showcasing AI integration and modern development practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project: AIProject) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Interested in AI-Enhanced Development?
        </h2>
        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          These projects demonstrate how AI tools can accelerate development while maintaining 
          high code quality and innovative solutions. Let's discuss how this approach can benefit your next project.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get In Touch
          </button>
          <button className="bg-white text-gray-500 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;