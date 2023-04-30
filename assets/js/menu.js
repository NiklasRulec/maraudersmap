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

// ! ++++++++++ Aktuellen Namen löschen ++++++++++

let deleteName = document.querySelector(".deletename");
deleteName.addEventListener("click", function () {
  localStorage.removeItem("userName");
  location.reload();
  console.log("userName gelöscht");
});

// ! ++++++++++ Aktuelles Haus löschen ++++++++++

let deleteHouse = document.querySelector(".deletehouse");
deleteHouse.addEventListener("click", function () {
  localStorage.removeItem("userHouse");
  location.reload();
  console.log("userHouse gelöscht");
});
