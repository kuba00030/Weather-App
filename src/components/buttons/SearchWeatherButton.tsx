type SearchWeatherButton = {
  class: string;
  buttonTxt: string;
  onClick: () => void;
};
const SearchWeatherButton = (props: SearchWeatherButton) => {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.buttonTxt}
    </button>
  );
};

export { SearchWeatherButton };
