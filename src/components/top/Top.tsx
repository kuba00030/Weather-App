import { SearchWeatherButton } from "./SearchWeatherButton";
import "./top.css";
import { TopWeatherDetails } from "./TopWeatherDetails";
import { WeatherDetails } from "./WeatherDetails";

const Top = () => {
  return (
    <div className="Top">
      <div className="Top-left">
        <div className="Top-left-location">
          <span className="Top-left-city">Kraków</span>
          <span className="Top-left-country">Polska</span>
          <span className="Top-left-date">Środa, 12 Maja 15:15</span>
        </div>
        <div className="Top-left-weather">
          <div className="icon"></div>
          <div className="Top-left-weather-details">
            <div className="Temp-holder">
              <span className="Temp">21°</span>
              <span className="ceclius">C</span>
            </div>
            <div className="Feels-like">
              Feels like: <span className="Feels-like-temp">25</span>
              <span>°</span>
            </div>
            <span className="Sky-condition">Clear sky</span>
          </div>
        </div>
      </div>
      <div className="Top-right">
        <div className="Search-bar-container">
          <input
            id="given-location"
            type="text"
            placeholder="Enter location"
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                console.log("Here is a place for a function");
              }
            }}
          />
          <SearchWeatherButton />
        </div>
        <div className="Top-right-weather-details">
          <TopWeatherDetails
            detailsToBeRendered={[
              { parameter: "Rain", parameterValue: 12, parameterUnit: "%" },
              { parameter: "Humidity", parameterValue: 75, parameterUnit: "%" },
              {
                parameter: "Wind speed",
                parameterValue: 75,
                parameterUnit: "%",
              },
            ]}
          />
          <TopWeatherDetails
            detailsToBeRendered={[
              {
                parameter: "Pressure",
                parameterValue: 1020,
                parameterUnit: "hPa",
              },
              {
                parameter: "visibility",
                parameterValue: 12,
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
