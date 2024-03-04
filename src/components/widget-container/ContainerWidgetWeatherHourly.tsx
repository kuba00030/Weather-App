import { HourlyWeatherDetails } from "../widgets/WidgetHourlyWeatherDetails";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { HourlyWeather } from "../../API/apiCalls";

type HourlyWeatherContainer = {
  hourlyWeatherData: HourlyWeather[] | undefined;
};

export const HourlyWeatherContainer = (props: HourlyWeatherContainer) => {
  const [Width, setWidth] = useState(0);
  const hourlyWeather = useRef<HTMLDivElement>(null!);
  const slide = useRef<HTMLDivElement>(null!);

  // useEffect(() => {
  //   setWidth(slide.current.clientWidth - hourlyWeather.current.clientWidth);
  // }, [onSearchWeather]);

  // window.addEventListener("resize", () => {
  //   setWidth(slide.current.clientWidth - hourlyWeather.current.clientWidth);
  // });

  return (
    <motion.div
      className="Hourly-weather"
      id="HourlyWeather"
      ref={hourlyWeather}
    >
      <motion.div
        className="HWeather"
        drag="x"
        dragConstraints={{ right: 0, left: -Width }}
        ref={slide}
      >
        {props.hourlyWeatherData?.map((weatherData, index) => {
          return (
            <HourlyWeatherDetails
              key={index}
              hour={weatherData.hour}
              icon={weatherData.icon}
              temp={weatherData.temp}
              index={index}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};
