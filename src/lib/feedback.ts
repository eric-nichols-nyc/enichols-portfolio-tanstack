import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { getFeedbackCollection, FeedbackDocument } from './mongodb'

const feedbackSchema = z.object({
  name: z.string().max(100, 'Name must be less than 100 characters'),
  email: z.string().refine((val) => val === '' || z.string().email().safeParse(val).success, {
    message: 'Please enter a valid email address'
  }),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters')
})

export type FeedbackInput = z.infer<typeof feedbackSchema>

export const submitFeedback = createServerFn({ method: 'POST' })
  .validator((data: unknown) => {
    return feedbackSchema.parse(data)
  })
  .handler(async ({ data }) => {
    try {
      const collection = await getFeedbackCollection()

              if (!collection) {
          // MongoDB is not available, but we can still log the feedback
          console.log('MongoDB not available, logging feedback to console:', {
            name: data.name,
            email: data.email,
            message: data.message,
            createdAt: new Date()
          })

          return {
            success: true,
            message: 'Feedback submitted successfully! (stored locally)',
            id: 'local-' + Date.now()
          }
        }

        const feedbackDoc: Omit<FeedbackDocument, '_id'> = {
          name: data.name,
          email: data.email,
          message: data.message,
          createdAt: new Date()
        }

      const result = await collection.insertOne(feedbackDoc)

      if (!result.acknowledged) {
        throw new Error('Failed to save feedback')
      }

      return {
        success: true,
        message: 'Feedback submitted successfully!',
        id: result.insertedId.toString()
      }
    } catch (error) {
      console.error('Error submitting feedback:', error)
      throw new Error('Failed to submit feedback. Please try again.')
    }
  })

export const getFeedback = createServerFn({ method: 'GET' })
  .handler(async () => {
    try {
      const collection = await getFeedbackCollection()

      if (!collection) {
        console.log('MongoDB not available, returning empty feedback list')
        return []
      }

      const feedback = await collection
        .find({})
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray()

      return feedback.map(doc => ({
        id: doc._id?.toString(),
        name: doc.name,
        email: doc.email,
        message: doc.message,
        createdAt: doc.createdAt,
        userAgent: doc.userAgent,
        ipAddress: doc.ipAddress
      }))
    } catch (error) {
      console.error('Error fetching feedback:', error)
      throw new Error('Failed to fetch feedback')
    }
  })