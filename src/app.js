function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let days = daysOfWeek[date.getDay()];
  return `${days} ${hours}: ${minutes}`;
}

function displayTemperature(response) {
  let temperature = document.querySelector(".currentTemp");
  let city = document.querySelector(".city");
  let description = document.querySelector("li#description");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  city.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
}

function search(city) {
  let apiKey = "b0cd9e5049t9c84aa04obbbf3b123bbb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("New York");
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
