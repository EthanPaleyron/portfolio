import Skill from "./Skill";

export default function Container({ title, skills }) {
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
