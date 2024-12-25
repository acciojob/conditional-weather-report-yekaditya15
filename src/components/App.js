import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    const weatherInput = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <h1>Conditional Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
