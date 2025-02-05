import Card from "./Card";

export default function Skills() {
  return (
    <div className="skills">
      <Card skills={["HTML", "CSS", "JavaScript", "PHP", "Dart", "MySQL"]}>
        Langage de programmations
      </Card>
      <Card skills={["React", "Syphony"]}>Frameworks</Card>
      <Card
        skills={["Git", "Sass / Tailwind", "Mocha / PHPUnit", "Docker", "Vite"]}
      >
        Workflow
      </Card>
      <Card
        skills={[
          "WordPress",
          "Figma (UI & UX)",
          "Firebase",
          "Framer Motion",
          "GitHub Project",
          "Notion, Todoist, Rappels",
        ]}
      >
        Autres
      </Card>
    </div>
  );
}
