export default function Card({ children, skills }) {
  return (
    <article className="skills__card">
      <div className="skills__card__items">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <h3>{children}</h3>
    </article>
  );
}
