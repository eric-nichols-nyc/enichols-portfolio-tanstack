export interface Project {
  id: string
  title: string
  tags: string[]
  categories: string[]
  description: string
  shortDescription: string
  date: string
  url: string
  published: boolean
  image: string
}

const projects: Project[] = [
  {
    id: 'trellnode',
    title: 'Trellnode',
    tags: ['api', 'ai', 'aws', 'postgres'],
    categories: ['ai'],
    description:
      'Trellnode is a platform that allows you to create and manage your tasks. It uses AI to generate tasks and then allows you to manage them.',
    shortDescription: 'Trellnode is a platform that allows you to create and manage your tasks.',
    date: '2023-04-01',
    url: 'https://trellnode.vercel.app/',
    published: true,
    image: '/images/trellnode.png',
  },
  {
    id: 'x2j9v7lm',
    title: 'MoodFlix',
    tags: ['collaboration', 'websocket', 'typescript'],
    categories: ['web'],
    description:
      'MoodFlix is your personal movie recommendation engine that suggests films based on your current mood. Whether you\'re feeling energetic, relaxed, or somewhere in between, we\'ve got the perfect movie for you.',
    shortDescription: 'Personal movie recommendation engine.',
    date: '2023-05-15',
    url: 'https://moodflix-phi.vercel.app/',
    published: true,
    image: '/images/moodflix.png',
  },
  {
    id: 'q4w8e1rt',
    title: 'Audiograph',
    tags: ['fitness', 'mobile', 'react-native'],
    categories: ['health'],
    description:
      'Audiograph is a platform that allows you to upload your audio files and get a summary of the content. It uses AI to transcribe the audio and then summarizes the content.',
    shortDescription: 'Summarize your audio files with AI.',
    date: '2023-06-10',
    url: 'https://audiograph.vercel.app/',
    published: true,
    image: '/images/audiograph.png',
  },
  {
    id: 'ai-taskmaster',
    title: 'Ai Taskmaster',
    tags: ['ai', 'aws', 'postgres'],
    categories: ['ai'],
    description:
      'Ai Taskmaster is a platform that allows you to create and manage your tasks with AI. It uses AI to generate tasks and then allows you to manage them.',
    shortDescription: 'Manage your tasks with AI.',
    date: '2023-07-22',
    url: 'https://ai-taskmaster-dashboard.vercel.app/',
    published: true,
    image: '/images/taskmaster.png',
  },
  {
    id: 'smart-headphones-ai',
    title: 'smart-headphones-ai',
    tags: ['travel', 'ai', 'recommendations'],
    categories: ['travel'],
    description:
      'Smart Headphones AI is a platform that allows you to search for headphones and get recommendations based on your preferences.',
    shortDescription: 'Search for headphones and get recommendations.',
    date: '2023-08-05',
    url: 'https://smart-headphones-ai.vercel.app/',
    published: true,
    image: '/images/smart-headphones-ai.png',
  },
  {
    id: 'ai-mockmaster',
    title: 'AI Mockmaster',
    tags: ['marketplace', 'art', 'community'],
    categories: ['marketplace'],
    description:
      'Ai Mockmaster is a platform that allows you to practice mock interviews with AI-driven feedback.',
    shortDescription: 'Practice mock interviews with AI-driven feedback.',
    date: '2023-09-12',
    url: 'https://ai-mockmaster.vercel.app/',
    published: true,
    image: '/images/mockmaster.png',
  },
]

export default projects 