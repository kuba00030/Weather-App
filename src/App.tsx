import React, { useEffect, useState } from "react";
import { DataForApi } from "./API-calls/apiData";
import "./App.css";
import Top from "./components/top/Top";
import { Mid } from "./components/mid/Mid";
import { GetCoords } from "./API-calls/getCoords";
import { GetWeather } from "./API-calls/getWeather";
import { UpdateWeather } from "./API-calls/updateWeather";
import { IHandleUpdate } from "./interfaces/interfaces";

function App() {
  const [Coords, setCoords] = useState({});
  const [City, setCity] = useState("");
  const [OnSearchWeather, setOnSearchWeather] = useState({
    location: {
      city: "",
      country: "",
    },
    currentWeather: {
      clouds: 0,
      description: "",
      feelsLike: 0,
      humidity: 0,
      icon: "",
      pressure: 0,
      temperature: 0,
      visibility: 0,
      wind: 0,
    },
    hourlyWeather: [],
  });
  const [OnLoadWeather, setOnLoadWeather] = useState();
  const handleSetStateOnChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleUpdateWeather: IHandleUpdate = (
    updater,
    sub,
    currentWeatherLink,
    hourlyWeatherLink,
    setOnSearchWeatherState
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
      <Mid onSearchHourlyWeather={OnSearchWeather.hourlyWeather} />
    </div>
  );
}

export { App };
