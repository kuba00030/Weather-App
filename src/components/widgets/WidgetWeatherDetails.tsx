import React from "react";
interface ParameterProps {
  parameter: string;
  parameterValue: string | number;
  parameterUnit: string;
}

const WeatherDetails: React.FC<ParameterProps> = ({
  parameter,
  parameterValue,
  parameterUnit,
}) => {
  return (
    <div className="details">
      {parameter}:
      <span>
        {parameterValue}
        {parameterUnit}
      </span>
    </div>
  );
};

export { WeatherDetails };
