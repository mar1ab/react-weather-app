import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="">
        <h1>{props.data.city}</h1>
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
        </h2>
        <h2 className="col-6">
          Last updated
          <FormattedDate date={props.data.date} />
          <br />
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind}km/h</div>
        </h2>
      </div>
    </div>
  );
}
