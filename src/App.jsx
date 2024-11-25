import React, { useState } from "react";
import "./App.css";
const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const App = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    // Mock weather data
    const mockWeatherData = {
        Calcutta: {
            name: "London",
            weather: [{ description: "clear sky" }],
            main: { temp: 18, humidity: 56 },
        },
        Uttrakhand: {
            name: "Paris",
            weather: [{ description: "light rain" }],
            main: { temp: 12, humidity: 80 },
        },
        Pune: {
            name: "Tokyo",
            weather: [{ description: "overcast clouds" }],
            main: { temp: 20, humidity: 70 },
        },
    };

    const fetchWeather = () => {
        const cityData = mockWeatherData[city];
        if (cityData) {
            setWeather(cityData);
            setError("");
        } else {
            setWeather(null);
            setError("City not found. Try Calcutta, Uttrakhand, or Pune.");
        }
    };

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {error && <p className="error-message">{error}</p>}

            {weather && (
                <div className="weather-container">
                    <h2>{weather.name}</h2>
                    <p><strong>Description:</strong> {weather.weather[0].description}</p>
                    <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
                    <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default App;