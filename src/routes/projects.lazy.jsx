import { createLazyFileRoute } from "@tanstack/react-router";
import "../sass/all-projects.scss";
import SectionProjectsByYear from "../components/SectionProjectsByYear";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <main className="all-projects">
      <h1 className="container">Touts mes projets</h1>
      <div className="all-projects__sections-projects">
        <SectionProjectsByYear>2024</SectionProjectsByYear>
        <SectionProjectsByYear>2023</SectionProjectsByYear>
      </div>
    </main>
  );
}
