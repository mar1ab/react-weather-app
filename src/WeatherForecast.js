import React from "react";

export default function WeatherForecast() {
  return (
    <div>
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
