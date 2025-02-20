import Container from "./Container";

export default function Skills() {
  const simpleicons = "https://cdn.simpleicons.org/";
  const programmingSkills = [
    { title: "ACF", icon: `` },
    { title: "CSS", icon: `${simpleicons}css3` },
    { title: "Dart", icon: `${simpleicons}dart` },
    { title: "Docker", icon: `${simpleicons}docker` },
    // { title: "Firebase", icon: `${simpleicons}firebase` },
    { title: "Flutter", icon: `${simpleicons}flutter` },
    { title: "Framer Motion", icon: `${simpleicons}framer` },
    { title: "Git", icon: `${simpleicons}git` },
    { title: "HTML", icon: `${simpleicons}html5` },
    { title: "JavaScript", icon: `${simpleicons}javascript` },
    // { title: "Laravel", icon: `${simpleicons}laravel` },
    { title: "MongoDB", icon: `${simpleicons}mongodb` },
    { title: "MySQL", icon: `${simpleicons}mysql` },
    { title: "PHP", icon: `${simpleicons}php` },
    { title: "PphStorm", icon: `${simpleicons}phpstorm` },
    { title: "PHPUnit", icon: `` },
    { title: "POO", icon: `` },
    { title: "React", icon: `${simpleicons}react` },
    { title: "Sass", icon: `${simpleicons}sass` },
    { title: "Symfony", icon: `${simpleicons}symfony` },
    { title: "TailwindCSS", icon: `${simpleicons}tailwindcss` },
    // { title: "TypeScript", icon: `${simpleicons}typescript` },
    { title: "Vite", icon: `${simpleicons}vite` },
    { title: "VS code", icon: `` },
    { title: "WooCommerce", icon: `${simpleicons}woo` },
    { title: "WordPress", icon: `${simpleicons}wordpress` },
  ];

  const otherSkills = [
    { title: "Anglais B2", icon: `` },
    { title: "Eco conseption", icon: `` },
    { title: "Figma", icon: `${simpleicons}figma` },
    { title: "GitHub Project", icon: `${simpleicons}github` },
    { title: "Notion", icon: `${simpleicons}notion` },
    { title: "Rappels", icon: `` },
    { title: "RGPD", icon: `` },
    { title: "SEO", icon: `` },
    { title: "Scrum", icon: `` },
    { title: "Todoist", icon: `${simpleicons}todoist` },
    { title: "Trello", icon: `${simpleicons}trello` },
  ];

  return (
    <div className="about-me__skills__content__containers-skills">
      <Container title="Programmation" skills={programmingSkills} />
      <Container title="Autres" skills={otherSkills} />
    </div>
  );
}
