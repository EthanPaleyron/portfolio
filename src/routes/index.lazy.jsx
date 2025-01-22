import {createLazyFileRoute} from "@tanstack/react-router";
import "../sass/homepage.scss"
import Cube3d from "../components/Cube3d";

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
                        <h1>Ethan<br/>Paleyron</h1>
                        <p>Développeur web fullstack basé près de Lyon, je suis à la recherche d'une alternance.</p>
                    </div>
                </div>
            </header>
        </main>
    );
}
