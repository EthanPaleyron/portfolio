import { useState } from "react";
import PropTypes from 'prop-types';

const CardThreadOfLife = ({
  image,
  children,
  firstDate,
  lastDate,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="card-thread-of-life">
      <div className="card-thread-of-life__top">
        <img src={`/assets/thread-of-life/${image}`} alt={children} />
        <h3>{children}</h3>
      </div>
      <div
        className={`card-thread-of-life__description content-p ${isExpanded ? "" : "collapsed"}`}
      >
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <button onClick={toggleExpand} className="card-thread-of-life__toggle">
        {isExpanded ? "Voir moins" : "Voir plus"}
      </button>
      <p className="card-thread-of-life__dates">
        Du <time dateTime={firstDate}>{formatDate(firstDate)}</time> au{" "}
        <time dateTime={lastDate}>{formatDate(lastDate)}</time>
      </p>
    </article>
  );
}

CardThreadOfLife.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  firstDate: PropTypes.string.isRequired,
  lastDate: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CardThreadOfLife;