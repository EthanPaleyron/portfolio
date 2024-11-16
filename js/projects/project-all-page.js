const sectionProject = document.querySelector(".section-projects");
const years = [];

fetch("../../json/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach((project) => {
      if (!years.includes(project.year)) {
        years.push(project.year);
      }
    });
    years.sort((a, b) => b.localeCompare(a));
    years.forEach((year) => {
      createSectionProjects(year);
      projects.forEach((project) => {
        if (project.year === year) {
          createProject(
            project.id,
            project.image,
            project.techno,
            project.name,
            project.year
          );
        }
      });
    });
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du fichier JSON :", error)
  );

function createSectionProjects(year) {
  const section = document.createElement("section");
  section.className = "section-projects__content";
  const yearDiv = document.createElement("div");
  yearDiv.className = "section-projects__content__year";
  const title = document.createElement("h2");
  title.textContent = "Réalisations " + year;
  yearDiv.appendChild(title);
  const buttonContainer = document.createElement("div");
  const leftButton = document.createElement("button");
  const leftIcon = document.createElement("i");
  leftIcon.className = "fa-solid fa-angle-left";
  leftButton.appendChild(leftIcon);
  buttonContainer.appendChild(leftButton);
  const rightButton = document.createElement("button");
  const rightIcon = document.createElement("i");
  rightIcon.className = "fa-solid fa-angle-right";
  rightButton.appendChild(rightIcon);
  buttonContainer.appendChild(rightButton);
  yearDiv.appendChild(buttonContainer);
  const projectsDiv = document.createElement("div");
  projectsDiv.className = "section-projects__content__projects";
  projectsDiv.dataset.year = year;
  section.appendChild(yearDiv);
  section.appendChild(projectsDiv);
  sectionProject.appendChild(section);
}

function createProject(id, nameImg, techno, nameProject, year) {
  const article = document.createElement("article");
  article.classList.add("project");
  const link = document.createElement("a");
  link.href = `project-${id}`;
  const img = document.createElement("img");
  img.src = `../public/projects/images/${nameImg}`;
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
  document
    .querySelector(`.section-projects__content__projects[data-year='${year}']`)
    .appendChild(article);
}
