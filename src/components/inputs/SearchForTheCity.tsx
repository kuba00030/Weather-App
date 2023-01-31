import React from "react";
import { useState } from "react";

interface SearchForTheCityProps {
  widthVal: string;
  widthUnit: string;
  flex: string | number;
  setCityForSearchMethod: any;
  handleSetStateOnChange: any;
  handleUpdateWeather: any;
  updateWeatherData: any;
}

const SearchForTheCity = ({
  widthVal,
  widthUnit,
  flex,
  setCityForSearchMethod,
  handleSetStateOnChange,
  handleUpdateWeather,
  updateWeatherData,
}: SearchForTheCityProps) => {
  const [City, setCity] = useState("");

  return (
    <input
      style={{ width: `${widthVal}${widthUnit}`, flex: flex }}
      id="given-location"
      type="text"
      placeholder="Enter location"
      value={City}
      onChange={(e) => {
        handleSetStateOnChange(e, setCity);
      }}
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          setCityForSearchMethod.setCityForSearch(City);
          handleUpdateWeather(
            updateWeatherData.updateWeather,
            updateWeatherData.getWeather,
            updateWeatherData.dataForApi.returnOnSerachCurrentWeatherLink(),
            updateWeatherData.dataForApi.returnOnSearchHourlyWeatherlink()
          );
        }
      }}
    />
  );
};

export { SearchForTheCity };
