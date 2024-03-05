import "./hourly-weather-style.css";
import { useWeatherConext } from "../../context/useWeatherContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HWDetails } from "./HWDetails";

export const HourlyWeather = () => {
  const { weatherData } = useWeatherConext();
  const [width, setWidth] = useState<number>(0);
  const sliderContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderContainer.current !== null) {
      setWidth(
        sliderContainer.current.scrollWidth -
          sliderContainer.current.offsetWidth
      );
    }
  }, [weatherData]);

  window.addEventListener("resize", () => {
    if (sliderContainer.current !== null) {
      setWidth(
        sliderContainer.current.scrollWidth -
          sliderContainer.current.offsetWidth
      );
    }
  });

  return weatherData !== undefined ? (
    <motion.div
      ref={sliderContainer}
      className="d-flex flex-grow-1 justify-content-start overflow-hidden gap-2 mt-5"
    >
      <motion.div
        className="d-flex flex-row gap-4"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        style={{ cursor: "grab" }}
        dragTransition={{
          timeConstant: 100,
          power: 0.3,
        }}
      >
        {weatherData.weather.hourlyWeather.map((weather, index) => {
          return (
            <HWDetails
              weather={weather}
              index={index}
              key={`hw-details-${index}`}
            />
          );
        })}
      </motion.div>
    </motion.div>
  ) : (
    <></>
  );
};
