import { AsyncPaginate } from "react-select-async-paginate";
import { rapidApi } from "../../API/.apiKeys";
import { useState } from "react";
import { Coords } from "../../hooks/useGetCoords";

type SearchInput = {
  placeholder?: string;
  onChange: (searchData: Coords | undefined) => void;
};

export const SearchInput = (props: SearchInput) => {
  const [search, setSearch] = useState<string>("");

  const handleOnChange = (searchData: any) => {
    const [latitude, longitude] = searchData.value.split(" ");

    props.onChange({ lat: Number(latitude), lon: Number(longitude) });

    setSearch(searchData);
  };

  const loadOptions = (inputValue: string): any => {
    return fetch(
      `${rapidApi.url}cities?namePrefix=${inputValue}`,
      rapidApi.options
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            };
          }),
        };
      });
  };

  return (
    <AsyncPaginate
      placeholder={props.placeholder}
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
