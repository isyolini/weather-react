import React from "react";

import "./App.css";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form className="search-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeHolder="Enter a city"
            autocomplete="off"
          />
          <input className="search-button" type="submit" value="search" />
        </div>
      </form>
    </div>
  );
}
