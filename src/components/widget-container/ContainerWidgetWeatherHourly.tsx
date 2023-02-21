import { HourlyWeatherDetails } from "../widgets/WidgetHourlyWeatherDetails";

interface IHourlyWeather {
  onSearchWeather: any;
}
const HourlyWeather: React.FC<IHourlyWeather> = ({ onSearchWeather }: any) => {
  // for each widget => when it gets weather details, rotate it and then update weather

  let widgets: any = [];
  onSearchWeather.hourlyWeather.forEach((weather: any, index: number) => {
    widgets.push(
      <HourlyWeatherDetails
        key={index}
        hour={weather.dt_txt}
        icon={weather.weather[0].icon}
        temp={Math.round(weather.main.temp - 272.15)}
        id={index}
        state={onSearchWeather}
      />
    );
  });

  return <div className="Hourly-weather">{widgets}</div>;
};

export { HourlyWeather };
