import { useEffect, useState } from "react";
import { HourlyWeather } from "../../API/apiCalls";
import { useWeatherConext } from "../../context/useWeatherContext";

type HourlyWeatherDetails = {
  hour: Date;
  icon: string;
  temp: number;
  index: number;
};
export const HourlyWeatherDetails = (props: HourlyWeatherDetails) => {
  // function that return animation into class for widget hourly-weather-widget-animaiton
  // based on its index calculate function timeout, also set animation duration
  // and set value that comes from parent element  (half of animation duration?)
  // if prev value of weather === undefined? dont trigger animation, else trigger
  const { weatherData } = useWeatherConext();
  const [details, setDetails] = useState<HourlyWeather>();
  const updateDetails = () => {};
  return (
    <div className="Hourly-weather-details">
      <div className="HDetails">
        <div className="Hour">{props.hour.toISOString()}</div>
        <div
          className="HImg"
          style={{
            backgroundImage: `url(http://openweathermap.org/img/w/${props.icon}.png)`,
          }}
        ></div>
        <div className="HTemp">{props.temp}°C</div>
      </div>
    </div>
  );
};
