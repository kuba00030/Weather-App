import { Spinner } from "react-bootstrap";
import { useWeatherConext } from "../context/useWeatherContext";
export const FetchingSpinner = () => {
  const { weatherData } = useWeatherConext();

  return weatherData === undefined ? (
    <div className="spinner position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  ) : (
    <></>
  );
};
