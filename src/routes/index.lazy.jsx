import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../sass/homepage.scss";
import Cube3d from "../components/Cube3d";
import MyProjects from "../components/projects/MyProjects.jsx";
import ThreadOfLife from "../components/thread-of-life/ThreadOfLife.jsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className={"homepage"}>
      <header className={"header"}>
        <div className={"header__container container"}>
          <Cube3d></Cube3d>
          <div className={"header__container__content"}>
            <h1>
              Ethan
              <br />
              Paleyron
            </h1>
            <p>
              Développeur web fullstack basé près de Lyon, je suis à la
              recherche d'une alternance.
            </p>
          </div>
        </div>
      </header>
      <section id={"projects"} className={"my-projects container"}>
        <h2>Mes projets</h2>
        <div className="my-projects__container">
          <MyProjects></MyProjects>
          <div className="ship-platform">Animation de la ship platform</div>
        </div>
        <Link to={"/projects/"} className="btn-gold">
          Voir plus de projets
        </Link>
      </section>
      <section id="aboute-me" className="aboute-me">
        <p className="aboute-me__title">A propos</p>
        <section id="thread-of-life" className="aboute-me__thread-of-life">
          <h3 className="container">Mon fil de vie</h3>
          <ThreadOfLife></ThreadOfLife>
        </section>
      </section>
    </main>
  );
}
