class UpdateWeather {
  updateOnSearchWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string
  ) {
    sub.getCurrentWeatherOnSearch(currentWeatherLink);
    sub.getHourlyWeatherOnSearch(hourlyWeatherLink);
  }
}

export { UpdateWeather };
