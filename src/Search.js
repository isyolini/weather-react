import React from "react";

import "./App.css";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form className="search-form">
        <div className="input-group">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Type a city..."
            autocomplete="off"
          />
          <input
            className="search-button btn btn-dark shadow-sm"
            type="submit"
            value="🔎 Search"
          />
        </div>
      </form>
    </div>
  );
}
