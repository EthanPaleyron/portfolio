export default function Skill({ children, icon }) {
  return (
    <div className="about-me__skills__content__containers-skills__container__carousel__tag">
      {icon && <img src={icon} alt={`Logo ${children}`} title={children} />}
      <p>{children}</p>
    </div>
  );
}
