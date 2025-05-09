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
    id: 'a8f3k2zq',
    title: 'AI Mockmaster',
    tags: ['api', 'ai', 'aws', 'postgres'],
    categories: ['ai'],
    description:
      'In an era where technology intersects with every aspect of our lives, even the kitchen is not exempt from innovation. My recent project, a recipe generator powered by Next.js and OpenAI, exemplifies this fusion of artificial intelligence and culinary arts. This web application aims to inspire home cooks and professional chefs alike by generating unique recipes based on user inputs, leveraging the power of AI to bring creativity to the kitchen.',
    shortDescription: 'Practice mock interviews with AI-driven feedback.',
    date: '2023-04-01',
    url: 'https://ai-recipe-generator-nine.vercel.app/',
    published: true,
    image: '/images/airecipes.png',
  },
  {
    id: 'x2j9v7lm',
    title: 'Code Collab',
    tags: ['collaboration', 'websocket', 'typescript'],
    categories: ['web'],
    description:
      'A real-time collaborative code editor built with WebSockets and TypeScript. Enables multiple users to edit code simultaneously, with live syntax highlighting and chat integration.',
    shortDescription: 'Collaborative code editing in real time.',
    date: '2023-05-15',
    url: 'https://code-collab.example.com/',
    published: true,
    image: '/images/codecollab.png',
  },
  {
    id: 'q4w8e1rt',
    title: 'FitTrack Pro',
    tags: ['fitness', 'mobile', 'react-native'],
    categories: ['health'],
    description:
      'A mobile app for tracking workouts, nutrition, and progress. Features personalized plans, progress charts, and integration with wearable devices.',
    shortDescription: 'Track your fitness journey with ease.',
    date: '2023-06-10',
    url: 'https://fittrackpro.example.com/',
    published: true,
    image: '/images/fittrackpro.png',
  },
  {
    id: 'z7n2b5cx',
    title: 'EcoShopper',
    tags: ['ecommerce', 'sustainability', 'react'],
    categories: ['ecommerce'],
    description:
      'An e-commerce platform focused on sustainable products. Features eco-friendly brands, carbon footprint tracking, and green shipping options.',
    shortDescription: 'Shop sustainably with curated eco products.',
    date: '2023-07-22',
    url: 'https://ecoshopper.example.com/',
    published: true,
    image: '/images/ecoshopper.png',
  },
  {
    id: 'm6p4s9dh',
    title: 'Travelogue AI',
    tags: ['travel', 'ai', 'recommendations'],
    categories: ['travel'],
    description:
      'A travel planning tool that uses AI to recommend personalized itineraries based on user preferences, budget, and travel history.',
    shortDescription: 'AI-powered travel itinerary planner.',
    date: '2023-08-05',
    url: 'https://travelogueai.example.com/',
    published: true,
    image: '/images/travelogueai.png',
  },
  {
    id: 'v3k8l2wp',
    title: 'Artisan Connect',
    tags: ['marketplace', 'art', 'community'],
    categories: ['marketplace'],
    description:
      'A marketplace connecting local artisans with buyers. Features artist profiles, secure payments, and community events.',
    shortDescription: 'Discover and support local artisans.',
    date: '2023-09-12',
    url: 'https://artisanconnect.example.com/',
    published: true,
    image: '/images/artisanconnect.png',
  },
]

export default projects 