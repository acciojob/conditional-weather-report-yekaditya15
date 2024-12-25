import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  // Determine the color based on the temperature
  const temperatureStyle = {
    color: temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p style={temperatureStyle}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
      <span style={temperatureStyle}>Weather Indicator</span>
    </div>
  );
};

export default WeatherDisplay;
