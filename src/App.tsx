import { useRef } from "react";
import "./App.css";
import Top from "./components/top/Top";
import { Mid } from "./components/mid/Mid";
import { Bottom } from "./components/bottom/Bottom";
import WeatherContextProvider from "./context/useWeatherContext";

function App() {
  ////////////////

  return (
    <div className="App">
      <WeatherContextProvider>
        <Top />
      </WeatherContextProvider>

      {/* <Mid
        onSearchHourlyWeather={handleWeatherOnLocationChange().hourlyWeather}
      />
      <Bottom dailyWeather={handleWeatherOnLocationChange().dailyWeather} /> */}
    </div>
  );
}

export { App };
