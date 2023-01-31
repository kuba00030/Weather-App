class GetWeather {
  async getCurrentWeatherOnSearch(currentWLink: string) {
    return await fetch(currentWLink)
      .then((res) => res.json())
      .then((weatherData) => {
        let currentWeatherOnSearch = {
          clouds: weatherData.clouds.all,
          temperature: weatherData.main.temp,
          feelsLike: weatherData.main.feels_like,
          pressure: weatherData.main.pressure,
          huimdity: weatherData.main.humidity,
          visibility: weatherData.visibility,
          wind: weatherData.wind.speed,
          description: weatherData.weather.description,
          icon: weatherData.weather.icon,
        };
        console.log(currentWeatherOnSearch);
        return currentWeatherOnSearch;
      });
  }

  async getHourlyWeatherOnSearch(hourlyWlink: string) {
    return await fetch(hourlyWlink)
      .then((res) => res.json())
      .then((weatherData) => {
        console.log(weatherData);
        return weatherData;
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

  async setOnLoadWeather(currentWlink: string, hourWlink: string) {
    const currentWeatherOnLoad = await this.getCurrentWeatherOnLoad(
      currentWlink
    );

    const hourlyOnLoad = await this.getHourlyWeatherOnLoad(hourWlink);
    const hourlyWeatherOnLoad = hourlyOnLoad.list.splice(0, 9);

    return { currentWeatherOnLoad, hourlyWeatherOnLoad };
  }

  async setOnSearchWeather(currentWLink: string, hourlyWlink: string) {
    const currentWeatherOnLoad = await this.getCurrentWeatherOnSearch(
      currentWLink
    );
    const hourlyOnSearch = await this.getHourlyWeatherOnSearch(hourlyWlink);
    const hourlyWeatherOnSearch = hourlyOnSearch.list.splice(0, 8);

    return { currentWeatherOnLoad, hourlyWeatherOnSearch };
  }
}

export { GetWeather };
