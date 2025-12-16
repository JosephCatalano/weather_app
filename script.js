const SEARCH = document.getElementById("search");
const DISPLAY_AREA = document.getElementById("weather");
const INPUTBOX = document.getElementById("inputBox");

function fetchWeatherData(city) {
  null;
}

function handleSearch() {
  const userInput = INPUTBOX.value;
  console.log(userInput);
  fetchWeatherData();
}

SEARCH.addEventListener("click", handleSearch);

function buildUrl(city) {
  null;
}
