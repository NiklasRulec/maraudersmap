// ! ++++++++++ Initialisierung Mapbox-Karte ++++++++++

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmtsc3JsYyIsImEiOiJjbGVmcTRzb3gwYm80NDFwOHJ6ZHcxZTE2In0.tKn9YoTMn6EsqWoBCC3xzw";
let map = new mapboxgl.Map({
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
  let lngLat = [position.coords.longitude, position.coords.latitude];

  // ! ++++++++++ Erstelle Marker ++++++++++

  let marker = document.createElement("div");
  marker.className = "marker";

  // ! ++++++++++ Wappen einstellen ++++++++++

  switch (localStorage.getItem("userHouse")) {
    case "G":
      console.log("Gryffindor");

      let labelG = document.createElement("div");
      labelG.className = "label-g";
      labelG.textContent = nameInput;
      marker.appendChild(labelG);
      let wappenG = document.createElement("div");
      wappenG.className = "wappen-g";
      marker.appendChild(wappenG);

      new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
      break;

    case "S":
      console.log("Slytherin");

      let labelS = document.createElement("div");
      labelS.className = "label-s";
      labelS.textContent = nameInput;
      marker.appendChild(labelS);
      let wappenS = document.createElement("div");
      wappenS.className = "wappen-s";
      marker.appendChild(wappenS);

      new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
      break;

    case "H":
      console.log("Hufflepuff");

      let labelH = document.createElement("div");
      labelH.className = "label-h";
      labelH.textContent = nameInput;
      marker.appendChild(labelH);
      let wappenH = document.createElement("div");
      wappenH.className = "wappen-h";
      marker.appendChild(wappenH);

      new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
      break;

    case "R":
      console.log("Ravenclaw");

      let labelR = document.createElement("div");
      labelR.className = "label-r";
      labelR.textContent = nameInput;
      marker.appendChild(labelR);
      let wappenR = document.createElement("div");
      wappenR.className = "wappen-r";
      marker.appendChild(wappenR);

      new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
      break;

    default:
      console.log("Kein Haus ausgewählt");

      let label = document.createElement("div");
      label.className = "label";
      label.textContent = nameInput;
      marker.appendChild(label);

      new mapboxgl.Marker(marker).setLngLat(lngLat).addTo(map);
      break;
  }

  map.setZoom(13);
  map.setCenter(lngLat);
});
