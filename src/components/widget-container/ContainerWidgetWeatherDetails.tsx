import { WeatherDetails } from "../widgets/WidgetWeatherDetails";
import { ITopWeatherDetailstProps } from "../../interfaces/interfaces";
import { PropsItem } from "../../interfaces/interfaces";
const TopWeatherDetails: React.FC<ITopWeatherDetailstProps> = ({
  detailsToBeRendered,
}) => {
  const props: PropsItem[] = [...detailsToBeRendered];
  let widgets: any[] = [];

  props.forEach((item: PropsItem, index: number) => {
    widgets.push(
      <WeatherDetails
        key={index}
        parameter={item.parameter}
        parameterValue={item.parameterValue}
        parameterUnit={item.parameterUnit}
      />
    );
  });
  return <div className="Top-weather-right-details">{widgets}</div>;
};
export { TopWeatherDetails };
