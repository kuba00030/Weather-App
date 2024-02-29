export type TopWeatherWidget = {
  parameter: string;
  parameterValue: string | number | undefined;
  parameterUnit: string;
};

export const WeatherDetails = (props: TopWeatherWidget) => {
  return props.parameterValue !== undefined ? (
    <div className="details">
      {props.parameter}:
      <span>
        {props.parameterValue}
        {props.parameterUnit}
      </span>
    </div>
  ) : (
    <></>
  );
};
