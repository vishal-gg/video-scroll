import { createFileRoute } from '@tanstack/react-router'
import Test from '../../components/test'

export const Route = createFileRoute('/test/')({
  component: RouteComponent,
  beforeLoad: async () => {
    console.log("test link")
  }
})

function RouteComponent() {
  return <Test testUrl="https://toptier.relats.com/wp-content/themes/relats/videos/truck/truck.mp4" />
}
