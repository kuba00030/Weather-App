import { createContext, useContext, useEffect, useState } from "react";
import {
  CurrentWeather,
  DailyWeather,
  HourlyWeather,
  locationData,
} from "../API/apiCalls";
import useGetCoords, { Coords } from "../hooks/useGetCoords";
import useGetWeatherOnCoords from "../hooks/useGetWeatherOnCoords";
import { openWeatherKey } from "../API/apiKeys";

export type ContextProviderProps = {
  children: React.ReactNode;
};

export type WeatherData = {
  weather: {
    currentWeather: CurrentWeather;
    hourlyWeather: HourlyWeather[];
    dailyWeather: DailyWeather[];
  };
  location: locationData;
};

export type WeatherContext = {
  weatherData: WeatherData | undefined;
  setSearchVal: React.Dispatch<React.SetStateAction<Coords | undefined>>;
};

export const WeatherContext = createContext<WeatherContext | null>(null);

export default function WeatherContextProvider({
  children,
}: ContextProviderProps) {
  const { coords } = useGetCoords();
  const { getWeatherOnCoords } = useGetWeatherOnCoords();
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  const [firstWeatherState, setFirstWeatherState] = useState<
    WeatherData | undefined
  >(undefined);
  const [searchVal, setSearchVal] = useState<Coords | undefined>(undefined);

  useEffect(() => {
    if (coords === undefined) {
      window.alert(
        "Let us detect your location. It may take a while. Press 'OK' and wait."
      );
    } else {
      getWeatherOnCoords(
        openWeatherKey.apiWeatherUrl,
        openWeatherKey.apiLocationUrl,
        openWeatherKey.apiKey,
        coords
      ).then((weatherData) => {
        setWeatherData({
          weather: { ...weatherData.weather },
          location: { ...weatherData.location },
        });

        if (firstWeatherState === undefined) {
          setFirstWeatherState({
            weather: { ...weatherData.weather },
            location: { ...weatherData.location },
          });
        }
      });
    }
  }, [coords]);

  useEffect(() => {
    if (searchVal !== undefined) {
      getWeatherOnCoords(
        openWeatherKey.apiWeatherUrl,
        openWeatherKey.apiLocationUrl,
        openWeatherKey.apiKey,
        searchVal
      ).then((weatherData) => {
        setWeatherData({
          weather: { ...weatherData.weather },
          location: { ...weatherData.location },
        });
      });
    }
  }, [searchVal]);

  return (
    <WeatherContext.Provider value={{ weatherData, setSearchVal }}>
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
