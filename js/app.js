const navbar = document.querySelector(".nav-bar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("show-menu");
});
