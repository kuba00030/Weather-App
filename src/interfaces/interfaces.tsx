export interface IOnSearchWeather {
  location: ILocation;
  currentWeather: ICurrentWeather;
  hourlyWeather: IHourlyWeather[];
}

export interface ILocation {
  city: string;
  country: string;
}
export interface ICurrentWeather {
  clouds: number;
  description: string;
  feelsLike: number;
  humidity: number;
  icon: string;
  pressure: number;
  temperature: number;
  visibility: number;
  wind: number;
}

export interface IHourlyWeather {
  hour: string;
  temp: number;
  icon: string;
}

export interface IHandleUpdate {
  (
    updater: IUpdater,
    sub: IGetWeather,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    setOnSearchWeatherState: any
  ): void;
}

export interface ITopProps {
  handleSetStateOnChange: (e: any) => void;
  updateWeatherData: { dataForApi: {}; getWeather: {}; updateWeather: {} };
  handleUpdateWeather: IHandleUpdate;
  setOnSearchWeatherState: (weather: any) => void;
  cityState: string;
  onSearchWeather: IOnSearchWeather;
}

export interface IUpdater {
  updateOnSearchWeather(
    sub: IGetWeather,
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    setStateMethod: any
  ): any;
  updateOnLoadWeather(
    currentWeatherLink: string,
    hourlyWeatherLink: string,
    setStateMethod: any
  ): any;
}

export interface IGetWeather {
  getCurrentWeatherOnSearch(currentWLink: string): {
    currentWeather: ICurrentWeather;
    location: ILocation;
  };
  getHourlyWeatherOnSearch(hourlyWlink: string): IHourlyWeather[];
  getCurrentWeatherOnLoad(currentWlink: string): any;
  getHourlyWeatherOnLoad(hourlyWlink: string): any;
}

export interface ITopWeatherDetailstProps {
  detailsToBeRendered: {
    parameter: string;
    parameterValue: number | string;
    parameterUnit: string;
  }[];
}

export interface PropsItem {
  parameter: string;
  parameterValue: string | number;
  parameterUnit: string;
}

export interface IContainerWidgetHourlyWeather {
  onSearchWeather: IOnSearchWeather[];
}
