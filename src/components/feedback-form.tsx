import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { submitFeedback, type FeedbackInput } from '@/lib/feedback'

export function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackInput>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (field: keyof FeedbackInput) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
    
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const result = await submitFeedback(formData)
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name.trim() && 
                     formData.email.trim() && 
                     formData.message.trim()

  return (
    <div className="max-w-md mx-auto p-6 bg-[#19191b] rounded-lg border border-gray-800">
      <h2 className="text-xl font-semibold text-white mb-4">Send Feedback</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange('name')}
            placeholder="Your name"
            required
            disabled={isSubmitting}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-white">Message</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange('message')}
            placeholder="Your feedback message..."
            required
            disabled={isSubmitting}
            className="mt-1 min-h-24"
          />
        </div>

        {submitStatus.type && (
          <div className={`p-3 rounded-md text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-900/20 text-green-400 border border-green-800' 
              : 'bg-red-900/20 text-red-400 border border-red-800'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </Button>
      </form>
    </div>
  )
}