export default function Skill({ children, source, icon }) {
  const isClickable = Boolean(source);

  const content = (
    <>
      {icon && <img src={icon} alt={`Logo ${children}`} title={children} />}
      <p>{children}</p>
    </>
  );

  return isClickable ? (
    <a
      href={source}
      target="_blank"
      className="about-me__skills__content__containers-skills__container__carousel__tag"
    >
      {content}
    </a>
  ) : (
    <span className="about-me__skills__content__containers-skills__container__carousel__tag">
      {content}
    </span>
  );
}
