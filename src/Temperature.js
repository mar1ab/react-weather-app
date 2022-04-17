import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="Temperature">
        {Math.round(props.currentCelsius)}
        ºC
        <br />
        H:
        {props.highCelsius}
        {props.lowCelsius}
        ºC
        <div className="btn-custom">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-primary">
              ºC
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={showFahrenheit}
            >
              ºF
            </button>
          </div>
        </div>
      </span>
    );
  } else {
    let currentFahrentheit = Math.round((props.currentCelsius * 9) / 5 + 32);
    let highFahrentheit = Math.round((props.highCelsius * 9) / 5 + 32);
    let lowFahrentheit = Math.round((props.lowCelsius * 9) / 5 + 32);
    return (
      <span className="Temperature">
        {currentFahrentheit}
        ºF
        <br />
        H:
        {highFahrentheit}
        ºF | L:
        {lowFahrentheit}
        ºF
        <div className="btn-custom">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={showCelsius}
            >
              ºC
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={showFahrenheit}
            >
              ºF
            </button>
          </div>
        </div>
      </span>
    );
  }
}
