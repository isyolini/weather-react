import React from "react";
import "./City.css";

export default function City() {
  let weatherData = {
    city: "Rome",
    temperature: 40,
    date: "Thursday 10:00",
    description: "Cloudy",
    imgUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 80,
    wind: 4,
  };

  return <h1>{weatherData.city}</h1>;
}
