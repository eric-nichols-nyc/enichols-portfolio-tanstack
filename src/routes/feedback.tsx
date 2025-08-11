import { createFileRoute } from '@tanstack/react-router'
import ContentContainer from '@/components/content-container'
import Header from '@/components/header'
import { FeedbackForm } from '@/components/feedback-form'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/feedback')({
  component: RouteComponent,
})

export default function RouteComponent() {
  return (
    <ContentContainer>
      <div className="flex flex-col items-center min-h-screen justify-center w-full">
        <Header
          title="Feedback"
          subtitle="Your thoughts help me improve! Share your feedback below."
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          <FeedbackForm />
        </motion.div>
      </div>
    </ContentContainer>
  )
}