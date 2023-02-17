class GetCoords {
  getCurrentLocation(setState: any) {
    let navi = navigator.geolocation;
    let location = navi.watchPosition((position) => {
      let latitude: number = position.coords.latitude;
      let longitude: number = position.coords.longitude;
      setState({ latitude, longitude });
    });
  }
}

export { GetCoords };
