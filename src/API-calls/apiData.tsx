class DataForApi {
  api_key: string = `&appid=f57f384bac799e8a6807404b76deb377`;
  api_url_on_search: string = `https://api.openweathermap.org/data/2.5/forecast?q=`;
  locationCoords: any = {
    latitude: 0,
    longitude: 0,
  };
  cityForSerach: string = "";

  constructor(city: string) {
    this.cityForSerach = city;
  }

  setLocationCoords() {
    navigator.geolocation.getCurrentPosition((location) => {
      // this.locationCoords.latitude = location.coords.latitude;
      // this.locationCoords.longitude = location.coords.longitude;
      return location.coords.latitude, location.coords.longitude;
    });
  }

  returnOnSerachData() {
    console.log(this.cityForSerach, this.api_key, this.api_url_on_search);
    return this.cityForSerach, this.api_key, this.api_url_on_search;
  }
  async returnOnLoadData(cords: any) {
    // return this.locationCoords;
    const coords = await cords();
    console.log(await coords);
  }

  showLoc() {
    console.log(this.cityForSerach);
  }
}

export { DataForApi };
