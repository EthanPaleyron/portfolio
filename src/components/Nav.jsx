import {useEffect, useRef} from "react";
import {Link} from "@tanstack/react-router";

export default function Nav() {
    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const menuBurger = menuRef.current;
        const links = menuBurger.querySelectorAll("ul li a");

        const eventMenuBurger = () => {
            menuBurger.classList.toggle("open");
            button.classList.toggle("open");
        };

        button.addEventListener("click", eventMenuBurger);

        links.forEach((link) => {
            link.addEventListener("click", eventMenuBurger);
        });
        // Cleanup on component unmount
        return () => {
            button.removeEventListener("click", eventMenuBurger);
            links.forEach((link) => {
                link.removeEventListener("click", eventMenuBurger);
            });
        };
    }, []);

    return (
        <>
            <nav className="nav container">
                <Link to="/">
                    <img src="../../public/icon.svg" alt="Icon"/>
                </Link>
                <button title="Menu Burger" id="menu-burger" className="btn-menu-burger" ref={buttonRef}></button>
            </nav>
            <aside className="menu-burger" ref={menuRef}>
                <div className="menu-burger__content container">
                    <ul>
                        <li><Link to="/">Accueil</Link>
                            <ul>
                                <li><Link to="/projets">Projets</Link></li>
                                <li><Link to="/pages/all-projects.html">Touts mes projets</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/#a-propos">A propos</Link>
                            <ul>
                                <li><Link to="/#fil-de-vie-pro">Fil de vie pro</Link></li>
                                <li><Link to="/#centres-interet">Centres d'interêt</Link></li>
                                <li><Link to="/#competences">Compétences</Link></li>
                                <li><Link to="/#qualites">Qualités</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/#contact">Contact</Link></li>
                    </ul>
                    <img src="../../public/img/cube3d.png" alt="Cube"/>
                </div>
            </aside>
        </>
    );
}
