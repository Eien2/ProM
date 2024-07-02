/*                 VARIABLES                              */

const darkModeBtn = document.getElementById("dark-mode-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const theme = document.getElementById("html");

/* NAVBAR */
const navLinks = document.querySelectorAll(".nav-link");

/* MAIN */
const introductionTitle = document.getElementById("introduction-title");
const howItStartedTitle = document.getElementById("how-it-started-title");
const funFactsTitle = document.getElementById("fun-facts-title");

/* FOOTER */
const footerH3 = document.getElementById("footer-h3");
const topicTitles = document.querySelectorAll(".topic-title");

/*                 DATA                                   */

/*                 FUNCTIONS                              */

/* DARK MODE FUNCTION */
const darkModeFun = () => {
  theme.classList.add("dark-mode");
  introductionTitle.classList.add("dark-mode-text");
  howItStartedTitle.classList.add("dark-mode-text");
  funFactsTitle.classList.add("dark-mode-text");
  footerH3.classList.add("dark-mode-text");
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
  introductionTitle.classList.remove("dark-mode-text");
  howItStartedTitle.classList.remove("dark-mode-text");
  funFactsTitle.classList.remove("dark-mode-text");
  footerH3.classList.remove("dark-mode-text");
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
