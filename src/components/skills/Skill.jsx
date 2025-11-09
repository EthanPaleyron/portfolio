import PropTypes from 'prop-types';

const Skill = ({ children, source, icon }) => {
  const isClickable = Boolean(source);

  const content = (
    <>
      {icon && <img src={icon} alt={`Logo ${children}`} title={children} />}
      <span>{children}</span>
    </>
  );

  return isClickable ? (
    <a
      href={source}
      target="_blank"
      className="about-me__skills__content__containers-skills__container__skills__tag"
    >
      {content}
    </a>
  ) : (
    <p className="about-me__skills__content__containers-skills__container__skills__tag">
      {content}
    </p>
  );
}

Skill.propTypes = {
  children: PropTypes.string.isRequired,
  source: PropTypes.string,
  icon: PropTypes.string,
}

export default Skill;