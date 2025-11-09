import PropTypes from 'prop-types';
import Skill from "./Skill";

const Container = ({ title, skills }) => {
  return (
    <div className="about-me__skills__content__containers-skills__container container">
      <h3>{title}</h3>
      <div className="about-me__skills__content__containers-skills__container__skills">
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} source={skill.source}>
            {skill.title}
          </Skill>
        ))}
      </div>
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Container;