import Item from "./Item";

export default function Interests() {
  return (
    <div className="interests">
      <ul className="interests__content">
        <Item image={"new-york.webp"}>Voyager</Item>
        <Item image={"ski.webp"}>Ski</Item>
        <Item image={"escalade.webp"}>Escalade</Item>
        <Item image={"agay.webp"}>Plongée</Item>
        <Item image={"saut-en-parachute.webp"}>Sensations forte</Item>
        <Item image={"fort-de-vancia.webp"}>Escape Game</Item>
        <Item image={"playlist-spotify.webp"}>Musique</Item>
        <Item image={"echecs-harry-potter.webp"}>Echecs</Item>
        <Item image={"dev.webp"}>Programmation</Item>
        <Item image={"livres.webp"}>Lire</Item>
        <Item image={"jeux-video.webp"}>Jeux vidéo</Item>
        <Item image={"developpement-personnel.webp"}>
          Développement personnel
        </Item>
        <Item image={"quad.webp"}>Aventures</Item>
        <Item image={"suede.webp"}>Astronomie</Item>
        <Item image={"ferrari-land.webp"}>Parc d&apos;attraction</Item>
      </ul>
    </div>
  );
}
