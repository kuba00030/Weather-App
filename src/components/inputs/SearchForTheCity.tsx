import React from "react";
import { useState } from "react";

interface SearchForTheCityProps {
  widthVal: string;
  widthUnit: string;
  flex: string | number;

  handleSetStateOnChange: any;
  handleUpdateWeather: any;
  updateWeatherData: any;
  setOnSearchWeatherState: any;
  cityState: any;
}

const SearchForTheCity = ({
  widthVal,
  widthUnit,
  flex,

  handleSetStateOnChange,
  handleUpdateWeather,
  updateWeatherData,
  setOnSearchWeatherState,
  cityState,
}: SearchForTheCityProps) => {
  return (
    <input
      style={{ width: `${widthVal}${widthUnit}`, flex: flex }}
      id="given-location"
      type="text"
      placeholder="Enter location"
      onChange={(e) => {
        handleSetStateOnChange(e);
      }}
      value={cityState}
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          handleUpdateWeather(
            updateWeatherData.updateWeather,
            updateWeatherData.getWeather,
            updateWeatherData.dataForApi.returnOnSerachCurrentWeatherLink(),
            updateWeatherData.dataForApi.returnOnSearchHourlyWeatherlink(),
            setOnSearchWeatherState
          );
        }
      }}
    />
  );
};

export { SearchForTheCity };
