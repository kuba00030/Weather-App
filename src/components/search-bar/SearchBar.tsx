import { useState } from "react";
import { SearchWeatherButton } from "../buttons/SearchWeatherButton";
import { SearchInput } from "../inputs/SearchInput";
import { Coords } from "../../hooks/useGetCoords";
import { useWeatherConext } from "../../context/useWeatherContext";

export const SearchBar = () => {
  const { setSearchVal } = useWeatherConext();
  const [searchCityCoords, setSearchCityCoords] = useState<Coords | undefined>(
    undefined
  );
  return (
    <div className="search-bar-container">
      <div className="flex-grow-1">
        <SearchInput
          placeholder="Search for the city"
          onChange={setSearchCityCoords}
        />
      </div>
      <SearchWeatherButton
        class="rounded border-0 p-2 fc-gray fw-bold search-button"
        buttonTxt="Search"
        onClick={() => {
          setSearchVal(searchCityCoords);
        }}
      />
    </div>
  );
};
