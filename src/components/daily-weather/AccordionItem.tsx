import { useState } from "react";
import { DailyWeather } from "../../API/apiCalls";
import { WeatherDetails } from "../weather-details/WeatherDetails";

type DayWeather = {
  dayWeather: DailyWeather;
};

const AccordionItem = (props: DayWeather) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="d-flex flex-column">
      <div className="my-bg-light d-flex flex-row justify-content-between align-items-center py-2 px-4">
        <WeatherDetails
          parameterValClass="fs-m fc-gray fw-bold"
          parameterVal={props.dayWeather.date}
        />
        <button
          className="search-button fs-s fc-gray fw-bold p-2 rounded-3 border-0"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen === false ? "Open" : "Close"}
        </button>
      </div>

      <div
        className={`my-bg-lighter dw-details-container justify-content-between align-items-center fs-s fw-bold px-4 overflow-hidden ${
          isOpen ? "dw-details-opened" : "dw-details-closed"
        }`}
      >
        <WeatherDetails
          containetClass="d-flex dw-details gap-2"
          parameter="Description:"
          parameterVal={props.dayWeather.description}
        />

        <WeatherDetails
          containetClass="d-flex dw-details gap-2"
          parameter="Temperature:"
          parameterVal={`${props.dayWeather.temp} °C`}
        />

        <WeatherDetails
          containetClass="d-flex dw-details gap-2"
          parameter="Min:"
          parameterVal={`${props.dayWeather.tempMin} °C`}
        />

        <WeatherDetails
          containetClass="d-flex dw-details gap-2"
          parameter="Max:"
          parameterVal={`${props.dayWeather.tempMax} °C`}
        />

        <WeatherDetails
          containetClass="d-flex dw-details gap-2"
          parameter="Feels like:"
          parameterVal={`${props.dayWeather.feelsLike} °C`}
        />
      </div>
    </div>
  );
};

export { AccordionItem };
