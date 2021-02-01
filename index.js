//let celsius = Math.round(temperature - (32 * 5) / 9);
//let fahrenheit = Math.round(temperature);
const axios = require("axios");
let now = new Date();
function currentDate() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let date = now.getDate();
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let currentDate = `${day}, ${month} ${date} | ${hours}:${minutes}`;
  return currentDate;
}
let currentTime = document.querySelector(".current-time");
currentTime.innerHTML = `${currentDate()}`;
//
function showTemp(response) {
  console.log(response.data.main.temp);
  let tempElement = document.querySelector(".current-temperature");
  let temp = Math.round(response.data.main.temp);
  tempElement.innerHTML = `${temp}°F`;
}
//
//
function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector(".form-control").value;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = input.toLowerCase();
  let city = document.querySelector(".form-control").value;
  let apiKey = "c73a268914e519c553871dbb45d36e41";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemp);
}
let button = document.querySelector("button");
button.addEventListener("click", searchCity);
//
