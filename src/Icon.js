import React from "react";

export default function Icon() {
  let weatherData = {
    imgUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  };

  return <img src={weatherData.imgUrl} alt="{weatherData.description}" />;
}
