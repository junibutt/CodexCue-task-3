import { useState } from "react";
import styles from "./assets/App.module.css";

const api = {
  key: "668ecb7048e672488e6625f3a469fd0b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className={styles.App}>
      <div className={styles.videoBackground}></div>{" "}
      <header className={styles.AppHeader}>
        <h1>Weather App</h1>

        <div>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className={styles.button}>
            Search
          </button>{" "}
        </div>

        {typeof weather.main !== "undefined" ? (
          <div className={styles.result}>
            {" "}
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
