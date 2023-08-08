import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    /*alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC `
    );*/
  }

  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="white"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}


export default function Weather() {
  let weatherData = {
    city: "Rome",
    temperature: 40,
    date: "Thursday 10:00",
    description: "Cloudy",
    imgUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 80,
    wind: 4
  };

  return (
    <div className="Weather">
      <form className="search-city">
        <div className="row justify-content-between">
          <div className="col-6">
            <input
              className="form-control shadow-sm"
              type="search"
              placeholder="Type a city..."
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="🔎 Search"
              className="btn btn-dark shadow-sm w-100"
            />
          </div>
          <div className="col-3">
            <input
              type="button"
              value="📍 Your City"
              className="btn btn-light shadow-sm w-100"
            />
          </div>
        </div>
      </form>

      <div className="overview">
        <div className="row justify-content-between">
          <div className="col-4 city">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated: {weatherData.date}</li>
            </ul>
          </div>
          <div className="col-4">
            <div className="d-flex weather-temperature">
              <img src={weatherData.imgUrl} alt="{weatherData.description}" />
              <div>
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">ºC</a> | <a href="/">ºF</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <ul>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km / h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="weather-forecast"></div>
    </div>
  );
}
