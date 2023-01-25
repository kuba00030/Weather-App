import React from "react";
import { useState } from "react";
import { DataForApi } from "../../API-calls/apiData";

interface SearchForTheCityProps {
  widthVal: string;
  widthUnit: string;
  flex: string | number;
}

const SearchForTheCity: React.FC<SearchForTheCityProps> = ({
  widthVal,
  widthUnit,
  flex,
}) => {
  const [City, setCity] = useState("");
  const handleValueChange = (e: any) => {
    setCity(e.target.value);
  };
  const dataForApi = new DataForApi(City);

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
          console.log("Here is a place for a function");

          dataForApi.returnOnSerachData();
        }
      }}
    />
  );
};

export { SearchForTheCity };

//przekazac funkcje w propsie zeby zwracala wartosc do stanu w Top a nie w inpucie
