/*                 VARIABLES                              */

const darkModeBtn = document.getElementById("dark-mode-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const theme = document.getElementById("html");

/* NAVBAR */
const navLinks = document.querySelectorAll(".nav-link");

/* MAIN */
const formTitle = document.getElementById("form-title");
const firstNameLabel = document.getElementById("first-name-label");
const lastNameLabel = document.getElementById("last-name-label");
const emailLabel = document.getElementById("email-label");
const messageLabel = document.getElementById("message-label");

/* FOOTER */
const footerH3 = document.getElementById("footer-h3");
const topicTitles = document.querySelectorAll(".topic-title");

/*                 DATA                                   */

/*                 FUNCTIONS                              */

/* DARK MODE FUNCTION */
const darkModeFun = () => {
  theme.classList.add("dark-mode");
  footerH3.classList.add("dark-mode-text");
  formTitle.classList.add("dark-mode-text");
  firstNameLabel.classList.add("dark-mode-text");
  lastNameLabel.classList.add("dark-mode-text");
  emailLabel.classList.add("dark-mode-text");
  messageLabel.classList.add("dark-mode-text");
  topicTitles.forEach((title) => {
    title.classList.add("dark-mode-text");
  });
  navLinks.forEach((link) => {
    link.classList.add("dark-mode-text");
  });
  saveTheme();
};

/* LIGHT MODE FUNCTION */
const lightModeFun = () => {
  theme.classList.remove("dark-mode");
  footerH3.classList.remove("dark-mode-text");
  formTitle.classList.remove("dark-mode-text");
  firstNameLabel.classList.remove("dark-mode-text");
  lastNameLabel.classList.remove("dark-mode-text");
  emailLabel.classList.remove("dark-mode-text");
  messageLabel.classList.remove("dark-mode-text");
  topicTitles.forEach((title) => {
    title.classList.remove("dark-mode-text");
  });
  navLinks.forEach((link) => {
    link.classList.remove("dark-mode-text");
  });
  saveTheme();
};

/* Save theme function */
function saveTheme() {
  localStorage.setItem(
    "theme",
    JSON.stringify(theme.classList.contains("dark-mode")),
  );
}

/* Get theme function */
function getTheme() {
  const storageTheme = JSON.parse(localStorage.getItem("theme"));
  if (storageTheme) {
    darkModeFun();
  } else {
    lightModeFun();
  }
}

getTheme();

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
