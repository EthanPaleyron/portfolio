export default function CardThreadOfLife({
  image,
  children,
  firstDate,
  lastDate,
  description,
}) {
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <article className="card-thread-of-life">
      <div className="card-thread-of-life__top">
        <img src={`/assets/thread-of-life/${image}`} alt={children} />
        <h3>{children}</h3>
      </div>
      <div className="card-thread-of-life__description content-p">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p className="card-thread-of-life__dates">
        Du <time dateTime={firstDate}>{formatDate(firstDate)}</time> au{" "}
        <time dateTime={lastDate}>{formatDate(lastDate)}</time>
      </p>
    </article>
  );
}
