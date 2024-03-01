import { getLocation, getWeather } from "../API/apiCalls";
import { Coords } from "./useGetCoords";

export default function useGetWeatherOnCoords() {
  const getWeatherOnCoords = async (
    apiWeatherUrl: string,
    apiLocationUrl: string,
    apiKey: string,
    coords: Coords
  ) => {
    const weatherLink = `${apiWeatherUrl}lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`;
    const locationLink = `${apiLocationUrl}lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`;

    const weather = await getWeather(weatherLink);
    const { location } = await getLocation(locationLink);

    return { weather, location };
  };

  return { getWeatherOnCoords };
}
