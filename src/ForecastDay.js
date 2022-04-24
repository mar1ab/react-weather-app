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

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <span>
      <span className="forecast-day">
        <strong>{day()}</strong>
      </span>
      <br />
      <span className="forecast-high">{highTemp()}</span>/
      <span className="forecast-low">{lowTemp()}</span>
      <br />
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
    </span>
  );
}
