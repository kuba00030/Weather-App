import React, { useState } from "react";
import { dataForApi } from "./API-calls/apiData";
import { getWeather } from "./API-calls/getWeather";
import "./App.css";
import { onSearchWeatherInput } from "./components/inputs/SearchForTheCity";
import Top from "./components/top/Top";

function App() {
  const [Coords, setCoords] = useState({});
  const [OnLoadWeather, setOnLoadWeather] = useState({});
  const [OnSearchWeather, setOnSearchWeather] = useState({});
  const currentLocation = function () {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat: number = position.coords.latitude;
      let long: number = position.coords.longitude;
      setCoords({ latitude: lat, longitude: long });
    });
  };

  const setOnLoadWeatherState = async function () {
    const onLoadWeather = await getWeather.setOnLoadWeather(
      dataForApi.returnOnLoadCurrentWeatherLink(),
      dataForApi.returnOnLoadHourlyWeatherlink()
    );

    setOnLoadWeather(onLoadWeather);
  };

  setOnLoadWeatherState();
  currentLocation();
  dataForApi.setCurrentLocation(Coords);

  return (
    <div className="App">
      <Top />
    </div>
  );
}

export { App };
