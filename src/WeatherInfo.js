import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1>
          <span className="col-6" id="city">
            {props.data.city}
          </span>
          <WeatherIcon code={props.data.icon} />
        </h1>
      </div>
      <div className="row">
        <h2 className="col-6">
          <span className="text-capitalize" id="condition">
            {props.data.description}
          </span>
          <br />
          <span id="current-temp">{props.data.currentTemperature}</span>
          <span id="temp-unit">ºC</span>
          <br />
          <span id="h-temp-indicator">H </span>
          <span id="high-temp"> </span>
          {props.data.highTemperature}
          <span id="h-degree-populate">ºC </span>
          <span id="l-temp-indicator">L </span>
          <span id="low-temp"> </span>
          {props.data.lowTemperature}
          <span id="l-degree-populate">ºC </span>
          <div id="humidity">{props.data.humidity}%</div>
          <div id="wind">{props.data.wind}km/h</div>
        </h2>
        <h2 className="col-6">
          <span id="date-time">
            <FormattedDate date={props.data.date} />
          </span>
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
    </div>
  );
}
