import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="">
        <h1>
          <span id="city">{props.data.city}</span>
        </h1>
        <WeatherIcon code={props.data.icon} />
      </div>
      <div className="row">
        <h2 className="col-6">
          <span className="text-capitalize" id="condition">
            {props.data.description}
          </span>
          <br />
          <span id="current-temp">
            <Temperature celsius={props.data.currentTemperature} />
          </span>
          <br />
          <span id="h-temp-indicator">H: </span>
          <span id="high-temp"> </span>
          {props.data.highTemperature}
          <span id="h-degree-populate">ºC </span> |
          <span id="l-temp-indicator"> L: </span>
          <span id="low-temp">{props.data.lowTemperature}</span>
          <span id="l-degree-populate">ºC </span>
          <div id="humidity">Humidity: {props.data.humidity}%</div>
          <div id="wind">Wind: {props.data.wind}km/h</div>
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
