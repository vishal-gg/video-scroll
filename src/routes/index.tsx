import { createFileRoute } from "@tanstack/react-router";
import Test from "../components/test";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Test />;
}
