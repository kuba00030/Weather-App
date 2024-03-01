import { SearchWeatherButton } from "../buttons/SearchWeatherButton";
import "./top.css";
import { TopWeatherDetails } from "../widget-container/ContainerWidgetWeatherDetails";
import { useWeatherConext } from "../../context/useWeatherContext";
import { useState } from "react";
import { SearchBar } from "../inputs/SearchBar";
import { Coords } from "../../hooks/useGetCoords";

const Top = () => {
  const { weather, setSearchVal } = useWeatherConext();
  const [searchCityCoords, setSearchCityCoords] = useState<Coords | undefined>(
    undefined
  );

  return weather !== undefined ? (
    <div className="Top">
      <div className="Top-left">
        <div className="Top-left-location">
          {/* <span className="Top-left-city">
            {weather.currentWeather.location.city}
          </span>
          <span className="Top-left-country">
            {weather.currentWeather.location.country}
          </span> */}
          <span className="Top-left-date">{12}</span>
        </div>
        <div className="Top-left-weather">
          <div className="icon-container">
            {/* <div
              className="icon"
              style={{
                backgroundSize: `cover`,
                backgroundImage: `url(http://openweathermap.org/img/w/${weather.currentWeather.conditions.icon}.png)`,
              }}
            ></div> */}
          </div>
          {/* <div className="Top-left-weather-details">
            <div className="Temp-holder">
              <span className="Temp">
                {weather.currentWeather.conditions.temp}°
              </span>
              <span className="ceclius">C</span>
            </div>
            <div className="Feels-like">
              Feels like:
              <span className="Feels-like-temp">
                {weather.currentWeather.conditions.feelsLike}°C
              </span>
            </div>
            <span className="Sky-condition">
              {weather.currentWeather.conditions.description}
            </span>
          </div> */}
        </div>
      </div>
      <div className="Top-right">
        <div className="Search-bar-container gap-4">
          <div className="flex-grow-1">
            <SearchBar
              placeholder="Search for the city"
              onChange={setSearchCityCoords}
            />
          </div>
          <SearchWeatherButton
            class="rounded border-0 p-3 text-secondary fw-semibold"
            buttonTxt="Search"
            onClick={() => {
              setSearchVal(searchCityCoords);
            }}
          />
        </div>
        <div className="Top-right-weather-details">
          {/* <TopWeatherDetails
            details={[
              {
                parameter: "Clouds",
                parameterValue: weather.currentWeather.conditions.clouds,
                parameterUnit: "%",
              },
              {
                parameter: "Humidity",
                parameterValue: weather.currentWeather.conditions.humidity,
                parameterUnit: "%",
              },
              {
                parameter: "Wind speed",
                parameterValue: weather.currentWeather.conditions.wind,
                parameterUnit: "km/h",
              },
            ]}
          />
          <TopWeatherDetails
            details={[
              {
                parameter: "Pressure",
                parameterValue: weather.currentWeather.conditions.pressure,
                parameterUnit: "hPa",
              },
              {
                parameter: "visibility",
                parameterValue: weather.currentWeather.conditions.visibility,
                parameterUnit: "km",
              },
            ]}
          /> */}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
  return <></>;
};

export default Top;
