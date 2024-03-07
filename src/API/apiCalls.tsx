import { dateFormat } from "../utils/format/dateFormat";

export type CurrentWeather = {
  clouds: number;
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  visibility: number;
  wind: number;
  description: string;
  icon: string;
};

export type HourlyWeather = {
  hour: string;
  temp: number;
  icon: string;
};

export type DailyWeather = {
  date: string;
  description: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
};

export type locationData = {
  city: string;
  country: string;
  date: string;
};

export const getWeather = async (link: string) => {
  return await fetch(link)
    .then((res) => res.json())
    .then((weatherData) => {
      const currentWeather: CurrentWeather = {
        clouds: weatherData.current.clouds,
        temp: weatherData.current.temp,
        feelsLike: Math.round(weatherData.current.feels_like),
        pressure: weatherData.current.pressure,
        humidity: weatherData.current.humidity,
        visibility: weatherData.current.visibility / 1000,
        wind: weatherData.current.wind_speed,
        description: weatherData.current.weather[0].description,
        icon: weatherData.current.weather[0].icon,
      };

      const hourlyWeather: HourlyWeather[] = weatherData.hourly
        .splice(0, 24)
        .map((weather: any): HourlyWeather => {
          const { hour } = dateFormat(weather.dt);
          return {
            hour: hour,
            temp: weather.temp,
            icon: weather.weather[0].icon,
          };
        });

      const dailyWeather: DailyWeather[] = weatherData.daily.map(
        (weather: any): DailyWeather => {
          const { day, dayNumeric, month } = dateFormat(weather.dt);
          return {
            date: `${dayNumeric} ${month}, ${day}`,
            description: weather.weather[0].description,
            temp: weather.temp.day,
            tempMin: weather.temp.min,
            tempMax: weather.temp.max,
            feelsLike: weather.feels_like.day,
          };
        }
      );

      return { currentWeather, hourlyWeather, dailyWeather };
    });
};

export const getLocation = async (link: string) => {
  return await fetch(link)
    .then((res) => res.json())
    .then((data) => {
      const { day, dayNumeric, month } = dateFormat(data.dt);
      const location: locationData = {
        city: data.name,
        country: data.sys.country,
        date: `${dayNumeric} ${month}, ${day}`,
      };
      return { location };
    });
};
