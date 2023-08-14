import React from "react";

import "./App.css";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form className="search-form">
        <div className="input-group">
          <input
            className="form-control shadow-sm"
            type="search"
            placeholder="Type a city..."
            autoComplete="off"
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
