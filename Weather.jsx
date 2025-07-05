import React from "react";

export default function WeatherInfo({ data }) {
  if (!data) return null;

  if (data.error) {
    return <p style={{ color: "red", marginTop: "20px" }}>{data.error}</p>;
  }

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "300px" }}>
      <h4>Weather in {data.name}</h4>
      <p>🌡 Temperature: {data.temp}°C</p>
      <p>💧 Humidity: {data.humidity}%</p>
      <p>🔼 Pressure: {data.pressure} hPa</p>
      <p>🌬 Wind Speed: {data.wind} m/s</p>
      <p>⛅ Weather: {data.weather}</p>
    </div>
  );
}
