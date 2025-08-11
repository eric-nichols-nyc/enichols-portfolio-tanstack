import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { GradientText } from './ui/gradient-text';
import { ShineBorder } from './ui/shine-border';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { IconCloud } from '@/components/icon-cloud';
import { Eye } from 'lucide-react';
const slugs = [
  'typescript',
  'javascript',
  'amazonwebservices',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazons3',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'vite',
  'tailwindcss',
  'docker',
  'git',
  'jira',
  'github',
  'figma',
];
export default function HomePage({ visitCount }: { visitCount?: number }) {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Visit Count Badge - Centered beneath hero */}
      {visitCount && (
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
        >
          <Badge
            variant="outline"
            className="bg-black/50 border-purple-500/30 text-purple-300 backdrop-blur-sm px-4 py-2 text-sm"
          >
            <Eye className="w-4 h-4" />
            {visitCount.toLocaleString()} visits
          </Badge>
        </motion.div>
      )}
      {/* Hero Section with ShineBorder */}
      <motion.section
        className="w-full max-w-2xl mb-12 text-center relative"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <ShineBorder
            borderWidth={3}
            duration={8}
            shineColor={['#6366f1', '#a21caf', '#f472b6']}
            className="z-10"
          />
          <motion.div
            className="relative z-20 p-10 bg-black/70 rounded-3xl flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <GradientText>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              >
                Hi, I'm Eric Nichols
              </motion.h1>
            </GradientText>
            <motion.h2
              className="text-2xl font-medium text-[#b3b0b7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-lg text-[#b3b0b7] max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            >
              Building creative solutions for the web. Passionate about modern JavaScript, UI/UX,
              and scalable systems.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <div className="flex items-center justify-center">
        <IconCloud images={images} />
      </div>
      {/* About Section */}
      <motion.section
        className="w-full max-w-2xl mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
      ></motion.section>
    </div>
  );
}
