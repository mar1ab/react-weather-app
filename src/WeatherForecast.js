import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div>
      <div className="WeatherForecast row forecast m-3" id="forecast">
        <div className="col">
          <strong>WED</strong>
          <br />
          15º/7º <br />
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col">
          <strong>THU</strong>
          <br />
          14º/7º <br />
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col">
          <strong>FRI</strong>
          <br />
          16º/6º <br />
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col">
          <strong>SAT</strong>
          <br />
          13º/5º <br />
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col">
          <strong>SUN</strong>
          <br />
          15º/7º <br />
          <WeatherIcon code="01d" size={50} />
        </div>
      </div>
    </div>
  );
}
