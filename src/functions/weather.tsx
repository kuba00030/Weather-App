class GetCurrentWeather {
  location: string;
  api_url: string = `https://api.openweathermap.org/data/2.5/weather?q=`;
  api_key: string = `&appid=f57f384bac799e8a6807404b76deb377`;
  weather: undefined;
  constructor(value: string) {
    this.location = value;
  }

  fetchWeathe(): void {
    fetch(`${this.api_url}${this.location}${this.api_key}`)
      .then((res) => res.json())
      .then((weatherData) => {
        return weatherData;
      });
  }

  async returnWeather(weather: undefined) {
    return (this.weather = weather);
  }
}

export { GetCurrentWeather };
