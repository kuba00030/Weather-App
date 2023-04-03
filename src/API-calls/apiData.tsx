class DataForApi {
  api_key: string = `&appid=f57f384bac799e8a6807404b76deb377`;
  api_url: string = `https://api.openweathermap.org/data/2.5/`;
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "646d401d8bmsh821535688470ea9p14a67djsn18022b67f02b",
      "X-RapidAPI-Host": "bestweather.p.rapidapi.com",
    },
  };
  optionss = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "646d401d8bmsh821535688470ea9p14a67djsn18022b67f02b",
      "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };
  currentLocation: any;
  cityForSearch: string = "";

  setCurrentLocation(coords: any) {
    this.currentLocation = coords;
  }

  setCityForSearch(city: any) {
    this.cityForSearch = city;
  }

  returnOnSerachCurrentWeatherLink() {
    return `${this.api_url}weather?q=${this.cityForSearch}${this.api_key}`;
  }

  returnOnSearchHourlyWeatherlink() {
    return `${this.api_url}forecast?q=${this.cityForSearch}${this.api_key}`;
  }

  returnOnSearchDailyWeatherLink() {
    return `https://bestweather.p.rapidapi.com/weather/${this.cityForSearch}?unitGroup=us`;
  }

  returnOnLoadCurrentWeatherLink() {
    return `${this.api_url}weather?lat=${this.currentLocation.latitude}&lon=${this.currentLocation.longitude}${this.api_key}`;
  }

  returnOnLoadHourlyWeatherlink() {
    return `${this.api_url}forecast?lat=${this.currentLocation.latitude}&lon=${this.currentLocation.longitude}${this.api_key}`;
  }

  returnOnLoadDailyWeatherLink() {
    return `https://ai-weather-by-meteosource.p.rapidapi.com/daily?lat=${this.currentLocation.latitude}&lon=${this.currentLocation.longitude}&language=en&units=metric`;
  }
}

export { DataForApi };
