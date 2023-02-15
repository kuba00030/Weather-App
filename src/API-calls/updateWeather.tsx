class UpdateWeather {
  async updateOnSearchWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    setStateMethod: any
  ) {
    let currentWeather = await sub.getCurrentWeatherOnSearch(
      currentWeatherLink
    );
    let hourlyWeather = await sub.getHourlyWeatherOnSearch(hourlyWeatherLink);

    setStateMethod({ currentWeather, hourlyWeather });
  }
}

export { UpdateWeather };
