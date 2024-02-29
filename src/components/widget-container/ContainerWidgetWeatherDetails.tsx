import {
  TopWeatherWidget,
  WeatherDetails,
} from "../widgets/WidgetWeatherDetails";

export type TopWeatherDetails = {
  details: TopWeatherWidget[];
};
export const TopWeatherDetails = (props: TopWeatherDetails) => {
  return (
    <div className="Top-weather-right-details">
      {props.details.map((widget, index) => {
        return (
          <WeatherDetails
            key={index}
            parameter={widget.parameter}
            parameterValue={widget.parameterValue}
            parameterUnit={widget.parameterUnit}
          />
        );
      })}
    </div>
  );
};
