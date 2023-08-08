import React from "react";
import "./Description.css";
export default function Temperature() {
  return (
    <div>
      <p>High 23 °C | Low 20 °C | Wind speed 5 m/s</p>
      <p className="weather-description">Scattered clouds</p>{" "}
    </div>
  );
}
