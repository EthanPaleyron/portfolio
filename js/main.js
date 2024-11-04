document
  .querySelector("a[href='pages/all-projects.html']")
  .addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "pages/all-projects.html";
  });
