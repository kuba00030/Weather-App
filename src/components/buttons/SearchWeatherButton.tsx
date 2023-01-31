const SearchWeatherButton = ({
  handleUpdateWeather,
  updateWeatherData,
}: any) => {
  return (
    <button
      className="Search-button"
      onClick={() => {
        handleUpdateWeather(
          updateWeatherData.updateWeather,
          updateWeatherData.getWeather,
          updateWeatherData.dataForApi.returnOnSerachCurrentWeatherLink(),
          updateWeatherData.dataForApi.returnOnSearchHourlyWeatherlink()
        );
      }}
    >
      Search
    </button>
  );
};

export { SearchWeatherButton };
