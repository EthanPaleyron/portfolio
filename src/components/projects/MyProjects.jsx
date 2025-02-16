import CardProject from "./CardProject.jsx";
import { useState, useEffect } from "react";
import { projectsList } from "../../data/projectsList.js";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [loader, setLoader] = useState(true);

  async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Filter projects where toMyProjects is true
    const filteredProjects = projectsList.filter(
      (project) => project.toMyProjects
    );
    setProjects(filteredProjects);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={"my-projects__container__projects"}>
      {loader ? (
        <div>Chargement des projets...</div>
      ) : (
        projects.map((project, index) => (
          <CardProject
            key={index}
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
