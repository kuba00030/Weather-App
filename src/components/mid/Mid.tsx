import "./mid.css";
import { HourlyWeatherContainer } from "../widget-container/ContainerWidgetWeatherHourly";
import { useWeatherConext } from "../../context/useWeatherContext";

const Mid = () => {
  const { weatherData } = useWeatherConext();
  const handleSwipeLeft = function (): void {
    const mid = document.getElementById("HourlyWeather");
    console.log(mid?.offsetWidth);
  };
  const handleSwipeRight = function (): void {
    console.log("b");
  };
  return (
    <div className="Mid">
      <HourlyWeatherContainer
        hourlyWeatherData={weatherData?.weather.hourlyWeather}
      />
      <div className="slider">
        <div className="slide-left" onClick={handleSwipeLeft}>{`<`}</div>
        <div className="slide-right" onClick={handleSwipeRight}>{`>`}</div>
      </div>
    </div>
  );
};

export { Mid };
