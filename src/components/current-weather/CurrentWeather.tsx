import "./current-weather-style.css";
import { useWeatherConext } from "../../context/useWeatherContext";
import { WeatherDetails } from "../weather-details/WeatherDetails";
import { WeatherIcon } from "../weather-details/WeatherIcon";

export const CurrentWeather = () => {
  const { weatherData } = useWeatherConext();

  return weatherData !== undefined ? (
    <div className="cw-widgets-container d-flex w-100 gap-4 ">
      <div className="d-flex flex-row flex-grow-1 p-2">
        <div className="d-flex flex-column justify-content-between">
          <WeatherDetails
            parameterVal={weatherData.location.city}
            parameterValClass="fs-l fw-bold"
          />
          <WeatherDetails
            parameterVal={weatherData.location.country}
            parameterValClass="fs-xxl fw-bold"
          />
          <WeatherDetails
            parameterVal={weatherData.location.date}
            parameterValClass="fc-gray fs-l fw-bold"
          />
        </div>
        <div className="d-flex flex-row flex-grow-1 gap-4">
          <WeatherIcon
            iconLink={weatherData.weather.currentWeather.icon}
            iconClass="cw-icon ms-auto me-auto"
          />
          <div className="d-flex flex-column justify-content-between text-end">
            <WeatherDetails
              parameterVal={`${weatherData.weather.currentWeather.temp}°`}
              parameterValClass="fs-xxl fw-bold"
              parameterUnit="C"
              parameterUnitClass="fs-xl fw-bold"
            />
            <WeatherDetails
              containetClass="d-flex gap-2 align-items-center"
              parameter="Feels like:"
              parameterClass="fs-l fw-bold"
              parameterVal={`${weatherData.weather.currentWeather.feelsLike}°C`}
              parameterValClass="fs-l fw-bold"
            />
            <WeatherDetails
              parameterVal={weatherData.weather.currentWeather.description}
              parameterValClass="fs-l fc-gray fw-bold"
            />
          </div>
        </div>
      </div>
      <div className="cw-widget-container d-flex flex-grow-1">
        <div className="cw-widget my-bg-light gap-2 w-100 rounded-3 p-2">
          <WeatherDetails
            containetClass="d-flex justify-content-between align-items-center fw-bold"
            parameter="Clouds:"
            parameterClass="fc-gray fs-m"
            parameterVal={`${weatherData.weather.currentWeather.clouds}%`}
          />
          <WeatherDetails
            containetClass="d-flex justify-content-between align-items-center fw-bold"
            parameter="Humidity:"
            parameterClass="fc-gray fs-m"
            parameterVal={`${weatherData.weather.currentWeather.humidity}%`}
          />
          <WeatherDetails
            containetClass="d-flex justify-content-between align-items-center fw-bold"
            parameter="Wind speed:"
            parameterClass="fc-gray fs-m"
            parameterVal={`${weatherData.weather.currentWeather.wind}km/h`}
          />
          <WeatherDetails
            containetClass="d-flex justify-content-between align-items-center fw-bold"
            parameter="Pressure:"
            parameterClass="fc-gray fs-m"
            parameterVal={`${weatherData.weather.currentWeather.pressure}hPa`}
          />
          <WeatherDetails
            containetClass="d-flex justify-content-between align-items-center fw-bold"
            parameter="Visibility:"
            parameterClass="fc-gray fs-m"
            parameterVal={`${weatherData.weather.currentWeather.visibility}km`}
            parameterValClass="fs-m"
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
