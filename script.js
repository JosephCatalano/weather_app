import { WEATHER_API_KEY } from "./config.js";

const SEARCHBUTTON = document.getElementById("search");
const DISPLAY_AREA = document.getElementById("weather");
const INPUTBOX = document.getElementById("inputBox");
const TEMP = document.getElementById("temp");
const DESCRIPTION = document.getElementById("desc");
const HUMIDITY = document.getElementById("humidity");
const WINDSPEED = document.getElementById("wind");
const CITY = document.getElementById("city");

async function fetchWeatherData(city) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`
  );
  const data = await response.json();
  return data;
}

async function handleSearch() {
  const userInput = INPUTBOX.value;
  const data = await fetchWeatherData(userInput);
  console.log(data);

  renderWeather(data);
}

function renderWeather(weather) {
  CITY.textContent = `${weather.location.name}`;
  TEMP.textContent = `${weather.current.temp_c} C`;
  HUMIDITY.textContent = `${weather.current.humidity}%`;
  WINDSPEED.textContent = `${weather.current.gust_kph} kph`;
}

SEARCHBUTTON.addEventListener("click", handleSearch);

function buildUrl(city) {
  null;
}
