import { useRef } from "react";
import CardProject from "./CardProject.jsx";
import { projectsList } from "../data/projectsList";

export default function SectionProjectsByYear({ children }) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 395;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const projectsForYear = projectsList.filter(
    (project) => project.year === parseInt(children)
  );

  return (
    <section className="section-projects-by-year container">
      <div className="section-projects-by-year__top">
        <h2>Réalisations {children}</h2>
        <div className="section-projects-by-year__top__arrows">
          <button
            className="arrow-left"
            title="Flèche de gauche"
            onClick={() => scrollCarousel("left")}
          >
            &lt;
          </button>
          <button
            className="arrow-right"
            title="Flèche de droite"
            onClick={() => scrollCarousel("right")}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="section-projects-by-year__projects" ref={carouselRef}>
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
