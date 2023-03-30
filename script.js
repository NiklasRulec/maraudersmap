// Delay animation by 2 seconds
setTimeout(function () {
  document.querySelector(".animation-text").style.animationDelay = "1s";
}, 0);

// Remove text element after fade-out animation completes
setTimeout(function () {
  document.querySelector(".animation-text").remove();
}, 5000);

// Initialisierung Mapbox-Karte

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

// aktuelle Position des Geräts

navigator.geolocation.getCurrentPosition(function (position) {
  var lngLat = [position.coords.longitude, position.coords.latitude];

  // Erstelle Marker

  var marker = document.createElement("div");
  marker.className = "marker";

  //Prüfen ob Name vorhanden

  if (localStorage.getItem("promptName") !== null) {
    var name = localStorage.getItem("promptName");
  } else {
    var name = prompt("Wie soll der Marker beschriftet werden?");
    localStorage.setItem("promptName", name);
  }

  // Haus wählen

  if (localStorage.getItem("promptHaus") !== null) {
    var haus = localStorage.getItem("promptHaus");
  } else {
    var haus = prompt(
      "Welchem Haus möchtest du dich anschließen? G = Gryffindor, S = Slytherin, H = Hufflepuff, R = Ravenclaw"
    );
    localStorage.setItem("promptHaus", haus);
  }

  //Wappen einstellen

  // if (localStorage.getItem("promptHaus") == "G" ) {
  //   var wappen = localStorage.setItem("Gryffindor");
  // } else if(localStorage.getItem("promptHaus") == "S" ) {
  //   var wappen = localStorage.setItem("Slytherin");
  // } else if(localStorage.getItem("promptHaus") == "H" ) {
  //   var wappen = localStorage.setItem("Hufflepuff");
  // } else if(localStorage.getItem("promptHaus") == "R" ) {
  //   var wappen = localStorage.setItem("Ravenclaw");
  // } else {
  //   var wappen = localStorage.setItem("Kein Wappen ausgewählt");
  // }

  //Erstelle Name auf Schriftrolle

  var label = document.createElement("div");
  label.className = "label";
  label.textContent = name;
  marker.appendChild(label);

  //Erstelle Haus Wappen

  var wappen = document.createElement("div");
  wappen.className = "wappen";
  marker.appendChild(wappen);

  new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);

  // Setze das Zentrum der Karte auf die Position des Geräts

  map.setZoom(13);
  map.setCenter(lngLat);
});
