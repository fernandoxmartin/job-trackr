const navButton = document.querySelector(".nav-button");
const nav = document.querySelector(".dash-left");
const body = document.querySelector("body");

navButton.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  if (nav.classList.contains("nav-open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});
