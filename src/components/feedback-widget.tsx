import type React from "react"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageSquarePlus, X, Send, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useServerFn } from "@tanstack/react-start"
import { submitFeedback } from "@/lib/feedback"


export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [rating, setRating] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const submitFeedbackFn = useServerFn(submitFeedback)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    const feedbackData = {
      name: (formData.get('name') as string)?.trim() || '',
      email: '',
      message: (formData.get('message') as string)?.trim() || '',
    }

    // Add rating to message if provided
    if (rating) {
      feedbackData.message += `\nRating: ${rating}/5 stars`
    }

    console.log('Submitting feedback:', feedbackData)

    try {
      const result = await submitFeedbackFn({ data: feedbackData })
      console.log('Feedback result:', result)

      setIsSubmitted(true)
      setTimeout(() => {
        setIsOpen(false)
        // Reset form after closing
        setTimeout(() => {
          setIsSubmitted(false)
          setRating(null)
          setError(null)
        }, 300)
      }, 3000)
    } catch (error) {
      console.error("Error submitting feedback:", error)
      setError(error instanceof Error ? error.message : 'Failed to submit feedback')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 w-14 rounded-full shadow-lg transition-all ${
            isOpen 
              ? "bg-[#232225] hover:bg-[#2d2d31] text-white" 
              : "bg-gradient-to-r from-[#a78bfa] to-[#b983ff] hover:from-[#b983ff] hover:to-[#a78bfa] text-white"
          }`}
          aria-label="Open feedback form"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquarePlus className="h-6 w-6" />}
        </Button>
      </div>

      {/* Feedback Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-gradient-to-br from-[#19191b] via-[#232225] to-[#10131a] rounded-lg shadow-xl z-40 border border-[#a78bfa]"
          >
            <div className="p-4 border-b border-[#a78bfa]/30">
              <h3 className="font-medium text-lg text-white">Share your feedback</h3>
              <p className="text-sm text-[#b3b0b7]">We'd love to hear what you think!</p>
            </div>

            {isSubmitted ? (
              <div className="p-6 flex flex-col items-center justify-center text-center">
                <CheckCircle className="h-12 w-12 text-[#b983ff] mb-3" />
                <h4 className="text-lg font-medium mb-1 text-white">Thank you!</h4>
                <p className="text-[#b3b0b7]">Your feedback has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name <span className="text-[#b3b0b7] text-sm">(optional)</span></Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      className="mt-1 bg-[#232225] border border-[#a78bfa] focus:border-[#b983ff] focus:ring-2 focus:ring-[#b983ff] text-white placeholder:text-[#b3b0b7]" 
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Feedback</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what you think..."
                      className="mt-1 min-h-[100px] bg-[#232225] border border-[#a78bfa] focus:border-[#b983ff] focus:ring-2 focus:ring-[#b983ff] text-white placeholder:text-[#b3b0b7]"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-white">Rating <span className="text-[#b3b0b7] text-sm">(optional)</span></Label>
                    <div className="flex items-center justify-center mt-2">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setRating(starValue)}
                          className={`h-8 w-8 mx-1 flex items-center justify-center transition-all hover:scale-110 ${
                            rating && starValue <= rating 
                              ? "text-[#b983ff]" 
                              : "text-[#b3b0b7] hover:text-[#a78bfa]"
                          }`}
                        >
                          <Star 
                            className={`h-5 w-5 ${
                              rating && starValue <= rating ? "fill-current" : ""
                            }`} 
                          />
                        </button>
                      ))}
                      <input type="hidden" name="rating" value={rating || ""} />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 text-sm text-red-400 bg-red-900/20 border border-red-800 rounded-md">
                      {error}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#a78bfa] to-[#b983ff] hover:from-[#b983ff] hover:to-[#a78bfa] text-white border-0 shadow-lg transition-all" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Feedback
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
