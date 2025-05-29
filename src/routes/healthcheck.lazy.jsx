import { createLazyFileRoute } from "@tanstack/react-router";
import "../sass/all-projects.scss";

export const Route = createLazyFileRoute("/healthcheck")({
  component: Healthcheck,
});

function Healthcheck() {
  return (
    <main className="healthcheck">
      <h1 className="container">Health Check</h1>
      <div className="healthcheck__status">
        <p>Status: OK</p>
      </div>
    </main>
  );
}
