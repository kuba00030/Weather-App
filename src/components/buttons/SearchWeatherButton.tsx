const SearchWeatherButton = ({
  handleUpdateWeather,
  updateWeatherData,
  cityState,
  setOnSearchWeatherState,
}: any) => {
  return (
    <button
      className="Search-button"
      onClick={() => {
        handleUpdateWeather(
          updateWeatherData.updateWeather,
          updateWeatherData.getWeather,
          updateWeatherData.dataForApi.returnOnSerachCurrentWeatherLink(),
          updateWeatherData.dataForApi.returnOnSearchHourlyWeatherlink(),
          setOnSearchWeatherState
        );
      }}
    >
      Search
    </button>
  );
};

export { SearchWeatherButton };
