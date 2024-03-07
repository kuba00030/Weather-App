import { useWeatherConext } from "../../context/useWeatherContext";
import { Accordion } from "./Accordion";

export const DailyWeather = () => {
  const { weatherData } = useWeatherConext();

  return weatherData !== undefined ? (
    <Accordion dailyWeather={weatherData.weather.dailyWeather} />
  ) : (
    <></>
  );
};
