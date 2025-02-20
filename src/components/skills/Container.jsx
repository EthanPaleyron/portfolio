import Skill from "./Skill";

export default function Container({ title, skills }) {
  return (
    <div className="about-me__skills__content__containers-skills__container">
      <h3 className="container">{title}</h3>
      <div className="about-me__skills__content__containers-skills__container__carousel container">
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon}>
            {skill.title}
          </Skill>
        ))}
      </div>
    </div>
  );
}
