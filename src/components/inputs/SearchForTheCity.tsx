import React from "react";
import { useState } from "react";
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
          console.log(City);
        }
      }}
    />
  );
};

export { SearchForTheCity };
