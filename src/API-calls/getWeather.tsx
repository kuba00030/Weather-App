class GetWeather {
  async getWeatherOnSearch(apiUrl: string, city: string, apiKey: string) {
    return await fetch(`${apiUrl}${city}${apiKey}`)
      .then((res) => res.json())
      .then((weatherData) => {
        return weatherData;
      });
  }

  async getWeatherOnLoad(apiUrl: string, apiKey: string, coords: any) {
    return await fetch(
      `${apiUrl}${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((weatherData) => {
        return weatherData;
      });
  }
}

export { GetWeather };
