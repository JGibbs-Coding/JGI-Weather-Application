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
  getForecast(response.data.city);
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
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

function getForecast(city) {
  let apiKey = "7fftc541dbabc3018759foaa254e09a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
  console.log(apiUrl);
}

function displayForecast(response) {
  console.log(response.data);
  let forecastElement = document.querySelector("#forecast");

  let days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
      <div class="weather-forecast-column">
          <div class="temperature-forecast-day"><strong>Tuesday</strong></div>
        <div class="temperature-forecast-icon">
        <img src= "${day.condition.icon_url}"/>
 </div>
        <div class="temperature-forecast-temperatures">   
                 <div class="temperature-forecast-temperature">${Math.round(
                   day.temperature.minimum
                 )}° 
                 <div class="temperature-range">min</div>
                 </div>  
         <div class="temperature-forecast-temperature"><strong>${Math.round(
           day.temperature.maximum
         )}°</strong>
         <div class="temperature-range">max</div>
         </div>
        </div> 
        </div>
`;
    }
  });
  forecastElement.innerHTML = forecastHtml;
}

searchCity("Sydney");
displayForecast();
