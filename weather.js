const API_KEY = "5d77461c0704ff7b9103750e7b8cb292";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");
const PM_API_KEY = "B2D954E2-0108-3B9B-B7FC-FDF686FC511D";
function getParticularMatter(lat, lng) {

  console.log("load");
  //경도 long 127 위도 lat 37
  console.log(lat,lng);
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin','https://Invidam.github.io');
  // headers.append('Access-Control-Allow-Origin','http://localhost:3000');
  headers.append('GET', 'POST', 'OPTIONS');
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Credentials', 'true');


  const url = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&crs=epsg:4326&point=${lng},${lat}&format=json&type=both&zipcode=true&simple=false&key=${PM_API_KEY}`;
  console.log(url);
  fetch(url, {
      mode : 'cors',
      method: 'GET',
      headers: headers,
      credentials : 'include',
    }).then(function(response) {
      console.log(response);
    }).then(function(json) {
      console.log("PM val: " + json);
    });
}
function getWeather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
      console.log(response);
      return response.json();
  }).then(function(json) {
    console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    const weatherCondition = json.weather[0].description
    weather.innerHTML = `
    <ul>
      <li><span>Location</span>: ${place}</li>
      <li><span>Temperature</span>: ${temperature}℃</li>
      <li><span>Weather</span>: ${weatherCondition} </li>
    </ul>
    `;
  });
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
  getParticularMatter(latitude,longitude);
}
function handleGeoError() {
  console.log("Cant get geo-Location")
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}


function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null) {
    askForCoords();
  }
  else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);
    //getWeathher
  }
}

function init() {
  loadCoords();
}

init();
