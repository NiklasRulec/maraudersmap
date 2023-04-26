// ! ++++++++++ Prüfen ob Name vorhanden ++++++++++

if (localStorage.getItem("userName") !== null) {
  var nameInput = localStorage.getItem("userName");
} else {
  // ! ++++++++++ Eventlistener ++++++++++

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", saveName);

  // ! ++++++++++ Frage Name ++++++++++

  var formName = document.getElementById("formName");
  formName.style.display = "block";
}

// ! ++++++++++ Name in LocalStorage ++++++++++

function saveName() {
  var nameInput = document.getElementById("nameInput").value;
  localStorage.setItem("userName", nameInput);
  formName.style.display = "none";
  location.reload();
}

console.log(nameInput);

// ! ++++++++++ Haus wählen ++++++++++

if (localStorage.getItem("userHouse") !== null) {
  var hausInput = localStorage.getItem("userHouse");
} else {
  // ! ++++++++++ Eventlistener ++++++++++
  const btn2 = document.querySelector(".btn2");
  btn2.addEventListener("click", saveHaus);

  // ! ++++++++++ Frage Haus ++++++++++

  var formHaus = document.getElementById("formHaus");
  formHaus.style.display = "block";
}

function saveHaus() {
  var hausInput = document.getElementById("hausInput").value;
  localStorage.setItem("userHouse", hausInput);
  formHaus.style.display = "none";
  location.reload();
}

console.log(hausInput);
