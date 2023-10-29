const apiKey = "3abe2b05af26a43017e38244778cd638";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");
const city = document.querySelector(".city");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const weatherData = await response.json();

    if (weatherData.cod === "404") {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const mainWeather = weatherData.weather[0].main;
      displayWeatherInfo(weatherData.name, mainWeather, weatherData.main.temp);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function displayWeatherInfo(cityName, weather, temperature) {
  document.querySelector(".city").textContent = cityName;
  document.querySelector(".temp").textContent = `${Math.round(temperature)}°C`;
  document.querySelector(".humidity").textContent = "N/A"; // You can add humidity data
  document.querySelector(".wind").textContent = "N/A"; // You can add wind data

  setWeatherIcon(weather);
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

function setWeatherIcon(weather) {
  const weatherIcon = document.querySelector(".weather-icon");
  switch (weather) {
    case "Clouds":
      weatherIcon.src = "imgs/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "imgs/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "imgs/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "imgs/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "imgs/mist.png";
      break;
    default:
      // Handle other weather conditions
      break;
  }
}

searchBox.addEventListener("input", () => {
  const searchTerm = searchBox.value.trim();
  if (searchTerm.length > 0) {
    checkWeather(searchTerm);
  }
});
