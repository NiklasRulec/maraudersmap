// ! ++++++++++ MENU EIN/AUSBLENDEN ++++++++++

let menuToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  if (menu.style.left === "-20rem") {
    menu.style.left = "1rem";
  } else {
    menu.style.left = "-20rem";
  }
});
