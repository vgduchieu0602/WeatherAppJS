const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const apiKey = "ad55e6df9cfc6e5f9738143a7d1218e7";

searchBtn.addEventListener("click", () => {
  if (cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

function getFetchData() {}

function updateWeatherInfo(city) {
  const weatherData = getFetchData();
}
