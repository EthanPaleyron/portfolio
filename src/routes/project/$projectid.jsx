import { createFileRoute, Link } from "@tanstack/react-router";
import Tag from "../../components/Tag";
import "../../sass/single-project.scss";

export const Route = createFileRoute("/project/$projectid")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="single-project container">
      <h1 className="single-project__name">Nom du project</h1>
      <img
        src="../../../public/img/projects/cca-rillieux-vancia.png"
        alt="Image du projet"
        className="single-project__image"
      />
      <div className="single-project__skills-links">
        <ul className="single-project__skills-links__skills">
          <Tag>React</Tag>
          <Tag>Redux</Tag>
          <Tag>Node.js</Tag>
          <Tag>Express</Tag>
          <Tag>MongoDB</Tag>
          <Tag>Bootstrap</Tag>
          <Tag>Sass</Tag>
          <Tag>JavaScript</Tag>
          <Tag>HTML</Tag>
        </ul>
        <div className="single-project__skills-links__links">
          <Link
            to={"https://www.cca-rillieux-vancia.fr/"}
            target="_black"
            className="btn-gold"
          >
            Site web
          </Link>
          <Link
            to={"https://github.com/EthanPaleyron/cca-rillieux-vancia"}
            target="_black"
            className="btn-purple"
          >
            Code source
          </Link>
        </div>
      </div>
      <div className="single-project__description">
        <h2>Objectif du projet</h2>
        <p>
          Le but de ce projet était de créer une plateforme détailler
          l'objectif, ex : e-commerce, portfolio, blog, gestion de tâches
          permettant aux utilisateurs de fonction principale, ex : acheter des
          produits, afficher des travaux professionnels, suivre des tâches
          quotidiennes. L'accent a été mis sur l'ergonomie, la performance et
          une expérience utilisateur fluide.
        </p>
        <h2>Expérience obtenue</h2>
        <p>
          Au cours de ce projet, j'ai acquis des compétences en développement
          Fullstack en créant une application complète, de la base de données à
          l'interface utilisateur. J'ai aussi amélioré ma maîtrise de
          l'intégration continue en automatisant les tests et le déploiement. Ce
          projet m'a permis de renforcer mon expertise en conception UX/UI en
          optimisant le parcours utilisateur pour une meilleure rétention. De
          plus, j'ai pu perfectionner ma collaboration en équipe à travers des
          pull requests et des revues de code sur GitHub.
        </p>
      </div>
    </main>
  );
}
