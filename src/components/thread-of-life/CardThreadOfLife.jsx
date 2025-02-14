export default function CardThreadOfLife({
  image = "cca-rillieux-vancia.png",
  children = "Nom du thread",
  firstDate = "29/11/2005",
  lastDate = "29/01/2006",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit",
}) {
  return (
    <article className="card-thread-of-life">
      <div className="card-thread-of-life__top">
        <img src={`../../public/img/thread-of-life/${image}`} alt={children} />
        <h3>{children}</h3>
      </div>
      <p className="card-thread-of-life__description">{description}</p>
      <p className="card-thread-of-life__dates">
        Du <time dateTime={firstDate}>{firstDate}</time> au{" "}
        <time dateTime={lastDate}>{lastDate}</time>
      </p>
    </article>
  );
}
