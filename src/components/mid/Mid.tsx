import "./mid.css";
import { HourlyWeather } from "../widget-container/ContainerWidgetWeatherHourly";

interface IOnSearchHourlyWeather {
  onSearchWeather: any;
}
const Mid: React.FC<IOnSearchHourlyWeather> = ({ onSearchWeather }: any) => {
  const handleSwipeLeft = function (): void {
    const mid = document.getElementById("HourlyWeather");
    console.log(mid?.offsetWidth);
  };
  const handleSwipeRight = function (): void {
    console.log("b");
  };
  return (
    <div className="Mid">
      <HourlyWeather onSearchWeather={onSearchWeather} />
      <div className="slider">
        <div className="slide-left" onClick={handleSwipeLeft}>{`<`}</div>
        <div className="slide-right" onClick={handleSwipeRight}>{`>`}</div>
      </div>
    </div>
  );
};

export { Mid };
