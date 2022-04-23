import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      currentTemperature: Math.round(response.data.main.temp),
      highTemperature: Math.round(response.data.main.temp_max),
      lowTemperature: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "c10c120febfbdbb2ecbedb567e2ec32d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSumbit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleSumbit}>
            <input
              type="text"
              placeholder="Search city..."
              onChange={handleCityChange}
            />
            <button className="form-buttons">
              <i className="fas fa-search"></i>
            </button>
            <button className="form-buttons">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
