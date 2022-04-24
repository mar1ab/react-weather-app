import axios from "axios";
import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="WeatherForecast row forecast m-3" id="forecast">
          <div className="col">
            <span className="forecast-day">
              <strong>WED</strong>
            </span>
            <br />
            <span className="forecast-high">{forecast[0].temp.max}</span>º/
            <span className="forecast-low">{forecast[0].temp.min}</span>º <br />
            <WeatherIcon code="01d" size={50} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c10c120febfbdbb2ecbedb567e2ec32d";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
