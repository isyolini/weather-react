import React from "react";
import "./Card.css";

export default function Card() {
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

  return (
    <div className="row justify-content-between">
      <div className="city col-4">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
        </ul>
      </div>
      <div className="temperature col-4">
        <div className="d-flex weather-temperature">
          <img src={weatherData.imgUrl} alt="{weatherData.description}" />
          <div>
            <h2>{weatherData.temperature}</h2>
            <span className="units">
              <a href="/">ºC</a> | <a href="/">ºF</a>
            </span>
          </div>
        </div>
      </div>
      <div className="data col-4">
        <ul>
          <li>{weatherData.description}</li>
          <li>Humidity: {weatherData.humidity} %</li>
          <li>Wind: {weatherData.wind} km / h</li>
        </ul>
      </div>
    </div>
  );
}
