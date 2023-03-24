import { useEffect, useRef, useState } from "react";
import { DataForApi } from "./API-calls/apiData";
import "./App.css";
import Top from "./components/top/Top";
import { Mid } from "./components/mid/Mid";
import { GetCoords } from "./API-calls/getCoords";
import { GetWeather } from "./API-calls/getWeather";
import { UpdateWeather } from "./API-calls/updateWeather";

function App() {
  const [Coords, setCoords] = useState({
    latitude: "",
    longitude: "",
  });
  const [City, setCity] = useState("");
  const [OnSearchWeather, setOnSearchWeather] = useState({
    date: "",
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
  const [OnLoadWeather, setOnLoadWeather] = useState({
    date: "",
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

  const handleSetStateOnChange = (element: any, method: any) => {
    method(element.current.value);
  };

  const handleWeatherOnLocationChange = () => {
    if (City != "") {
      return OnSearchWeather;
    } else {
      return OnLoadWeather;
    }
  };

  const dataForApi = new DataForApi();
  const coords = new GetCoords();
  const getWeather = new GetWeather();
  const updateWeather = new UpdateWeather();
  const inputRef = useRef(null);
  coords.getCurrentLocation(setCoords);

  useEffect(() => {
    dataForApi.currentLocation = Coords;
    if (OnLoadWeather.date === "") {
      updateWeather.updateOnLoadWeather(
        getWeather,
        dataForApi.returnOnLoadCurrentWeatherLink(),
        dataForApi.returnOnLoadHourlyWeatherlink(),
        dataForApi.returnOnLoadDailyWeatherLink(),
        setOnLoadWeather,
        dataForApi.currentLocation
      );
    } else {
      return;
    }
  }, [Coords]);

  useEffect(() => {
    dataForApi.cityForSearch = City;
    updateWeather.updateOnSearchWeather(
      getWeather,
      dataForApi.returnOnSerachCurrentWeatherLink(),
      dataForApi.returnOnSearchHourlyWeatherlink(),
      dataForApi.returnOnSearchDailyWeatherLink(),
      setOnSearchWeather,
      dataForApi.cityForSearch
    );
  }, [City]);

  useEffect(() => {
    handleWeatherOnLocationChange();
  }, [OnLoadWeather, OnSearchWeather]);
  return (
    <div className="App">
      <Top
        handleSetStateOnChange={handleSetStateOnChange}
        setOnSearchWeather={{ setCity, inputRef }}
        onSearchWeather={handleWeatherOnLocationChange()}
      />
      <Mid
        onSearchHourlyWeather={handleWeatherOnLocationChange().hourlyWeather}
      />
    </div>
  );
}

export { App };
