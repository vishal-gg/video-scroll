import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/')({
  component: RouteComponent,
  beforeLoad: async () => {
    console.log("test link")
  }
})

function RouteComponent() {
  return <div>Hello "/test/"!</div>
}
