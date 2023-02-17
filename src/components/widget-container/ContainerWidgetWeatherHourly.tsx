import { HourlyWeatherDetails } from "../widgets/WidgetHourlyWeatherDetails";
interface IHourlyWeather {
  onSearchWeather: any;
}
const HourlyWeather: React.FC<IHourlyWeather> = ({ onSearchWeather }: any) => {
  let widgets: any = [];
  console.log(onSearchWeather.hourlyWeather);
  onSearchWeather.hourlyWeather.forEach((weather: any, index: number) => {
    widgets.push(
      <HourlyWeatherDetails
        key={index}
        hour={weather.dt_txt}
        icon={weather.weather[0].icon}
        temp={Math.round(weather.main.temp - 272.15)}
      />
    );
  });
  return <div className="Hourly-weather">{widgets}</div>;
};

export { HourlyWeather };
