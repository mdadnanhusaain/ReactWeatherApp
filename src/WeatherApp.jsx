import "./WeatherApp.css";
import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({});

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  useEffect(
    function changeBackground() {
      document.body.style.backgroundImage = `url(${weatherInfo.full})`;
      document.body.style.backgroundSize = "150% 200%";
    },
    [weatherInfo]
  );

  return (
    <div className="WeatherApp">
      <div className="card">
        <b>
          <span className="heading">Weather App</span>
        </b>
        <br />
        <br />
        <SearchBox updateInfo={updateInfo} />
        <br />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
