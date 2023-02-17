class UpdateWeather {
  async updateOnSearchWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    setStateMethod: any
  ) {
    let onSearchWeather = await sub.getCurrentWeatherOnSearch(
      currentWeatherLink
    );
    let onSearchHourlyWeather = await sub.getHourlyWeatherOnSearch(
      hourlyWeatherLink
    );

    setStateMethod({
      location: onSearchWeather.location,
      currentWeather: onSearchWeather.currentWeather,
      hourlyWeather: onSearchHourlyWeather,
    });
  }
  async updateOnLoadWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    setStateMethod: any
  ) {
    let currentWeather = await sub.getCurrentWeatherOnLoad(currentWeatherLink);
    let hourlyWeather = await sub.getHourlyWeatherOnLoad(hourlyWeatherLink);

    setStateMethod({ currentWeather, hourlyWeather });
  }
}

export { UpdateWeather };
