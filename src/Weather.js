import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
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

      <div class="row">
        <h1>
          <span class="col-6" id="city"></span>
          <img class="col-6" id="icon-element" />
        </h1>
      </div>
      <div class="row">
        <h2 class="col-6">
          <span id="condition"> Cloudy</span>
          <br />
          <span id="current-temp">16</span>
          <span id="temp-unit">ºC</span>
          <br />
          <span id="h-temp-indicator">H </span>
          <span id="high-temp"> </span>20{" "}
          <span id="h-degree-populate">ºC </span>
          <span id="l-temp-indicator">L </span>
          <span id="low-temp"> </span>13 <span id="l-degree-populate">ºC </span>
          <div id="humidity">50%</div>
          <div id="wind">2km/h</div>
        </h2>
        <h2 class="col-6">
          <span id="date-time">Sunday 16:16</span>
        </h2>
      </div>
      <div class="row forecast" id="forecast">
        <div class="col">
          <strong>WED</strong>
          <br />
          15º/7º <br />
          🌤
        </div>
        <div class="col">
          <strong>THU</strong> <br />
          14º/7º <br />
          🌧
        </div>
        <div class="col">
          <strong>FRI </strong>
          <br />
          16º/6º <br />
          🌤
        </div>
        <div class="col">
          <strong>SAT </strong>
          <br />
          13º/5º <br />
          🌩
        </div>
        <div class="col">
          <strong>SUN </strong>
          <br />
          15º/7º <br />
          ☀️
        </div>
      </div>
      <div class="btn-custom">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-success" id="celcius-button">
            ºC
          </button>
          <button type="button" class="btn btn-success" id="fahrenheit-button">
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
  );
}
