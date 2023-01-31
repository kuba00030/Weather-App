class GetCoords {
  getCurrentLocation(): any {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat: number = position.coords.latitude;
      let long: number = position.coords.longitude;
      console.log(lat, long);
      return { lat, long };
    });
  }
}

export { GetCoords };
