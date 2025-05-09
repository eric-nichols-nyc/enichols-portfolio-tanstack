import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <img src="/images/contact.png" alt="Contact" />
    </div>
  )
}
