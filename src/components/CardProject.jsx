import { Link } from "@tanstack/react-router";
import Tag from "./Tag";

export default function CardProject({
  children = "Nom du projet",
  Skills = ["React", "React", "React", "React"],
  Image = "revision.jpg",
  to = "/",
}) {
  return (
    <article className={"card-project"}>
      <Link to={to}>
        <img src={`../../public/img/projects/${Image}`} alt="Image du projet" />
        <ul>
          {Skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </ul>
        <h3>{children}</h3>
      </Link>
    </article>
  );
}
