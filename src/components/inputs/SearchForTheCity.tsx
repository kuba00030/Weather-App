import React from "react";
import { useState } from "react";
import { dataForApi } from "../../API-calls/apiData";
import { getWeather } from "../../API-calls/getWeather";

interface SearchForTheCityProps {
  widthVal: string;
  widthUnit: string;
  flex: string | number;
}
let onSearchWeatherInput: any;
const SearchForTheCity: React.FC<SearchForTheCityProps> = ({
  widthVal,
  widthUnit,
  flex,
}) => {
  const [City, setCity] = useState("");
  const [OnSearchWeather, setOnSearchWeather] = useState({});
  const handleValueChange = (e: any) => {
    setCity(e.target.value);
  };

  const setOnSearchWeatherState = async function () {
    const onSerachWeather = await getWeather.setOnSearchWeather(
      dataForApi.returnOnSerachCurrentWeatherLink(),
      dataForApi.returnOnSearchHourlyWeatherlink()
    );
    setOnSearchWeather(onSerachWeather);
  };
  onSearchWeatherInput = OnSearchWeather;

  return (
    <input
      style={{ width: `${widthVal}${widthUnit}`, flex: flex }}
      id="given-location"
      type="text"
      placeholder="Enter location"
      value={City}
      onChange={handleValueChange}
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          dataForApi.setCityForSearch(City);
          setOnSearchWeatherState();
          console.log(City);
        }
      }}
    />
  );
};

export { SearchForTheCity, onSearchWeatherInput };
