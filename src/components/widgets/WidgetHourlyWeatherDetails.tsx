import { useEffect } from "react";

interface IHourlyWeatherDetails {
  hour: string;
  icon: any;
  temp: number;
  id: number;
  state: any;
}
const HourlyWeatherDetails: React.FC<IHourlyWeatherDetails> = ({
  hour,
  icon,
  temp,
  id,
  state,
}: any) => {
  // for each widget => when it gets weather details, rotate it and then update weather
  let timeDisplayed = [...hour].splice(10).splice(0, 6);

  const handleWidgetUpdate = (idOfElement: number): void => {
    const timeOut = (idOfElement + 1) * 50;
    const el = document.getElementById(`${idOfElement}`);
    setTimeout(() => {
      el?.classList.add("hourly-weather-widget-animaiton");
    }, timeOut);
    setTimeout(() => {
      el?.classList.remove("hourly-weather-widget-animaiton");
    }, timeOut + 500);
  };

  useEffect(() => {
    handleWidgetUpdate(id);
  }, [state]);
  return (
    <div className="Hourly-weather-details" id={id}>
      <div className="HDetails">
        <div className="Hour">{timeDisplayed}</div>
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
