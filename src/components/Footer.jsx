import Email from "./Email";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__content container">
        <h2 className="footer__content__title">Me contacter ou me suivre</h2>
        <div className="footer__content__email">
          <Email></Email>
          {/* <img src="/assets/cube-3d.png" alt="Spider" /> */}
        </div>
        <div className="footer__content__bottom">
          <SocialMedia></SocialMedia>
          <p className="footer__content__bottom__copyright">
            &copy; Ethan Paleyron
          </p>
        </div>
      </div>
    </footer>
  );
}
