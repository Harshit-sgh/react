import React, { useState } from "react";
import axios from "axios";

const WeatherForecast = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  const fetchForecast = async () => {
    try {
      const response = await axios.get(
        https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=YOUR_API_KEY
      );
      setForecast(response.data.list.slice(0, 5)); // Show next 5 periods
    } catch (error) {
      console.error("Error fetching forecast data", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchForecast}>Get Forecast</button>
      {forecast && (
        <ul>
          {forecast.map((f, index) => (
            <li key={index}>
              <p>{new Date(f.dt * 1000).toLocaleString()}</p>
              <p>Temp: {f.main.temp}°C</p>
              <p>{f.weather[0].description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeatherForecast;