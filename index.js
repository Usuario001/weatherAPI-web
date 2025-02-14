import $ from '/utilsJP/dom.js'
import { loadEnvVars, getEnvVar } from './config.js';

(async () => {
    await loadEnvVars();
  })();

const form = $('#form-container').first()

form.addEventListener("submit", event => {
    event.preventDefault();
    let city = $('#city').first().value;
    /**
     * set weather data
     */
    getWeatherData(city).then((response) => {
        const {main, clouds, wind} = response
        const KELVIN = 273.15;

        const section = $(".response").first();
        section.style['display'] = 'flex'

        const minTemp = $(".min-temp").first();
        minTemp.textContent = Math.trunc(main.temp_min - KELVIN) + '℃';
        const currentTemp = $(".current-temp").first();
        currentTemp.textContent = Math.trunc(main.temp - KELVIN) + '℃';
        const maxTemp = $(".max-temp").first();
        maxTemp.textContent = Math.trunc(main.temp_max - KELVIN) + '℃';

        const humydity = $(".humydity").first();
        humydity.textContent = main.humidity + '%';
        const pressure = $(".pressure").first();
        pressure.textContent = main.pressure + 'hPa';

        const frontClouds = $(".clouds").first();
        frontClouds.textContent = clouds.all;
        const cloudsEmojis = $(".cloudsEmoji").first();
        const cloudEmoji = "☁";    
        cloudsEmojis.textContent = cloudEmoji.repeat(clouds.all);

        const currentTempl = $(".current-templ").first();
        currentTempl.textContent = wind.speed + 'm/s';

    });
});

/**
 * get weather data
 * @param {*} city 
 * @returns 
 */
function getWeatherData(city) {
    const API_WEATHER_KEY = getEnvVar('API_WEATHER_KEY');
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER_KEY}`
    ).then((response) => response.json());
}
