import Container from "./Container";

export default function Skills() {
  const simpleicons = "https://cdn.simpleicons.org/";
  const programmingSkills = [
    { title: "ACF", source: "https://www.advancedcustomfields.com/", icon: "" },
    {
      title: "CSS",
      source: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      icon: `${simpleicons}css`,
    },
    { title: "Dart", source: "https://dart.dev/", icon: `${simpleicons}dart` },
    {
      title: "Docker",
      source: "https://www.docker.com/",
      icon: `${simpleicons}docker`,
    },
    // { title: "Firebase", source: "https://firebase.google.com/", icon: `${simpleicons}firebase` },
    {
      title: "Flutter",
      source: "https://flutter.dev/",
      icon: `${simpleicons}flutter`,
    },
    {
      title: "Motion",
      source: "https://www.framer.com/motion/",
      icon: `${simpleicons}framer`,
    },
    { title: "Git", source: "https://git-scm.com/", icon: `${simpleicons}git` },
    {
      title: "HTML",
      source: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      icon: `${simpleicons}html5`,
    },
    {
      title: "JavaScript",
      source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: `${simpleicons}javascript`,
    },
    // { title: "Laravel", source: "https://laravel.com/", icon: `${simpleicons}laravel` },
    {
      title: "MongoDB",
      source: "https://www.mongodb.com/",
      icon: `${simpleicons}mongodb`,
    },
    {
      title: "MySQL",
      source: "https://www.mysql.com/",
      icon: `${simpleicons}mysql`,
    },
    { title: "PHP", source: "https://www.php.net/", icon: `${simpleicons}php` },
    {
      title: "PhpStorm",
      source: "https://www.jetbrains.com/phpstorm/",
      icon: `${simpleicons}phpstorm`,
    },
    { title: "PHPUnit", source: "https://phpunit.de/", icon: "" },
    {
      title: "POO",
      source: "https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet",
      icon: "",
    },
    {
      title: "React",
      source: "https://react.dev/",
      icon: `${simpleicons}react`,
    },
    {
      title: "Sass",
      source: "https://sass-lang.com/",
      icon: `${simpleicons}sass`,
    },
    {
      title: "Symfony",
      source: "https://symfony.com/",
      icon: `${simpleicons}symfony`,
    },
    {
      title: "TailwindCSS",
      source: "https://tailwindcss.com/",
      icon: `${simpleicons}tailwindcss`,
    },
    // { title: "TypeScript", source: "https://www.typescriptlang.org/", icon: `${simpleicons}typescript` },
    {
      title: "Vite",
      source: "https://vitejs.dev/",
      icon: `${simpleicons}vite`,
    },
    { title: "VS Code", source: "https://code.visualstudio.com/", icon: "" },
    {
      title: "WooCommerce",
      source: "https://woocommerce.com/",
      icon: `${simpleicons}woo`,
    },
    {
      title: "WordPress",
      source: "https://wordpress.org/",
      icon: `${simpleicons}wordpress`,
    },
  ];

  const otherSkills = [
    { title: "Anglais B1", source: "", icon: "" },
    {
      title: "Éco-conception",
      source: "",
      icon: "",
    },
    {
      title: "Figma UI/UX",
      source: "https://www.figma.com/",
      icon: `${simpleicons}figma`,
    },
    {
      title: "GitHub Project",
      source: "https://github.com/features/project-management",
      icon: `${simpleicons}github`,
    },
    {
      title: "Notion",
      source: "https://www.notion.so/",
      icon: `${simpleicons}notion`,
    },
    {
      title: "Rappels",
      source: "",
      icon: "",
    },
    {
      title: "RGPD",
      source: "",
      icon: "",
    },
    { title: "SEO", source: "", icon: "" },
    { title: "Scrum", source: "", icon: "" },
    {
      title: "Todoist",
      source: "https://todoist.com/",
      icon: `${simpleicons}todoist`,
    },
    {
      title: "Trello",
      source: "https://trello.com/",
      icon: `${simpleicons}trello`,
    },
  ];

  return (
    <div className="about-me__skills__content__containers-skills">
      <Container title="Programmation" skills={programmingSkills} />
      <Container title="Autres" skills={otherSkills} />
    </div>
  );
}
