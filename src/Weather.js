import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response);
  }

  if (ready) {
    return (
      <div class="container">
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
              <span className="col-6" id="city"></span>
              <img className="col-6" id="icon-element" />
            </h1>
          </div>
          <div className="row">
            <h2 className="col-6">
              <span id="condition"> Cloudy</span>
              <br />
              <span id="current-temp">16</span>
              <span id="temp-unit">ºC</span>
              <br />
              <span id="h-temp-indicator">H </span>
              <span id="high-temp"> </span>20{" "}
              <span id="h-degree-populate">ºC </span>
              <span id="l-temp-indicator">L </span>
              <span id="low-temp"> </span>13{" "}
              <span id="l-degree-populate">ºC </span>
              <div id="humidity">50%</div>
              <div id="wind">2km/h</div>
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
