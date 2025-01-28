import CardProject from "./CardProject.jsx";

export default function SectionProjectsByYear({ children }) {
  return (
    <section className="section-projects-by-year container">
      <div className="section-projects-by-year__top">
        <h2>Réalisations {children}</h2>
        <div className="section-projects-by-year__top__arrows">
          <button className="arrow-left">&lt;</button>
          <button className="arrow-right">&gt;</button>
        </div>
      </div>
      <div className="section-projects-by-year__projects">
        <div className="section-projects-by-year__projects__items">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </section>
  );
}
