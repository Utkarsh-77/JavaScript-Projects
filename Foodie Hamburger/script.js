const shadow = document.querySelector(".shadow");
const open = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-icon");
const navsection = document.querySelector(".nav-section");
const navLinks = document.querySelectorAll(".nav-section a");

open.addEventListener("click", () => {
  shadow.classList.add("close-shadow");
  navsection.classList.add("nav-section-open");
  open.classList.remove("open-btn");
});

closeBtn.addEventListener("click", () => {
  shadow.classList.remove("close-shadow");
  open.classList.add("open-btn");
  navsection.classList.remove("nav-section-open");
});

shadow.addEventListener("click", () => {
  shadow.classList.remove("close-shadow");
  open.classList.add("open-btn");
  navsection.classList.remove("nav-section-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    shadow.classList.remove("close-shadow");
    open.classList.add("open-btn");
    navsection.classList.remove("nav-section-open");
  });
});
