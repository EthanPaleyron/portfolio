import { useRef } from "react";
import PropTypes from 'prop-types';
import CardProject from "./CardProject.jsx";
import { projectsList } from "../../data/projectsList";

const SectionProjectsByYear = ({ children }) => {
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
            <img src="/assets/icons/arrow-left.svg" alt="Flèche de gauche" />
          </button>
          <button
            className="arrow-right"
            title="Flèche de droite"
            onClick={() => scrollCarousel("right")}
          >
            <img src="/assets/icons/arrow-right.svg" alt="Flèche de droite" />
          </button>
        </div>
      </div>
      <div className="section-projects-by-year__projects" ref={carouselRef}>
        <div
          aria-live="polite"
          className="section-projects-by-year__projects__items"
        >
          {projectsForYear.map((project, index) => (
            <CardProject
              key={index}
              project={project}
              skills={project.skills}
              image={project.image}
              to={`${project.name}`}
            >
              {project.name}
            </CardProject>
          ))}
        </div>
      </div>
    </section>
  );
}

SectionProjectsByYear.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionProjectsByYear;