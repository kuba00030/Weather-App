import "./App.css";
import { CurrentWeather } from "./components/top/CurrentWeather";
import { Bottom } from "./components/bottom/Bottom";
import WeatherContextProvider from "./context/useWeatherContext";
import { HourlyWeather } from "./components/mid/HourlyWeather";

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <div className="weather-container">
          <CurrentWeather />
          <HourlyWeather />
          {/* <Bottom dailyWeather={handleWeatherOnLocationChange().dailyWeather} /> */}
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export { App };
