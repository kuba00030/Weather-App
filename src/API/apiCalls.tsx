type Conditions = {
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

type Location = {
  city: string;
  country: string;
};

export type CurrentWeather = {
  conditions: Conditions;
  location: Location;
};

export type HourlyWeather = {
  hour: string;
  temp: number;
  icon: string;
};
export const getCurrentWeather = async (link: string) => {
  return await fetch(link)
    .then((res) => res.json())
    .then((weatherData): CurrentWeather => {
      const conditions: Conditions = {
        clouds: weatherData.clouds.all,
        temp: Math.round(weatherData.main.temp - 272.15),
        feelsLike: Math.round(weatherData.main.feels_like - 272.15),
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
        visibility: weatherData.visibility / 1000,
        wind: Math.round(weatherData.wind.speed / 0.6213711922),
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
      };

      const location: Location = {
        city: weatherData.name,
        country: weatherData.sys.country,
      };

      return { conditions, location };
    });
};

export const getHourlyWeather = async (link: string) => {
  return await fetch(link)
    .then((res) => res.json())
    .then((weatherData): HourlyWeather => {
      return weatherData.list.splice(0, 10).map((weather: any) => {
        return {
          hour: weather.dt_txt,
          temp: Math.round(weather.main.temp - 272.15),
          icon: weather.weather[0].icon,
        };
      });
    });
};

export const getDailyWeather = async (link: string) => {
  return await fetch(link)
    .then((res) => res.json())
    .then((weatherData) => {
      return weatherData.list.splice(0, 10).map((weather: any) => {
        return {
          hour: weather.dt_txt,
          temp: Math.round(weather.main.temp - 272.15),
          icon: weather.weather[0].icon,
        };
      });
    });
};
