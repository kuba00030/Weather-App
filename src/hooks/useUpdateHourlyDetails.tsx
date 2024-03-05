import { useEffect, useState } from "react";
import { HourlyWeather } from "../API/apiCalls";
import { useWeatherConext } from "../context/useWeatherContext";

const triggerAnimation = (index: number) => {
  const element = document.querySelector(
    `[data-animation=hw-animation-${index}]`
  )!;
  element.classList.remove("hourly-weather-widget-animaiton");
  setTimeout(() => {
    element.classList.add("hourly-weather-widget-animaiton");
  }, 100 * index);
};

const updateDetails = (
  index: number,
  animationDuration: number,
  setHourlyDetails: (hourlyDetails: HourlyWeather) => void,
  hourlyDetails: HourlyWeather
) => {
  setTimeout(() => {
    setHourlyDetails(hourlyDetails);
  }, 100 * index + animationDuration / 2);
};

export const useUpdateHourlyDetails = (
  index: number,
  animationDuration: number,
  hourlyDetails: HourlyWeather
) => {
  const { weatherData } = useWeatherConext();
  const [details, setDetails] = useState<HourlyWeather>({
    temp: 0,
    icon: "",
    hour: "",
  });

  useEffect(() => {
    triggerAnimation(index);
    updateDetails(index, animationDuration, setDetails, hourlyDetails);
  }, [weatherData]);

  return { details };
};
