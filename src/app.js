function displayTemperature(response) {
  let temperature = document.querySelector(".currentTemp");
  let city = document.querySelector(".city");
  let description = document.querySelector("li#description");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  city.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);

  console.log(response.data.temperature.current);
}

let apiKey = "b0cd9e5049t9c84aa04obbbf3b123bbb";
let city = "New York";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);
