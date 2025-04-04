import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

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
      document.body.classList.toggle("no-scroll");
    };

    button.addEventListener("click", eventMenuBurger);

    links.forEach((link) => {
      link.addEventListener("click", eventMenuBurger);
    });
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
          <img src="/logo.svg" alt="Icon" />
        </Link>
        <button
          title="Menu Burger"
          id="menu-burger"
          className="btn-menu-burger"
          ref={buttonRef}
        ></button>
      </nav>
      <aside className="menu-burger" ref={menuRef}>
        <div className="menu-burger__content container">
          <ul>
            <li>
              <Link to="/" className="big-link">
                Accueil
              </Link>
              <ul>
                <li>
                  <Link to="/#projects">Mes projets</Link>
                </li>
                <li>
                  <Link to="/projects/">Touts mes projets</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#thread-of-life" className="big-link">
                A propos
              </Link>
              <ul>
                <li>
                  <Link to="/#thread-of-life">Fil de vie pro</Link>
                </li>
                <li>
                  <Link to="/#interests">Centres d'interêt</Link>
                </li>
                <li>
                  <Link to="/#skills">Compétences</Link>
                </li>
                <li>
                  <Link to="/#qualities">Qualités</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#contact" className="big-link">
                Contact
              </Link>
            </li>
          </ul>
          {/* <img src="/assets/cube-3d.png" alt="Cube" /> */}
        </div>
      </aside>
    </>
  );
}
