import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
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
      date: new Date(response.data.dt * 1000),
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
          <WeatherInfo data={weatherData} />

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
    const apiKey = "c10c120febfbdbb2ecbedb567e2ec32d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
