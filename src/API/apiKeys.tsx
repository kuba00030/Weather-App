export const openWeatherKey = {
  apiKey: "&appid=f57f384bac799e8a6807404b76deb377",
  apiUrl: "https://api.openweathermap.org/data/2.5/",
};

export const rapidApiKey = {
  bestWeatherApi: {
    options: {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "646d401d8bmsh821535688470ea9p14a67djsn18022b67f02b",
        "X-RapidAPI-Host": "bestweather.p.rapidapi.com",
      },
    },
  },
  weatherByMeteosource: {
    options: {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "646d401d8bmsh821535688470ea9p14a67djsn18022b67f02b",
        "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
      },
    },
  },
};
