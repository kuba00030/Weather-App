import { createContext, useContext, useEffect, useState } from "react";
import { CurrentWeather, HourlyWeather } from "../API/apiCalls";
import useGetCoords from "../hooks/useGetCoords";
import useGetWeatherOnCoords from "../hooks/useGetWeatherOnCoords";
import useGetWeatherOnSearch from "../hooks/useGetWeatherOnSearch";
import { openWeatherKey } from "../API/apiKeys";

export type ContextProviderProps = {
  children: React.ReactNode;
};

export type Weather = {
  currentWeather: CurrentWeather;
  hourlyWeather: HourlyWeather;
};

export type WeatherContext = {
  weather: Weather | undefined;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
};

export const WeatherContext = createContext<WeatherContext | null>(null);

export default function WeatherContextProvider({
  children,
}: ContextProviderProps) {
  const { coords } = useGetCoords();
  const { getWeatherOnCoords } = useGetWeatherOnCoords();
  const { getWeatherOnSearch } = useGetWeatherOnSearch();
  const [weather, setWeather] = useState<Weather | undefined>(undefined);
  const [firstWeatherState, setFirstWeatherState] = useState<
    Weather | undefined
  >(undefined);
  const [searchVal, setSearchVal] = useState<string>("");

  useEffect(() => {
    if (coords === undefined) {
      window.alert(
        "Let us detect your location. It may take a while. Press 'OK' and wait."
      );
    } else {
      getWeatherOnCoords(
        openWeatherKey.apiUrl,
        openWeatherKey.apiKey,
        coords
      ).then((fetchedWeather) => {
        setWeather({ ...fetchedWeather });

        if (firstWeatherState === undefined) {
          setFirstWeatherState({ ...fetchedWeather });
        }
      });
    }
  }, [coords]);

  useEffect(() => {
    if (searchVal !== "") {
      getWeatherOnSearch(
        openWeatherKey.apiUrl,
        openWeatherKey.apiKey,
        searchVal
      ).then((fetchedWeather) => {
        setWeather({ ...fetchedWeather });
      });
    }

    if (searchVal === "" && firstWeatherState !== undefined) {
      setWeather({ ...firstWeatherState });
    }
  }, [searchVal]);

  return (
    <WeatherContext.Provider value={{ weather, setSearchVal }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherConext() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      "useWeatherContext should be used within a WeatherContextProvider"
    );
  }
  return context;
}
