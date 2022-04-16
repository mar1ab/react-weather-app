import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      currentTemperature: Math.round(response.data.main.temp),
      highTemperature: Math.round(response.data.main.temp_max),
      lowTemperature: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form>
            <input type="text" placeholder="Search city..." />
            <button className="form-buttons">
              <i className="fas fa-search"></i>
            </button>
            <button className="form-buttons">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </form>

          <div className="row">
            <h1>
              <span className="col-6" id="city">
                {weatherData.city}
              </span>
              <img
                className="col-6"
                id="icon-element"
                src={weatherData.iconUrl}
              />
            </h1>
          </div>
          <div className="row">
            <h2 className="col-6">
              <span className="text-capitalize" id="condition">
                {weatherData.description}
              </span>
              <br />
              <span id="current-temp">{weatherData.currentTemperature}</span>
              <span id="temp-unit">ºC</span>
              <br />
              <span id="h-temp-indicator">H </span>
              <span id="high-temp"> </span>
              {weatherData.highTemperature}
              <span id="h-degree-populate">ºC </span>
              <span id="l-temp-indicator">L </span>
              <span id="low-temp"> </span>
              {weatherData.lowTemperature}
              <span id="l-degree-populate">ºC </span>
              <div id="humidity">{weatherData.humidity}%</div>
              <div id="wind">{weatherData.wind}km/h</div>
            </h2>
            <h2 className="col-6">
              <span id="date-time">Sunday 16:16</span>
            </h2>
          </div>
          <div className="row forecast m-3" id="forecast">
            <div className="col">
              <strong>WED</strong>
              <br />
              15º/7º <br />
              🌤
            </div>
            <div className="col">
              <strong>THU</strong> <br />
              14º/7º <br />
              🌧
            </div>
            <div className="col">
              <strong>FRI </strong>
              <br />
              16º/6º <br />
              🌤
            </div>
            <div className="col">
              <strong>SAT </strong>
              <br />
              13º/5º <br />
              🌩
            </div>
            <div className="col">
              <strong>SUN </strong>
              <br />
              15º/7º <br />
              ☀️
            </div>
          </div>
          <div className="btn-custom">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-primary"
                id="celcius-button"
              >
                ºC
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="fahrenheit-button"
              >
                ºF
              </button>
            </div>
          </div>
          <a
            href="https://github.com/mar1ab/react-weather-app"
            id="github-link"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    );
  } else {
    let city = "Tokyo";
    const apiKey = "c10c120febfbdbb2ecbedb567e2ec32d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
