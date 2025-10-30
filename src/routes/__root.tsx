// app/routes/__root.tsx
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'

import appCss from "@/styles/app.css?url"
import Sidebar from "@/components/sidebar-nav"
import FeedbackWidget from "@/components/feedback-widget"


export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Eric Nichols Developer',
      },
      {
        name: 'description',
        content: 'Portfolio of Eric Nichols - Full Stack Developer',
      },
      // Open Graph meta tags
      {
        property: 'og:title',
        content: 'Eric Nichols Developer',
      },
      {
        property: 'og:description',
        content: 'Portfolio of Eric Nichols - Full Stack Developer',
      },
      {
        property: 'og:image',
        content: 'https://enichols-dev-tanstack.vercel.app/images/og-image.png',
      },
      {
        property: 'og:url',
        content: 'https://enichols.dev',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      // Twitter Card meta tags
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Eric Nichols Developer',
      },
      {
        name: 'twitter:description',
        content: 'Portfolio of Eric Nichols - Full Stack Developer',
      },
      {
        name: 'twitter:image',
        content: 'https://enichols-dev-tanstack.vercel.app/images/og-image.png',
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/icon.png",
        type: "image/png",
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <main className="flex min-h-screen">
          <Sidebar />
          <div className="flex-grow border border-red-500">
            {children}
          </div>
        </main>
        <FeedbackWidget />
        <Scripts />
      </body>
    </html>
  )
}