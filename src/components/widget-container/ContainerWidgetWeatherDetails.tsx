import { WeatherDetails } from "../widgets/WidgetWeatherDetails";
export { TopWeatherDetails };

interface TopWeatherDetailstProps {
  detailsToBeRendered: {
    parameter: string;
    parameterValue: number | string;
    parameterUnit: string;
  }[];
}

interface PropsItem {
  parameter: string;
  parameterValue: string | number;
  parameterUnit: string;
}

const TopWeatherDetails: React.FC<TopWeatherDetailstProps> = ({
  detailsToBeRendered,
}) => {
  const props: PropsItem[] = [...detailsToBeRendered];

  let widgets: any = [];

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
