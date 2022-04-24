import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  return (
    <div className="ForecastDay row forecast m-3">
      <div className="col">
        <span className="forecast-day">
          <strong>{props.data.dt}</strong>
        </span>
        <br />
        <span className="forecast-high">{props.data.temp.max}</span>º/
        <span className="forecast-low">{props.data.temp.min}</span>º <br />
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
    </div>
  );
}
