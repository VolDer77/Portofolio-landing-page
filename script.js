const hamburger = document.querySelector(".hamburger");
const navbarlist = document.querySelector(".section-header-navbar__list");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  navbarlist.classList.toggle("active");
});