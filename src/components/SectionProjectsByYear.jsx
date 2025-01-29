import CardProject from "./CardProject.jsx";
import { projectsList } from "../data/projectsList"; // Ajout de l'import

export default function SectionProjectsByYear({ children }) {
  // Filtrer les projets pour l'année spécifique
  const projectsForYear = projectsList.filter(
    (project) => project.year === parseInt(children)
  );

  return (
    <section className="section-projects-by-year container">
      <div className="section-projects-by-year__top">
        <h2>Réalisations {children}</h2>
        <div className="section-projects-by-year__top__arrows">
          <button className="arrow-left">&lt;</button>
          <button className="arrow-right">&gt;</button>
        </div>
      </div>
      <div className="section-projects-by-year__projects">
        <div className="section-projects-by-year__projects__items">
          {projectsForYear.map((project) => (
            <CardProject
              key={project.id}
              project={project}
              skills={project.skills}
              image={project.image}
              to={`/project/${project.id}`}
            >
              {project.name}
            </CardProject>
          ))}
        </div>
      </div>
    </section>
  );
}
