import { createLazyFileRoute } from "@tanstack/react-router";
import Cube3d from "../components/Cube3d";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      
    </main>
  );
}
