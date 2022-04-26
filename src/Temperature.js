import React from "react";

export default function Temperature(props) {
  return (
    <span className="Temperature">
      {Math.round(props.currentCelsius)}
      ºC
      <br />
      H:
      {props.highCelsius}ºC | L:{props.lowCelsius}
      ºC
    </span>
  );
}
