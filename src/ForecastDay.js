import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function highTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function lowTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  return (
    <div className="ForecastDay row forecast m-3">
      <div className="col">
        <span className="forecast-day">
          <strong>{props.data.dt}</strong>
        </span>
        <br />
        <span className="forecast-high">{highTemp()}</span>/
        <span className="forecast-low">{lowTemp()}</span>
        <br />
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
    </div>
  );
}
