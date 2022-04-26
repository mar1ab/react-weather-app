import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
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

  function searchCity() {
    const apiKey = "c10c120febfbdbb2ecbedb567e2ec32d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSumbit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentCoords(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentCity);
  }

  function searchCurrentCity(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "c10c120febfbdbb2ecbedb567e2ec32d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
              <i
                className="fas fa-map-marker-alt"
                onClick={getCurrentCoords}
              ></i>
            </button>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
