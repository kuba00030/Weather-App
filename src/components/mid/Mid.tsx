import "./mid.css";
import { HourlyWeather } from "../widget-container/ContainerWidgetWeatherHourly";
interface IOnSearchHourlyWeather {
  onSearchWeather: any;
}
const Mid: React.FC<IOnSearchHourlyWeather> = ({ onSearchWeather }: any) => {
  return (
    <div className="Mid">
      <HourlyWeather onSearchWeather={onSearchWeather} />
      <div className="slider">
        <div className="slide-left">{`<`}</div>
        <div className="slide-right">{`>`}</div>
      </div>
    </div>
  );
};

export { Mid };
