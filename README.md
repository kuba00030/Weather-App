# Content

- [Project description](#project-description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Code examples](#code-examples)
  - [Custom hooks](#custom-hooks)
    - [useGetCoords](#useGetCoords)
    - [useGetWeatherOnCoords](#useGetWeatherOnCoords)
    - [useUpdateHourlyDetails](#useUpdateHourlyDetails)

# Project description

The application allows you to check the weather forecast for the user's location after locating it or for any place selected by the user.
The weather forecast is available in the form of a current, hourly and daily forecast.

# Technologies

- React with TypeScript
- HTML
- CSS
- Framer Motion
- React Bootstrap 2
- Bootstrap 5
- React select

# Installation

- Use 'git clone https://github.com/kuba00030/Weather-App' in your terminal.
- When the cloning process is completed, use 'npm install' in your terminal to install all dependencies.

# Usage

- Go to https://kuba00030.github.io/Weather-App/
- Wait for the application to get your location.
- Type location you want to check forecast for and click search.
- Read a forecast.

# Code examples

## Custom hooks

### useGetCoords

```typescript
export type Coords = {
  lat: number;
  lon: number;
};

export default function useGetCoords() {
  const [coords, setCoords] = useState<Coords | undefined>(undefined);

  useEffect(() => {
    const nav = navigator.geolocation;

    const successCallback = (position: GeolocationPosition) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error(error.message);
    };

    nav.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return { coords };
}
```

#### Description

- useGetCoords hook is used to retrieve the user's geographic coordinates (latitude and longitude) using the browser's geolocation API and returns the coordinates.

#### Usage

```typescript
const { coords } = useGetCoords();
```

### useGetWeatherOnCoords

```typescript
export default function useGetWeatherOnCoords() {
  const getWeatherOnCoords = async (
    apiWeatherUrl: string,
    apiLocationUrl: string,
    apiKey: string,
    coords: Coords
  ) => {
    const weatherLink = `${apiWeatherUrl}lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`;
    const locationLink = `${apiLocationUrl}lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`;

    const weather = await getWeather(weatherLink);
    const { location } = await getLocation(locationLink);

    return { weather, location };
  };

  return { getWeatherOnCoords };
}
```

#### Description

- useGetWeatherOnCoords hook is used to retrieve weather data based on geographic coordinates.

#### Usage

```typescript
const { coords } = useGetCoords();
const { getWeatherOnCoords } = useGetWeatherOnCoords();

useEffect(() => {
  if (coords === undefined) {
    window.alert(
      "Let us detect your location. It may take a while. Press 'OK' and wait."
    );
  } else {
    getWeatherOnCoords(
      openWeatherKey.apiWeatherUrl,
      openWeatherKey.apiLocationUrl,
      openWeatherKey.apiKey,
      coords
    );
  }
}, [coords]);
```

### useUpdateHourlyDetails

```typescript
type HourlyWeather = {
  hour: string;
  temp: number;
  icon: string;
};

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
```

#### Description

- useUpdateHourlyDetails hook is responsible for updating weather details every hour depending on changes in weather data. Hook is used inside HWDetails (hourly weather details) component which displays weather details for each hour.
- triggerAnimation takes an element based on the [data-animation=hw-animation-${index}] selector and adds an hourly-weather-widget-animaiton class to it to trigger the animation.
- updateDetails sets a delay when updating details to match the animation.

#### Usage

```typescript
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
```
