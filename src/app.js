// Icons

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
//theme Vars

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
//Icon toggling

const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};
//Initial Theme check

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};
//Manual Theme Switch

const themeswitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.classList.remove("dark");
  }
};
//Call Theme Switch on clicking buttons

//invoke theme check on initial load
