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
            <strong>WED</strong>
            <br />
            <span className="forecast-high">15</span>º/
            <span className="forecast-low">7</span>º <br />
            <WeatherIcon code="01d" size={50} />
          </div>
          <div className="col">
            <strong>THU</strong>
            <br />
            <span className="forecast-high">14</span>º/
            <span className="forecast-low">7</span>º <br />
            <WeatherIcon code="01d" size={50} />
          </div>
          <div className="col">
            <strong>FRI</strong>
            <br />
            <span className="forecast-high">16</span>º/
            <span className="forecast-low">6</span>º <br />
            <WeatherIcon code="01d" size={50} />
          </div>
          <div className="col">
            <strong>SAT</strong>
            <br />
            <span className="forecast-high">13</span>º/
            <span className="forecast-low">5</span>º <br />
            <WeatherIcon code="01d" size={50} />
          </div>
          <div className="col">
            <strong>SUN</strong>
            <br />
            <span className="forecast-high">15</span>º/
            <span className="forecast-low">7</span>º <br />
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
