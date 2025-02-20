import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../sass/homepage.scss";
import Cube3d from "../components/Cube3d";
import Age from "../components/Age";
import MyProjects from "../components/projects/MyProjects";
import ThreadOfLife from "../components/thread-of-life/ThreadOfLife";
import Interests from "../components/interests/Interests";
import Skills from "../components/skills/Skills";
import SectionQualities from "../components/SectionQualities";

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
              J&apos;ai <Age birthday={`2005-11-29`} /> ans et je me suis lancé
              dans l&apos;informatique en tant que développeur web fullstack
              alternance au sein de l&apos;établissement EDEN SCHOOL, basé près
              de Lyon.
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
      <div id="about-me" className="about-me">
        <section id="thread-of-life" className="about-me__thread-of-life">
          <h2 className="container">Mon fil de vie</h2>
          <ThreadOfLife></ThreadOfLife>
        </section>
        <section id="interests" className="about-me__interests">
          <div className="about-me__interests__content container">
            <h2>Mes centres d&apos;interêt</h2>
            <Interests></Interests>
          </div>
        </section>
        <section id="skills" className="about-me__skills">
          <div className="about-me__skills__content">
            <h2 className="container">Mes compétences</h2>
            <Skills></Skills>
          </div>
        </section>
        <SectionQualities srcVideo="gameplay-gd.mp4">
          Organisé et persévérant, je sais travailler de manière autonome tout
          en favorisant l&apos;esprit d&apos;équipe. Dynamique et bienveillant,
          je reste discipliné dans mes tâches tout en gardant une attitude
          joviale.
        </SectionQualities>
      </div>
    </main>
  );
}
