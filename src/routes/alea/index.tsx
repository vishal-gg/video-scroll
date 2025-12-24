import { createFileRoute } from '@tanstack/react-router'
import Test from '../../components/test'

export const Route = createFileRoute('/alea/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Test testUrl="/output-3.mp4" />
}
