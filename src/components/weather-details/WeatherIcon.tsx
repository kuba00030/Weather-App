type WeatherIcon = {
  iconLink: string;
  iconClass: string;
};

export const WeatherIcon = (props: WeatherIcon) => {
  return (
    <div
      className={props.iconClass}
      style={{
        backgroundImage: `url(http://openweathermap.org/img/w/${props.iconLink}.png)`,
      }}
    ></div>
  );
};
