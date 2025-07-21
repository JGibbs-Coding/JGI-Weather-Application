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
  let date = new Date(response.data.time * 1000);
  let timeElement = document.querySelector("#date");
  timeElement.innerHTML = formatDate(date);
  let iconElement = document.querySelector("#temperature-icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon" />`;

  console.log(response.data);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[date.getDay()];
  return `${formattedDay} ${hours}:${minutes}`;
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
