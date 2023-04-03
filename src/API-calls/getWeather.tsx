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
  async getDailyOnSearchWeather(dailyWLink: string, options: any) {
    return await fetch(dailyWLink, options)
      .then((res) => res.json())
      .then((weatherData) => {
        console.log(weatherData.days);
        const daily = weatherData.days.splice(0, 6).map((weather: any) => {
          return {
            date: weather.datetime,
            description: weather.conditions,
            temp: weather.temp,
            min_temp: weather.tempmin,
            max_temp: weather.tempmax,
            feels_like: weather.feelslike,
            icon: weather.icon,
          };
        });
        return daily;
      });
  }
  async getCurrentWeatherOnLoad(currentWlink: string) {
    return await fetch(currentWlink)
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

  async getHourlyWeatherOnLoad(hourlyWlink: string) {
    return await fetch(hourlyWlink)
      .then((res) => res.json())
      .then((weatherData) => {
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
  async getDailyOnLoadWeather(dailyWLink: string, options: any) {
    return await fetch(dailyWLink, options)
      .then((res) => res.json())
      .then((weatherData) => {
        const daily = weatherData.daily.data
          .splice(0, 6)
          .map((weather: any) => {
            const des = weather.weather.replace("_", " ");
            const description = des.charAt(0).toUpperCase() + des.slice(1);

            return {
              date: weather.day,
              description: description,
              temp: weather.temperature,
              min_temp: weather.temperature_min,
              max_temp: weather.temperature_max,
              feels_like: weather.feels_like,
              icon: weather.icon,
            };
          });
        console.log(daily);
        return daily;
      });
  }
}

export { GetWeather };
