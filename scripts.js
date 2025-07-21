function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-current");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}km|h`;
  let dateElement = document.querySelector("#date-time");
  date.innerHTML = "Monday 21 July 2025";
  let timeElement = document.querySelector("#date-time");
  time.innerHTML = "11.06";
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "7fftc541dbabc3018759foaa254e09a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
  console.log(apiUrl);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Sydney");
