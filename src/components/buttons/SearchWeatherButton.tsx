const SearchWeatherButton = ({
  handleSetStateOnChange,
  setOnSearchWeather,
}: any) => {
  return (
    <button
      className="Search-button"
      onClick={() => {
        handleSetStateOnChange(
          setOnSearchWeather.inputRef,
          setOnSearchWeather.setCity
        );
      }}
    >
      Search
    </button>
  );
};

export { SearchWeatherButton };
