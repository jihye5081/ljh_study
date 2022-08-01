// #8

// 0. Geolocation
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
// getCurrentPosition == 두 개의 인자 필요
// (successCallback(모든게 성공했을 때 실행 될 함수), errorCallback(에러가 발생했을 때 실행 될 함수))
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 1. Weather API

// 영상에 나온 api key 따라친 것(작동 x)
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // units=metric ==> 화씨를 섭씨로 변환해줌
  const url = `https://api.openweathermap.org./data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
