const contentProjects = document.querySelector(".projects > div");

fetch("../../json/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach((project, id) =>
      project.showToHomepage == false
        ? true
        : showProject(id, project.image, project.techno, project.name)
    );
    const link = document.createElement("a");
    link.href = "pages/all-projects.html";
    link.classList.add("btn-gold");
    link.textContent = "Voir plus de projets";
    const icon = document.createElement("img");
    icon.src = "public/icons/eye.svg";
    icon.alt = "œil";
    link.appendChild(icon);
    contentProjects.appendChild(link);
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du fichier JSON :", error)
  );

function showProject(id, nameImg, techno, nameProject) {
  const article = document.createElement("article");
  article.classList.add("project");
  const link = document.createElement("a");
  link.href = `project-${id}`;
  const img = document.createElement("img");
  img.src = `public/projects/images/${nameImg}`;
  img.alt = "Image du project";
  link.appendChild(img);
  const techList = document.createElement("ul");
  techno.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techList.appendChild(li);
  });
  link.appendChild(techList);
  const title = document.createElement("h3");
  title.textContent = nameProject;
  link.appendChild(title);
  article.appendChild(link);
  contentProjects.appendChild(article);
}
