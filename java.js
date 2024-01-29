// 1

function changeName(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-input-id");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = citySearch.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", changeName);

// 2

let timing = document.querySelector(".time");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

timing.innerHTML = `${day} ${hours}:${minutes}`;
