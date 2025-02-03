import { createFileRoute, Link } from "@tanstack/react-router";
import Tag from "../../components/projects/Tag";
import { projectsList } from "../../data/projectsList.js";
import "../../sass/single-project.scss";

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
    return <div>Project not found</div>;
  }
  return (
    <main className="single-project container">
      <h1 className="single-project__name">{project.name}</h1>
      <img
        src={`../../../public/img/projects/${project.image}`}
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
        <p>{project.projectObjective}</p>
        <h2>Expérience obtenue</h2>
        <p>{project.experienceGaind}</p>
      </div>
    </main>
  );
}
