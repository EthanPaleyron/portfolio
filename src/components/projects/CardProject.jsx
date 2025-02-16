import { Link } from "@tanstack/react-router";
import Tag from "./Tag";

export default function CardProject({
  children = "Nom du projet",
  skills = ["skill"],
  image = "cca-rillieux-vancia.png",
  to = "/",
}) {
  return (
    <article className={"card-project"}>
      <Link to={to}>
        <img src={`/assets/projects/${image}`} alt="Image du projet" />
        <ul>
          {skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </ul>
        <h3>{children}</h3>
      </Link>
    </article>
  );
}
