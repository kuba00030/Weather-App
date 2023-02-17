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
        <span className="Hour">{time}</span>
        <div
          className="HImg"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`,
          }}
        ></div>
        <span className="HTemp">{temp}°C</span>
      </div>
    </div>
  );
};

export { HourlyWeatherDetails };
