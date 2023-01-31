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
  // const [OnLoadWeather, setOnLoadWeather] = useState({});
  // const [OnSearchWeather, setOnSearchWeather] = useState({});
  const handleSetStateOnChange = (e: any, setState: any) => {
    setState(e.target.value);
  };
  const handleUpdateWeather = (
    updater: any,
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string
  ) => {
    updater.updateOnSearchWeather(sub, currentWeatherLink, hourlyWeatherLink);
  };
  const dataForApi = new DataForApi();
  const getWeather = new GetWeather();
  const updateWeather = new UpdateWeather();
  return (
    <div className="App">
      <Top
        setCityForSearchMethod={dataForApi}
        handleSetStateOnChange={handleSetStateOnChange}
        updateWeatherData={{ dataForApi, getWeather, updateWeather }}
        handleUpdateWeather={handleUpdateWeather}
      />
      <Mid />
    </div>
  );
}

export { App };
