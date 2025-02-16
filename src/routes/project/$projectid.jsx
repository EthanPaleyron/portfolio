import { createFileRoute, Link } from "@tanstack/react-router";
import Tag from "../../components/projects/Tag";
import { projectsList } from "../../data/projectsList.js";
import "../../sass/single-project.scss";
import ProjectNotFound from "../../components/not-found/ProjectNotFound.jsx";

export const Route = createFileRoute("/project/$projectid")({
  component: RouteComponent,
});

function RouteComponent() {
  // Get the project ID from the route params
  const { projectid } = Route.useParams();

  // Find the project that matches the ID (convert to number as IDs are typically numeric)
  const project = projectsList.find((p) => p.id === Number(projectid));

  // Handle case where project is not found
  if (!project) {
    return <ProjectNotFound />;
  }
  return (
    <main className="single-project container">
      <h1 className="single-project__name">{project.name}</h1>
      <img
        src={`/assets/projects/${project.image}`}
        alt="Image du projet"
        className="single-project__image"
      />
      <div className="single-project__skills-links">
        <ul className="single-project__skills-links__skills">
          {project.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </ul>
        <div className="single-project__skills-links__links">
          {project.buttons.map((button, index) => (
            <Link
              key={index}
              to={button.link}
              target="_blank"
              className={`btn-${button.color}`}
            >
              {button.content}
            </Link>
          ))}
        </div>
      </div>
      <div className="single-project__description">
        <h2>Objectif du projet</h2>
        <div className="content-p">
          {project.projectObjective.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <h2>Expérience obtenue</h2>
        <div className="content-p">
          {project.experienceGaind.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
