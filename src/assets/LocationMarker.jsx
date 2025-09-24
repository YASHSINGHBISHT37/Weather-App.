import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import axios from "axios";

function LocationMarker({ setCoords }) {
  useMapEvents({
    click(e) {
      setCoords(e.latlng); // set clicked coordinates
    },
  })
  return null;
}

export default function WeatherMap() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      setWeather(res.data.current_weather);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (coords) {
      fetchWeather(coords.lat, coords.lng)
    }
  }, [coords]);

  return (
    <div className="flex flex-col items-center">
      <MapContainer
        center={[20.5937, 78.9629]} // India default
        zoom={5}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {coords && <Marker position={[coords.lat, coords.lng]} />}
        <LocationMarker setCoords={setCoords} />
      </MapContainer>

      {weather && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <h2>🌤 Weather at [{coords.lat.toFixed(2)}, {coords.lng.toFixed(2)}]</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}
