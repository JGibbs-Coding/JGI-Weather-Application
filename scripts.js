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
  let new date = (response.data.time * 1000);
  date.innerHTML = "Monday 21 July 2025";

  console.log(response.data);
}
function formatDate(date){
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

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
