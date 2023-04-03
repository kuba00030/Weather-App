class UpdateWeather {
  async updateOnSearchWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    dailyWeatherLink: string,
    options: any,
    setStateMethod: any,
    cityForSearch: string
  ) {
    if (cityForSearch === "") {
      return;
    } else {
      let onSearchCurrentWeather = await sub.getCurrentWeatherOnSearch(
        currentWeatherLink
      );
      let onSearchHourlyWeather = await sub.getHourlyWeatherOnSearch(
        hourlyWeatherLink
      );
      let onSearchDailyWeather = await sub.getDailyOnSearchWeather(
        dailyWeatherLink,
        options
      );
      let today = new Date();

      setStateMethod({
        date: `${today.toDateString().substring(0, 3)} ${today
          .toDateString()
          .substring(8, 3)} ${today.getHours()}:${today.getMinutes()} `,
        location: onSearchCurrentWeather.location,
        currentWeather: onSearchCurrentWeather.currentWeather,
        hourlyWeather: onSearchHourlyWeather,
        dailyWeather: onSearchDailyWeather,
      });
    }
  }
  async updateOnLoadWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    dailyWeatherLink: string,
    options: any,
    setStateMethod: any,
    coords: any
  ) {
    if (coords.latitude === "" && coords.longitude === "") {
      return;
    } else {
      let onLoadCurrentWeather = await sub.getCurrentWeatherOnLoad(
        currentWeatherLink
      );
      let onLoadHourlyWeather = await sub.getHourlyWeatherOnLoad(
        hourlyWeatherLink
      );
      let onSearchDailyWeather = await sub.getDailyOnLoadWeather(
        dailyWeatherLink,
        options
      );
      let today = new Date();

      setStateMethod({
        date: `${today.toDateString().substring(0, 3)} ${today
          .toDateString()
          .substring(8, 3)} ${today.getHours()}:${today.getMinutes()} `,
        location: onLoadCurrentWeather.location,
        currentWeather: onLoadCurrentWeather.currentWeather,
        hourlyWeather: onLoadHourlyWeather,
        dailyWeather: onSearchDailyWeather,
      });
    }
  }
}

export { UpdateWeather };
