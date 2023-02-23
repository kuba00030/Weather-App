import { HourlyWeatherDetails } from "../widgets/WidgetHourlyWeatherDetails";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { IContainerWidgetHourlyWeather } from "../../interfaces/interfaces";
const HourlyWeather: React.FC<IContainerWidgetHourlyWeather> = ({
  onSearchWeather,
}) => {
  const [Width, setWidth] = useState(0);
  const hourlyWeather = useRef<HTMLDivElement>(null!);
  const slide = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    setWidth(slide.current.clientWidth - hourlyWeather.current.clientWidth);
  }, [onSearchWeather]);

  window.addEventListener("resize", () => {
    setWidth(slide.current.clientWidth - hourlyWeather.current.clientWidth);
  });
  let widgets: any[] = [];
  onSearchWeather.forEach((weather: any, index: number) => {
    widgets.push(
      <HourlyWeatherDetails
        key={index}
        hour={weather.hour}
        icon={weather.icon}
        temp={weather.temp}
        id={index}
        state={onSearchWeather}
      />
    );
  });

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
        {widgets}
      </motion.div>
    </motion.div>
  );
};

export { HourlyWeather };
