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
  hour: Date;
  temp: number;
  icon: string;
};

export type DailyWeather = {
  date: Date;
  description: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
};

export type locationData = {
  city: string;
  country: string;
  date: Date;
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
        .splice(0, 10)
        .map((weather: any): HourlyWeather => {
          return {
            hour: new Date(weather.dt),
            temp: weather.temp,
            icon: weather.weather[0].icon,
          };
        });

      const dailyWeather: DailyWeather[] = weatherData.daily.map(
        (weather: any): DailyWeather => {
          return {
            date: new Date(weather.dt),
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
      const location: locationData = {
        city: data.name,
        country: data.sys.country,
        date: new Date(data.dt),
      };
      return { location };
    });
};
