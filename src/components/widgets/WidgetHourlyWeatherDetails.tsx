interface IHourlyWeatherDetails {
  hour: string;
  icon: any;
  temp: number;
}
const HourlyWeatherDetails: React.FC<IHourlyWeatherDetails> = ({
  hour,
  icon,
  temp,
}: any) => {
  let time = [...hour].splice(10).splice(0, 6);
  return (
    <div className="Hourly-weather-details">
      <div className="HDetails">
        <div className="Hour">{time}</div>
        <div
          className="HImg"
          style={{
            backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`,
          }}
        ></div>
        <div className="HTemp">{temp}°C</div>
      </div>
    </div>
  );
};

export { HourlyWeatherDetails };
