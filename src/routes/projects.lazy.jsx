import { createLazyFileRoute } from "@tanstack/react-router";
import "../sass/all-projects.scss";
import SectionProjectsByYear from "../components/SectionProjectsByYear";
import { projectsList } from "../data/projectsList";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  // Récupérer toutes les années uniques et les trier par ordre décroissant
  const uniqueYears = [
    ...new Set(projectsList.map((project) => project.year)),
  ].sort((a, b) => b - a);
  return (
    <main className="all-projects">
      <h1 className="container">Touts mes projets</h1>
      <div className="all-projects__sections-projects">
        {uniqueYears.map((year) => (
          <SectionProjectsByYear key={year}>{year}</SectionProjectsByYear>
        ))}
      </div>
    </main>
  );
}
