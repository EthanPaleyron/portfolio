import { Link } from "@tanstack/react-router";
import "../../sass/not-found.scss";

export default function ProjectNotFound() {
  return (
    <section className="not-found container">
      <h1>404 - Projet Non Trouvée</h1>
      <p>Désolé, le projet que vous recherchez n'existe pas.</p>
      <Link to="/" className="btn-purple">
        Retourner à l'accueil
      </Link>
    </section>
  );
}
