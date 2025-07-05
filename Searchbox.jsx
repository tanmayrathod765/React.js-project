import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);

  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API = "ef45e95c5b00591fb586e6f38645f64c";

  const getWeatherInfo = async () => {
    try {
      const res = await fetch(`${URL}q=${city}&appid=${API}&units=metric`);
      const data = await res.json();

      if (data.cod === 200) {
        const result = {
          name: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          weather: data.weather[0].description,
        };
        setWeatherInfo(result);
      } else {
        setWeatherInfo({ error: "City not found!" });
      }
    } catch (err) {
      setWeatherInfo({ error: "Something went wrong!" });
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherInfo();
    setCity("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexDirection: "column", maxWidth: "300px" }}>
        <TextField
          id="City"
          label="City name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Send
        </Button>
      </form>

      {/* Showing Weather Info */}
      {weatherInfo && (
        <div style={{ marginTop: "20px" }}>
          {weatherInfo.error ? (
            <p style={{ color: "red" }}>{weatherInfo.error}</p>
          ) : (
            <>
              <h4>Weather in {weatherInfo.name}</h4>
              <p>🌡 Temperature: {weatherInfo.temp}°C</p>
              <p>💧 Humidity: {weatherInfo.humidity}%</p>
              <p>🔼 Pressure: {weatherInfo.pressure} hPa</p>
              <p>🌬 Wind Speed: {weatherInfo.wind} m/s</p>
              <p>⛅ Weather: {weatherInfo.weather}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
