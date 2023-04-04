import { SearchWeatherButton } from "../buttons/SearchWeatherButton";
import "./top.css";
import { TopWeatherDetails } from "../widget-container/ContainerWidgetWeatherDetails";
import { SearchForTheCity } from "../inputs/SearchForTheCity";
import React from "react";
import { ITopProps } from "../../interfaces/interfaces";
const Top: React.FC<ITopProps> = ({
  handleSetStateOnChange,
  setOnSearchWeather,
  onSearchWeather,
}: any) => {
  return (
    <div className="Top">
      <div className="Top-left">
        <div className="Top-left-location">
          <span className="Top-left-city">{onSearchWeather.location.city}</span>
          <span className="Top-left-country">
            {onSearchWeather.location.country}
          </span>
          <span className="Top-left-date">{onSearchWeather.date}</span>
        </div>
        <div className="Top-left-weather">
          <div className="icon-container">
            <div
              className="icon"
              style={{
                backgroundSize: `cover`,
                backgroundImage: `url(http://openweathermap.org/img/w/${onSearchWeather.currentWeather.icon}.png)`,
              }}
            ></div>
          </div>
          <div className="Top-left-weather-details">
            <div className="Temp-holder">
              <span className="Temp">
                {onSearchWeather.currentWeather.temperature}°
              </span>
              <span className="ceclius">C</span>
            </div>
            <div className="Feels-like">
              Feels like:
              <span className="Feels-like-temp">
                {onSearchWeather.currentWeather.feelsLike}°C
              </span>
            </div>
            <span className="Sky-condition">
              {onSearchWeather.currentWeather.description}
            </span>
          </div>
        </div>
      </div>
      <div className="Top-right">
        <div className="Search-bar-container">
          <SearchForTheCity
            widthVal="none"
            widthUnit=""
            flex={1}
            handleSetStateOnChange={handleSetStateOnChange}
            setOnSearchWeather={setOnSearchWeather}
          />
          <SearchWeatherButton
            handleSetStateOnChange={handleSetStateOnChange}
            setOnSearchWeather={setOnSearchWeather}
          />
        </div>
        <div className="Top-right-weather-details">
          <TopWeatherDetails
            detailsToBeRendered={[
              {
                parameter: "Clouds",
                parameterValue: onSearchWeather.currentWeather.clouds,
                parameterUnit: "%",
              },
              {
                parameter: "Humidity",
                parameterValue: onSearchWeather.currentWeather.humidity,
                parameterUnit: "%",
              },
              {
                parameter: "Wind speed",
                parameterValue: onSearchWeather.currentWeather.wind,
                parameterUnit: "km/h",
              },
            ]}
          />
          <TopWeatherDetails
            detailsToBeRendered={[
              {
                parameter: "Pressure",
                parameterValue: onSearchWeather.currentWeather.pressure,
                parameterUnit: "hPa",
              },
              {
                parameter: "visibility",
                parameterValue: onSearchWeather.currentWeather.visibility,
                parameterUnit: "km",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
