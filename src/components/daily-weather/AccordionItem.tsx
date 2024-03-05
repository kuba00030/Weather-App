import { useEffect, useState } from "react";

interface AccordionItemProp {
  dailyWeather: any;
}

const AccordionItem: React.FC<AccordionItemProp> = ({ dailyWeather }) => {
  const [IsActive, setIsActive] = useState(false);
  useEffect(() => {}, [IsActive]);
  return (
    <div id="accordion-item">
      <div id="accordion-header">
        <div
          id="accordion-title"
          style={{
            marginLeft: 10,
            textAlign: "center",
            height: "100%",
          }}
        >
          {dailyWeather.date}
        </div>
        <button
          id="accordion-action-button"
          onClick={() => {
            setIsActive(!IsActive);
          }}
        >
          {IsActive === false ? "Open" : "Close"}
        </button>
      </div>

      <div id="accordion-weather-display-area">
        <div id="weather-data" aria-expanded={!IsActive}>
          <div id="weather-desc">{dailyWeather.description}</div>
          <div id="weather-temps">
            <div>
              <span className="weather-param">Temperature:</span>
              {dailyWeather.temp}°C
            </div>
            <div>
              <span className="weather-param">Min:</span>
              {dailyWeather.min_temp}°C
            </div>
            <div>
              <span className="weather-param">Max:</span>
              {dailyWeather.max_temp}°C
            </div>
            <div>
              <span className="weather-param">Feels like:</span>
              {dailyWeather.feels_like}°C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AccordionItem };
