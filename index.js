let menuBtn = document.querySelector(".menu-bar");
let navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("show");
});
