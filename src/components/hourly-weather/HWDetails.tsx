import { motion } from "framer-motion";
import { HourlyWeather } from "../../API/apiCalls";
import { useUpdateHourlyDetails } from "../../hooks/useUpdateHourlyDetails";
import { WeatherIcon } from "../weather-details/WeatherIcon";
import { WeatherDetails } from "../weather-details/WeatherDetails";

type HWDetails = {
  weather: HourlyWeather;
  index: number;
};

export const HWDetails = (props: HWDetails) => {
  const { details } = useUpdateHourlyDetails(props.index, 500, props.weather);

  return (
    <motion.div
      className="h-weather-details my-bg-light hourly-weather-widget-animaiton d-flex flex-column justify-content-center text-center overflow-hidden rounded-3 gap-2 "
      style={{ flexShrink: 0 }}
      data-animation={`hw-animation-${props.index}`}
    >
      <WeatherIcon iconClass="h-img ms-auto me-auto" iconLink={details.icon} />
      <WeatherDetails
        parameterVal={details.hour}
        parameterValClass="fs-s fw-bold "
      />
      <WeatherDetails
        parameterVal={`${details.temp}°C`}
        parameterValClass="fs-s fw-bold fc-gray"
      />
    </motion.div>
  );
};
