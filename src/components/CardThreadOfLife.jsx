export default function CardThreadOfLife({
  image = "cca-rillieux-vancia.png",
  children = "Nom du thread",
  firstDate = "29/11/2005",
  lastDate = "29/01/2006",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit",
}) {
  return (
    <article className="card-thread-of-life">
      <img src={`../../public/img/thread-of-life/${image}`} alt={children} />
      <div className="card-thread-of-life__bottom">
        <div>
          <h3>{children}</h3>
          <p>
            Du {firstDate} au {lastDate}
          </p>
        </div>
        <p className="card-thread-of-life__bottom__description">
          {description}
        </p>
      </div>
    </article>
  );
}
