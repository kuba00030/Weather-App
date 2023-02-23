import { IGetWeather } from "../interfaces/interfaces";

class GetWeather {
  async getCurrentWeatherOnSearch(currentWLink: string) {
    return await fetch(currentWLink)
      .then((res) => res.json())
      .then((weatherData) => {
        let currentWeather = {
          clouds: weatherData.clouds.all,
          temperature: Math.round(weatherData.main.temp - 272.15),
          feelsLike: Math.round(weatherData.main.feels_like - 272.15),
          pressure: weatherData.main.pressure,
          humidity: weatherData.main.humidity,
          visibility: weatherData.visibility / 1000,
          wind: Math.round(weatherData.wind.speed / 0.6213711922),
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
        };
        let location = {
          city: weatherData.name,
          country: weatherData.sys.country,
        };
        return { currentWeather, location };
      });
  }

  async getHourlyWeatherOnSearch(hourlyWlink: string) {
    return await fetch(hourlyWlink)
      .then((res) => res.json())
      .then((weatherData) => {
        // let hourlyWeatherObject = weatherData.list.splice(0, 10);
        let hourlyWeather = weatherData.list
          .splice(0, 10)
          .map((weather: any) => {
            return {
              hour: weather.dt_txt,
              temp: Math.round(weather.main.temp - 272.15),
              icon: weather.weather[0].icon,
            };
          });

        return hourlyWeather;
      });
  }

  async getCurrentWeatherOnLoad(currentWlink: string) {
    return await fetch(currentWlink)
      .then((res) => res.json())
      .then((weatherData) => {
        return weatherData;
      });
  }

  async getHourlyWeatherOnLoad(hourlyWlink: string) {
    return await fetch(hourlyWlink)
      .then((res) => res.json())
      .then((weatherData) => {
        return weatherData;
      });
  }
}

export { GetWeather };
