// src/routes/index.tsx
import * as fs from 'node:fs'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import HomePage from '@/components/home'
import ContentContainer from '@/components/content-container'
import { useEffect, useState } from 'react'
import FeedbackWidget from '@/components/feedback-widget'

const visitCountFile = 'visit-count.txt'

async function readVisitCount() {
  try {
    const content = await fs.promises.readFile(visitCountFile, 'utf-8')
    return parseInt(content) || 0
  } catch {
    return 0
  }
}

export const getVisitCount = createServerFn({
  method: 'GET',
}).handler(async () => {
  return await readVisitCount()
})

export const incrementVisitCount = createServerFn({
  method: 'POST',
}).handler(async () => {
  const count = await readVisitCount()
  const newCount = count + 1
  await fs.promises.writeFile(visitCountFile, `${newCount}`)
  return newCount
})

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => {
    return await getVisitCount()
  },
})

function Home() {
  const initialCount = Route.useLoaderData()
  const [visitCount, setVisitCount] = useState<number>(initialCount)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited')

    if (!hasVisited) {
      incrementVisitCount().then(newCount => {
        setVisitCount(newCount)
      }).catch(error => {
        console.error('Failed to increment visit count:', error)
      })
      sessionStorage.setItem('hasVisited', 'true')
    }
  }, [])

  return (
    <ContentContainer>
      <HomePage visitCount={visitCount} />
    </ContentContainer>
  )
}