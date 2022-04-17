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
          <span className="text-capitalize">{props.data.description}</span>
          <br />
          <Temperature
            currentCelsius={props.data.currentTemperature}
            highCelsius={props.data.highTemperature}
            lowCelsius={props.data.lowTemperature}
          />
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind}km/h</div>
        </h2>
        <h2 className="col-6">
          <span>
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
