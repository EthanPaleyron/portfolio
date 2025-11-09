import { Link } from "@tanstack/react-router";
import PropTypes from 'prop-types';
import Tag from "./Tag";

const CardProject = ({
  children = "Nom du projet",
  skills = ["skill"],
  image = "cca-rillieux-vancia.png",
  to = "/",
}) => {
  const toSlug = (name) =>
    name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <article className={"card-project"}>
      <Link to={`/project/${toSlug(to)}`}>
        <img src={`/assets/projects/${image}`} alt={children} />
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

CardProject.propTypes = {
  children: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  to: PropTypes.string,
}

export default CardProject;