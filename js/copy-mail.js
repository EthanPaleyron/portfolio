document.querySelector("#copyMail").addEventListener("click", () => {
  const mail = document.querySelector("#mail").textContent;
  navigator.clipboard
    .writeText(mail)
    .then(() => {
      alert("Le mail a été copier dans votre presse papier");
    })
    .catch((err) => {
      console.error("Erreur de copie :", err);
    });
});
