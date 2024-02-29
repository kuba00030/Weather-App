import {
  getCurrentWeather,
  getDailyWeather,
  getHourlyWeather,
} from "../API/apiCalls";
import { Coords } from "./useGetCoords";

export default function useGetWeatherOnCoords() {
  const getWeatherOnCoords = async (
    apiUrl: string,
    apiKey: string,
    coords: Coords | undefined
  ) => {
    const currentWeatherLink = `${apiUrl}weather?lat=${coords?.lat}&lon=${coords?.lon}${apiKey}`;
    const hourlyWeatherLink = `${apiUrl}forecast?lat=${coords?.lat}&lon=${coords?.lon}${apiKey}`;
    // const dailyWeatherLink = `https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=${coords?.lat}&lon=${coords?.lon}&language=en&units=metric`;

    const currentWeather = await getCurrentWeather(currentWeatherLink);
    const hourlyWeather = await getHourlyWeather(hourlyWeatherLink);
    // const dailyWeather = await getDailyWeather(dailyWeatherLink);

    return { currentWeather, hourlyWeather };
  };

  return { getWeatherOnCoords };
}
