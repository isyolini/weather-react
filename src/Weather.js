import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

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
      color="violet"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
