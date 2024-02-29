import {
  getCurrentWeather,
  getDailyWeather,
  getHourlyWeather,
} from "../API/apiCalls";

export default function useGetWeatherOnSearch() {
  const getWeatherOnSearch = async (
    apiUrl: string,
    apiKey: string,
    city: string
  ) => {
    const currentWeatherLink = `${apiUrl}weather?q=${city}${apiKey}`;
    const hourlyWeatherLink = `${apiUrl}forecast?q=${city}${apiKey}`;
    // const dailyWeatherLink = `https://bestweather.p.rapidapi.com/weather/${city}?unitGroup=us`;

    const currentWeather = await getCurrentWeather(currentWeatherLink);
    const hourlyWeather = await getHourlyWeather(hourlyWeatherLink);
    // const dailyWeather = getDailyWeather(dailyWeatherLink);

    return { currentWeather, hourlyWeather };
  };
  return { getWeatherOnSearch };
}
