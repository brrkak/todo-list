`use strict`;
const weather = document.querySelector(`.weather`);
const myAPI = `84943bd3618afc411e14670414503835`;
const COORDS = `coords`;

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myAPI}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = `${Math.floor(json.main.temp - 273)}°C`;
      const place = json.name;
      weather.innerText = ` ${place}
          ${temperature} `;
    });
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("cant access geo location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
