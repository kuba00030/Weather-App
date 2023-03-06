class UpdateWeather {
  async updateOnSearchWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    dailyWeatherLink: string,
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
      // let onSearchDailyWeather = await sub.getDailyOnSearchWeather(
      //   dailyWeatherLink
      // );
      let today = new Date();

      setStateMethod({
        date: `${today.toDateString().substring(0, 3)} ${today
          .toDateString()
          .substring(8, 3)} ${today.getHours()}:${today.getMinutes()} `,
        location: onSearchCurrentWeather.location,
        currentWeather: onSearchCurrentWeather.currentWeather,
        hourlyWeather: onSearchHourlyWeather,
      });
    }
  }
  async updateOnLoadWeather(
    sub: any,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    dailyWeatherLink: string,
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
      let today = new Date();

      setStateMethod({
        date: `${today.toDateString().substring(0, 3)} ${today
          .toDateString()
          .substring(8, 3)} ${today.getHours()}:${today.getMinutes()} `,
        location: onLoadCurrentWeather.location,
        currentWeather: onLoadCurrentWeather.currentWeather,
        hourlyWeather: onLoadHourlyWeather,
      });
    }
  }
}

export { UpdateWeather };
