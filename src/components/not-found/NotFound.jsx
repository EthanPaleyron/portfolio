import { Link } from "@tanstack/react-router";
import "../../sass/not-found.scss";

export default function NotFound() {
  return (
    <section className="not-found container">
      <h1>404 - Page Non Trouvée</h1>
      <p>Désolé, la page que vous recherchez n&apos;existe pas.</p>
      <Link to="/" className="btn-purple">
        Retourner à l&apos;accueil
      </Link>
    </section>
  );
}
