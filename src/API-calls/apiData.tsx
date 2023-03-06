class DataForApi {
  api_key: string = `&appid=f57f384bac799e8a6807404b76deb377`;
  api_url: string = `https://api.openweathermap.org/data/2.5/`;
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
    return `${this.api_url}forecast/daily?q=${this.cityForSearch}&cnt10${this.api_key}`;
  }

  returnOnLoadCurrentWeatherLink() {
    return `${this.api_url}weather?lat=${this.currentLocation.latitude}&lon=${this.currentLocation.longitude}${this.api_key}`;
  }

  returnOnLoadHourlyWeatherlink() {
    return `${this.api_url}forecast?lat=${this.currentLocation.latitude}&lon=${this.currentLocation.longitude}${this.api_key}`;
  }

  returnOnLoadDailyWeatherLink() {
    return `${this.api_url}forecast/daily?lat=${this.currentLocation.latitude}&lon=${this.currentLocation.longitude}&cnt10${this.api_key}`;
  }
}

export { DataForApi };

//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
