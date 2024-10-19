
const APIkey="35978116edb04bedc4671ca3bb828cc4"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const weatherIcon = document.querySelector('.weather-icon');
const buttonTag = document.querySelector('button');
const descrip = document.querySelector('#report');
const tempMinValue = document.querySelector('.temp-min');
const tempMaxValue = document.querySelector('.temp-max');
const errorMessage = document.querySelector('.err');
const weatherId = document.querySelector('.weather');

buttonTag.addEventListener('click', () => {
  const input = document.querySelector('input');
  const inputValue = input.value.toLowerCase();
  console.log(inputValue);

  if (inputValue === "") {
    errorMessage.style.display = "block";
  } else {
    getWeatherReport(inputValue);
  }
});

async function getWeatherReport(city) {
  try {
    const response = await fetch(`${apiURL}&appid=${APIkey}&q=${city}`);
    const data = await response.json();
    console.log(data);

    if (response.status === 404) {
      errorMessage.style.display = "block";
      weatherId.style.display = "none";
    } else {
      updateWeatherDetails(data);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    errorMessage.style.display = "block";
    weatherId.style.display = "none";
  }
}

function updateWeatherDetails(data) {
  const weatherMain = data.weather[0].main;
  const weatherDescription = data.weather[0].description;

  const weatherIconMap = {
    'Haze': 'haze.png',
    'Clear': 'clear.png',
    'Clouds': 'clouds.png',
    'Drizzle': 'drizzle.png',
    'Mist': 'mist.png',
    'Rain': 'rain.png',
    'Snow': 'snow.png',
    'Thunderstorm': 'storm.png'
  };

  weatherIcon.src = `images/${weatherIconMap[weatherMain] || 'default.png'}`;
  descrip.innerHTML = weatherDescription;

  document.querySelector('.weather').style.display = "block";
  errorMessage.style.display = "none";
  tempMaxValue.innerHTML = `max-temp: ${Math.round(data.main.temp_max)}°C`;
  tempMinValue.innerHTML = `min-temp: ${Math.round(data.main.temp_min)}°C`;
  document.querySelector('.feels').innerHTML=`feels_like: ${Math.round(data.main.feels_like)}°C`

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector('#humidity').innerHTML = `${data.main.humidity}%`;
  document.querySelector('#wind').innerHTML = `${data.wind.speed}Km/h`;
}