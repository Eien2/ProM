/*                 VARIABLES                              */

const darkModeBtn = document.getElementById("dark-mode-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const theme = document.getElementById("html");

/* NAVBAR */
const navLinks = document.querySelectorAll(".nav-link");

/* MAIN */
const heroTitle = document.getElementById("hero-title");

/* FOOTER */
const footerH3 = document.getElementById("footer-h3");
const topicTitles = document.querySelectorAll(".topic-title");

/*                 DATA                                   */

/*                 FUNCTIONS                              */

/* DARK MODE FUNCTION */
const darkModeFun = () => {
  theme.classList.add("dark-mode");
  footerH3.classList.add("dark-mode-text");
  heroTitle.classList.add("dark-mode-text");
  topicTitles.forEach((title) => {
    title.classList.add("dark-mode-text");
  });
  navLinks.forEach((link) => {
    link.classList.add("dark-mode-text");
  });
};

/* LIGHT MODE FUNCTION */
const lightModeFun = () => {
  theme.classList.remove("dark-mode");
  footerH3.classList.remove("dark-mode-text");
  heroTitle.classList.remove("dark-mode-text");
  topicTitles.forEach((title) => {
    title.classList.remove("dark-mode-text");
  });
  navLinks.forEach((link) => {
    link.classList.remove("dark-mode-text");
  });
};

/*                 BUTTONS                                */

/* DARK MODE BUTTON */
darkModeBtn.addEventListener("click", () => {
  darkModeFun();
});

/* LIGHT MODE BUTTON */
lightModeBtn.addEventListener("click", () => {
  lightModeFun();
});

/* Hamburger Icon */
/*
navBtn.addEventListener("click", () => {
  navBtn.style.display = "none";
  sideBar.style.display = "flex";
  sideBarLi.forEach(li => li.style.display = "flex");
});
sideBarBtn.addEventListener("click", () => {
  navBtn.style.display = "flex";
  sideBar.style.display = "none";
  sideBarLi.forEach(li => li.style.display = "none");
});
*/
