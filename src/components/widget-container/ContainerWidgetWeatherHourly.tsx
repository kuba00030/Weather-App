import { HourlyWeatherDetails } from "../widgets/WidgetHourlyWeatherDetails";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
interface IHourlyWeather {
  onSearchWeather: any;
}
const HourlyWeather: React.FC<IHourlyWeather> = ({ onSearchWeather }: any) => {
  const [Width, setWidth] = useState(0);
  const hourlyWeather = useRef<HTMLDivElement>(null!);
  const slide = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    setWidth(slide.current.clientWidth - hourlyWeather.current.clientWidth);
  }, [onSearchWeather]);

  window.addEventListener("resize", () => {
    console.log(slide.current.clientWidth);
    console.log(hourlyWeather.current.clientWidth);
    setWidth(slide.current.clientWidth - hourlyWeather.current.clientWidth);
  });
  let widgets: any = [];
  onSearchWeather.hourlyWeather.forEach((weather: any, index: number) => {
    widgets.push(
      <HourlyWeatherDetails
        key={index}
        hour={weather.dt_txt}
        icon={weather.weather[0].icon}
        temp={Math.round(weather.main.temp - 272.15)}
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
