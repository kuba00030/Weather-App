import "./App.css";
import { CurrentWeather } from "./components/current-weather/CurrentWeather";
import { DailyWeather } from "./components/daily-weather/DailyWeather";
import { HourlyWeather } from "./components/hourly-weather/HourlyWeather";
import { SearchBar } from "./components/search-bar/SearchBar";
import WeatherContextProvider from "./context/useWeatherContext";
import { FetchingSpinner } from "./spinner/FetchingSpinner";

function App() {
  return (
    <WeatherContextProvider>
      <div className="App d-flex flex-column flex-grow-1 overflow-hidden gap-5 py-5">
        <SearchBar />
        <div className="weather-container position-relative d-flex flex-column flex-grow-1 gap-5">
          <CurrentWeather />
          <HourlyWeather />
          <DailyWeather />
          <FetchingSpinner />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export { App };
