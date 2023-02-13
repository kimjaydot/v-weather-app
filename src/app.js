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
  temperature.innerHTML = Math.round(response.data.temperature.current);
  city.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "b0cd9e5049t9c84aa04obbbf3b123bbb";
let city = "New York";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);
