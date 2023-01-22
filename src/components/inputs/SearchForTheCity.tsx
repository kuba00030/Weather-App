import React from "react";
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
  return (
    <input
      style={{ width: `${widthVal}${widthUnit}`, flex: flex }}
      id="given-location"
      type="text"
      placeholder="Enter location"
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          console.log("Here is a place for a function");
        }
      }}
    />
  );
};

export { SearchForTheCity };
