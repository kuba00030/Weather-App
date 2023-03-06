interface SearchForTheCityProps {
  widthVal: string;
  widthUnit: string;
  flex: string | number;
  handleSetStateOnChange: any;
  setOnSearchWeather: any;
}

const SearchForTheCity = ({
  widthVal,
  widthUnit,
  flex,
  handleSetStateOnChange,
  setOnSearchWeather,
}: SearchForTheCityProps) => {
  return (
    <input
      style={{ width: `${widthVal}${widthUnit}`, flex: flex }}
      id="given-location"
      type="text"
      placeholder="Enter location"
      ref={setOnSearchWeather.inputRef}
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          handleSetStateOnChange(
            setOnSearchWeather.inputRef,
            setOnSearchWeather.setCity
          );
        }
      }}
    />
  );
};

export { SearchForTheCity };
