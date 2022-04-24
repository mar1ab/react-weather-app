import axios from "axios";
import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    <div></div>;
  }

  if (loaded) {
    const apiKey = "c10c120febfbdbb2ecbedb567e2ec32d";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  } else {
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
}
