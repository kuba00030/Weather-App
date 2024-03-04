import "./App.css";
import { CurrentWeather } from "./components/top/CurrentWeather";
import { Mid } from "./components/mid/Mid";
import { Bottom } from "./components/bottom/Bottom";
import WeatherContextProvider from "./context/useWeatherContext";

function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <WeatherContextProvider>
          <CurrentWeather />
        </WeatherContextProvider>
      </div>
    </div>
  );
}

export { App };
