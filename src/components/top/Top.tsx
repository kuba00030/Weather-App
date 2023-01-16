import "./top.css";

const Top = () => {
  return (
    <div className="Top">
      <div className="Top-left">
        <div className="Top-left-location">
          <span className="Top-left-city">Kraków</span>
          <span className="Top-left-country">Polska</span>
          <span className="Top-left-date">Środa, 12 Maja 15:15</span>
        </div>
        <div className="Top-left-weather">
          <div className="icon"></div>
          <div className="Top-left-weather-details">
            <div className="Temp-holder">
              <span className="Temp">21°</span>
              <span className="ceclius">C</span>
            </div>
            <div className="Feels-like">
              Feels like: <span className="Feels-like-temp">25</span>
              <span>°</span>
            </div>
            <span className="Sky-condition">Clear sky</span>
          </div>
        </div>
      </div>
      <div className="Top-right">
        <div className="Search-bar-container">
          <input id="given-location" type="text" placeholder="Enter location" />
        </div>
        <div className="Top-right-weather-details">
          <div className="Left-details">
            <div className="details">
              Rain:<span>f`</span>
            </div>
            <div className="details">
              Humidity:<span>dsg</span>
            </div>
            <div className="details">
              Wind speed:<span>gdsg</span>
            </div>
          </div>
          <div className="Right-details">
            <div className="details">
              Pressure:<span>sdg</span>
            </div>
            <div className="details">
              Visibility:<span>sdg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
