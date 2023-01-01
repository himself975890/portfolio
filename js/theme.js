var isDark = false;
var body = document.querySelector("body");
var button = document.querySelectorAll("button");
var animated_bg = document.querySelector(".manouInBackground");
//var logo = document.querySelector("header img");
var skill_img = document.querySelectorAll(".imagesvg");
var levelp = document.querySelectorAll(".level-p");
var input = document.querySelectorAll("input");
var textarea = document.querySelectorAll("textarea");
var arrow = document.querySelector(".arrow");
var toggeler = document.getElementById("dark");
function toggle_theme() {
  // body.style.animation = ".9s fade ease-in-out";
  if (isDark) {
    desactive_dark();
  } else {
    active_dark();
  }
  isDark = !isDark;
}
function active_dark() {
  body.classList.add("dark_body");
  animated_bg.classList.add("manouInBackgroundDark");
  button.forEach((v, k, p) => {
    v.classList.add("darkButton");
  });
  //logo.classList.add("darklogo");
  skill_img.forEach((v, k, p) => {
    v.classList.add("dark_skill_img");
  });
  levelp.forEach((v, k, p) => {
    v.classList.add("level-p_dark");
  });
  input.forEach((v, k, p) => {
    v.classList.add("input_dark");
  });
  textarea.forEach((v, k, p) => {
    v.classList.add("input_dark");
  });
  arrow.classList.add("arrow_dark");
  toggeler.classList.add("dark_toggeler");
  toggeler.innerHTML = "light theme";
}
function desactive_dark() {
  body.classList.remove("dark_body");
  animated_bg.classList.remove("manouInBackgroundDark");
  button.forEach((v, k, p) => {
    v.classList.remove("darkButton");
  });
  //logo.classList.remove("darklogo");
  skill_img.forEach((v, k, p) => {
    v.classList.remove("dark_skill_img");
  });

  levelp.forEach((v, k, p) => {
    v.classList.remove("level-p_dark");
  });
  input.forEach((v, k, p) => {
    v.classList.remove("input_dark");
  });
  textarea.forEach((v, k, p) => {
    v.classList.remove("input_dark");
  });
  arrow.classList.remove("arrow_dark");
  toggeler.classList.remove("dark_toggeler");
  toggeler.innerHTML = "dark theme";
}
