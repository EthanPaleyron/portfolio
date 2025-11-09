import CardProject from "./CardProject.jsx";
import { useState, useEffect } from "react";
import { projectsList } from "../../data/projectsList.js";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 0));
        
        const filteredProjects = projectsList.filter(
          (project) => project.toMyProjects !== null
        );
        
        const sortedProjects = filteredProjects.sort(
          (a, b) => a.toMyProjects - b.toMyProjects
        );

        if (isMounted) {
          setProjects(sortedProjects);
          setLoader(false);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des projets:", error);
        if (isMounted) {
          setLoader(false);
        }
      }
    };

    loadProjects();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div aria-live="polite" className={"my-projects__container__projects"}>
      {loader ? (
        <div>Chargement des projets...</div>
      ) : (
        projects.map((project) => (
          <CardProject
            key={project.name}
            skills={project.skills}
            image={project.image}
            to={project.name}
          >
            {project.name}
          </CardProject>
        ))
      )}
    </div>
  );
}