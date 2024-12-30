import { DateTime } from "luxon";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Fonction générique pour récupérer des données météo
const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${infoType} data: ${response.statusText}`);
  }

  return response.json();
};

// Formater les données météo actuelles
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

// Formater les prévisions météo
const formatForecastWeather = (data) => {
  const { list, city } = data;

  // Obtenir les prévisions pour les prochains jours
  const daily = list
    .filter((_, idx) => idx % 8 === 0)
    .map((item) => ({
      title: formatToLocalTime(item.dt, city.timezone, "ccc"),
      temp: item.main.temp,
      icon: item.weather[0].icon,
    }));

  // Obtenir les prévisions horaires
  const hourly = list.slice(0, 5).map((item) => ({
    title: formatToLocalTime(item.dt, city.timezone, "hh:mm a"),
    temp: item.main.temp,
    icon: item.weather[0].icon,
  }));

  return { daily, hourly };
};

// Récupération et formatage des données météo
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const formattedForecastWeather = await getWeatherData("forecast", {
    ...searchParams,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// Formater l'heure locale
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// Générer l'URL de l'icône météo
const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
