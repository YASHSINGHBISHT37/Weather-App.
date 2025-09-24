import React from "react";

// Map of weather codes to description and icon name from Bas Milius set
export const weatherCodes = {
  0: { desc: "Clear sky", icon: "clear-day" },
  1: { desc: "Mainly clear", icon: "partly-cloudy-day" },
  2: { desc: "Partly cloudy", icon: "cloudy" },
  3: { desc: "Overcast", icon: "overcast" },
  45: { desc: "Fog", icon: "fog" },
  48: { desc: "Depositing rime fog", icon: "fog" },
  51: { desc: "Light drizzle", icon: "drizzle" },
  53: { desc: "Moderate drizzle", icon: "drizzle" },
  55: { desc: "Dense drizzle", icon: "drizzle" },
  56: { desc: "Light freezing drizzle", icon: "sleet" },
  57: { desc: "Dense freezing drizzle", icon: "sleet" },
  61: { desc: "Slight rain", icon: "rain" },
  63: { desc: "Moderate rain", icon: "rain" },
  65: { desc: "Heavy rain", icon: "rain" },
  66: { desc: "Light freezing rain", icon: "sleet" },
  67: { desc: "Heavy freezing rain", icon: "sleet" },
  71: { desc: "Slight snow fall", icon: "snow" },
  73: { desc: "Moderate snow fall", icon: "snow" },
  75: { desc: "Heavy snow fall", icon: "snow" },
  77: { desc: "Snow grains", icon: "snow" },
  80: { desc: "Slight rain showers", icon: "rain" },
  81: { desc: "Moderate rain showers", icon: "rain" },
  82: { desc: "Violent rain showers", icon: "rain" },
  85: { desc: "Slight snow showers", icon: "snow" },
  86: { desc: "Heavy snow showers", icon: "snow" },
  95: { desc: "Thunderstorm", icon: "thunderstorms" },
  96: { desc: "Thunderstorm with slight hail", icon: "thunderstorms" },
  99: { desc: "Thunderstorm with heavy hail", icon: "thunderstorms" },
};

const WeatherDisplay = ({ code, temperature }) => {
  const weather = weatherCodes[code] || { desc: "Unknown", icon: "clear-day" };
  const iconPath = `/weather-icons/${weather.icon}.svg`; // Using Bas Milius SVGs

  return (
    <div className="weather-display flex items-center gap-2">
      <img src={iconPath} alt={weather.desc} className="w-10 h-10" />
      <div>
        <div className="text-lg font-bold">{temperature}°C</div>
        <div className="text-sm">{weather.desc}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
