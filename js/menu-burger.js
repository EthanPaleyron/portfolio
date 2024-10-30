const button = document.querySelector("#menu-burger");
const menuBurger = document.querySelector(".menu-burger");
const links = document.querySelectorAll(".menu-burger ul li a");

button.addEventListener("click", () => eventMenuBurger());

links.forEach((link) => {
  link.addEventListener("click", () => eventMenuBurger());
});

function eventMenuBurger() {
  menuBurger.classList.toggle("open");
  button.classList.toggle("open");
}
