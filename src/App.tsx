import React, { useState } from "react";
import { DataForApi } from "./API-calls/apiData";
import "./App.css";
import Top from "./components/top/Top";
import { Mid } from "./components/mid/Mid";
import { GetCoords } from "./API-calls/getCoords";
import { GetWeather } from "./API-calls/getWeather";
import { UpdateWeather } from "./API-calls/updateWeather";
function App() {
  const [Coords, setCoords] = useState({});
  const [City, setCity] = useState("");
  const [OnSearchWeather, setOnSearchWeather] = useState({
    location: "",
    currentWeather: "",
    hourlyWeather: [],
  });
  const [OnLoadWeather, setOnLoadWeather] = useState({});
  const handleSetStateOnChange = (e: any) => {
    setCity(e.target.value);
  };
  const handleUpdateWeather = (
    updater: any,
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    setOnSearchWeatherState: any
  ) => {
    updater.updateOnSearchWeather(
      sub,
      currentWeatherLink,
      hourlyWeatherLink,
      setOnSearchWeatherState
    );
  };

  const dataForApi = new DataForApi();
  const getWeather = new GetWeather();
  const updateWeather = new UpdateWeather();
  const coords = new GetCoords();
  coords.getCurrentLocation(setCoords);
  dataForApi.cityForSearch = City;
  dataForApi.currentLocation = Coords;

  return (
    <div className="App">
      <Top
        handleSetStateOnChange={handleSetStateOnChange}
        handleUpdateWeather={handleUpdateWeather}
        cityState={City}
        updateWeatherData={{ dataForApi, getWeather, updateWeather }}
        setOnSearchWeatherState={setOnSearchWeather}
        onSearchWeather={OnSearchWeather}
      />
      <Mid onSearchWeather={OnSearchWeather} />
    </div>
  );
}

export { App };
