import "./top.css";
import { useWeatherConext } from "../../context/useWeatherContext";
import { SearchBar } from "./search-bar/SearchBar";
import { CWDetails } from "./CWDetails";
import { CWIcon } from "./CWIcon";

export const CurrentWeather = () => {
  const { weatherData } = useWeatherConext();

  const getCurrentDate = (): string => {
    const date = new Date();
    const dayNumeric = date.toLocaleString("en", { day: "2-digit" });
    const day = date.toLocaleString("en", { weekday: "short" });
    const month = date.toLocaleString("en", { month: "long" });
    const currentDate = `${dayNumeric} ${month}, ${day}`;

    return currentDate;
  };

  getCurrentDate();
  return weatherData !== undefined ? (
    <div className="d-flex flex-column gap-4 mt-4">
      <SearchBar />
      <div className="cw-widgets-container d-flex  gap-4 ">
        <div className="d-flex flex-row flex-grow-1 p-2">
          <div className="d-flex flex-column justify-content-between">
            <CWDetails
              parameterVal={weatherData.location.city}
              parameterValClass="fs-l fw-bold"
            />
            <CWDetails
              parameterVal={weatherData.location.country}
              parameterValClass="fs-xxl fw-bold"
            />
            <CWDetails
              parameterVal={getCurrentDate()}
              parameterValClass="fc-gray fs-l fw-bold"
            />
          </div>
          <div className="d-flex flex-row flex-grow-1 gap-4">
            <CWIcon
              iconLink={weatherData.weather.currentWeather.icon}
              iconClass="cw-icon ms-auto me-auto"
            />
            <div className="d-flex flex-column justify-content-between text-end">
              <CWDetails
                parameterVal={`${weatherData.weather.currentWeather.temp}°`}
                parameterValClass="fs-xxl fw-bold"
                parameterUnit="C"
                parameterUnitClass="fs-xl fw-bold"
              />
              <CWDetails
                containetClass="d-flex gap-2 align-items-center"
                parameter="Feels like:"
                parameterClass="fs-l fw-bold"
                parameterVal={`${weatherData.weather.currentWeather.feelsLike}°C`}
                parameterValClass="fs-l fw-bold"
              />
              <CWDetails
                parameterVal={weatherData.weather.currentWeather.description}
                parameterValClass="fs-l fc-gray fw-bold"
              />
            </div>
          </div>
        </div>
        <div className="cw-widget-container d-flex flex-grow-1">
          <div className="cw-widget gap-2 w-100 rounded p-2">
            <CWDetails
              containetClass="d-flex justify-content-between align-items-center fw-bold"
              parameter="Clouds:"
              parameterClass="fc-gray fs-m"
              parameterVal={`${weatherData.weather.currentWeather.clouds}%`}
            />
            <CWDetails
              containetClass="d-flex justify-content-between align-items-center fw-bold"
              parameter="Humidity:"
              parameterClass="fc-gray fs-m"
              parameterVal={`${weatherData.weather.currentWeather.humidity}%`}
            />
            <CWDetails
              containetClass="d-flex justify-content-between align-items-center fw-bold"
              parameter="Wind speed:"
              parameterClass="fc-gray fs-m"
              parameterVal={`${weatherData.weather.currentWeather.wind}km/h`}
            />
            <CWDetails
              containetClass="d-flex justify-content-between align-items-center fw-bold"
              parameter="Pressure:"
              parameterClass="fc-gray fs-m"
              parameterVal={`${weatherData.weather.currentWeather.pressure}hPa`}
            />
            <CWDetails
              containetClass="d-flex justify-content-between align-items-center fw-bold"
              parameter="Visibility:"
              parameterClass="fc-gray fs-m"
              parameterVal={`${weatherData.weather.currentWeather.visibility}km`}
              parameterValClass="fs-m"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
