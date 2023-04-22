// ! ++++++++++ Delay animation by 2 seconds ++++++++++

setTimeout(function () {
  document.querySelector(".animation-text").style.animationDelay = "0s";
}, 0);

// ! ++++++++++ Remove text element after fade-out animation completes ++++++++++

setTimeout(function () {
  document.querySelector(".animation-text").remove();
}, 5000);

// ! ++++++++++ Initialisierung Mapbox-Karte ++++++++++

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmtsc3JsYyIsImEiOiJjbGVmcTRzb3gwYm80NDFwOHJ6ZHcxZTE2In0.tKn9YoTMn6EsqWoBCC3xzw";
var map = new mapboxgl.Map({
  container: "karte",
  style: "mapbox://styles/nklsrlc/clefq7deb001l01nt13h5bj25",
  zoom: 2,
  scrollZoom: false,
  boxZoom: false,
  dragRotate: true,
  dragPan: true,
  keyboard: true,
});

map.addControl(new mapboxgl.NavigationControl());

// ! ++++++++++ aktuelle Position des Geräts ++++++++++

navigator.geolocation.getCurrentPosition(function (position) {
  var lngLat = [position.coords.longitude, position.coords.latitude];

  // ! ++++++++++ Erstelle Marker ++++++++++

  var marker = document.createElement("div");
  marker.className = "marker";

  // ! ++++++++++ Prüfen ob Name vorhanden ++++++++++

  if (localStorage.getItem("promptName") !== null) {
    var nameInput = localStorage.getItem("promptName");
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
    localStorage.setItem("promptName", nameInput);
    formName.style.display = "none";
    location.reload();
  }

  console.log(nameInput);

  // ! ++++++++++ Haus wählen ++++++++++

  if (localStorage.getItem("promptHaus") !== null) {
    var hausInput = localStorage.getItem("promptHaus");
  } else {
    // ! ++++++++++ Eventlistener ++++++++++
    const btn2 = document.querySelector(".btn2");
    btn2.addEventListener("click", saveHaus);

    // ! ++++++++++ Frage Haus++++++++++

    var formHaus = document.getElementById("formHaus");
    formHaus.style.display = "block";
  }

  function saveHaus() {
    var hausInput = document.getElementById("hausInput").value;
    localStorage.setItem("promptHaus", hausInput);
    formHaus.style.display = "none";
    location.reload();
  }
  console.log(hausInput);

  // ! ++++++++++ Wappen einstellen ++++++++++

  if (localStorage.getItem("promptHaus") == "G") {
    console.log("Gryffindor");

    // ! ++++++++++ Erstelle Name auf Schriftrolle ++++++++++

    var label = document.createElement("div");
    label.className = "label-g";
    label.textContent = nameInput;
    marker.appendChild(label);

    // ! ++++++++++ Marker setzen ++++++++++

    new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
  } else if (localStorage.getItem("promptHaus") == "S") {
    console.log("Slytherin");

    // ! ++++++++++ Erstelle Name auf Schriftrolle ++++++++++

    var label = document.createElement("div");
    label.className = "label-s";
    label.textContent = nameInput;
    marker.appendChild(label);

    // ! ++++++++++ Marker setzen ++++++++++

    new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
  } else if (localStorage.getItem("promptHaus") == "H") {
    console.log("Hufflepuff");

    // ! ++++++++++ Erstelle Name auf Schriftrolle ++++++++++

    var label = document.createElement("div");
    label.className = "label-h";
    label.textContent = nameInput;
    marker.appendChild(label);

    // ! ++++++++++ Marker setzen ++++++++++

    new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
  } else if (localStorage.getItem("promptHaus") == "R") {
    console.log("Ravenclaw");

    // ! ++++++++++ Erstelle Name auf Schriftrolle ++++++++++

    var label = document.createElement("div");
    label.className = "label-r";
    label.textContent = nameInput;
    marker.appendChild(label);

    // ! ++++++++++ Marker setzen ++++++++++

    new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
  } else {
    console.log("Kein Haus ausgewählt");

    // ! ++++++++++ Erstelle Name auf Schriftrolle ++++++++++

    var label = document.createElement("div");
    label.className = "label";
    label.textContent = nameInput;
    marker.appendChild(label);

    // ! ++++++++++ Marker setzen ++++++++++

    new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
  }

  // ! ++++++++++ Setze das Zentrum der Karte auf die Position des Geräts ++++++++++

  map.setZoom(13);
  map.setCenter(lngLat);
});

// ! ++++++++++ MENU EIN/AUSBLENDEN ++++++++++
var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  if (menu.style.left === "-20rem") {
    menu.style.left = "1rem";
  } else {
    menu.style.left = "-20rem";
  }
});
