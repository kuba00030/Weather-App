type CWIcon = {
  iconLink: string;
  iconClass: string;
};

export const CWIcon = (props: CWIcon) => {
  return (
    <div
      className={props.iconClass}
      style={{
        backgroundImage: `url(http://openweathermap.org/img/w/${props.iconLink}.png)`,
      }}
    ></div>
  );
};
