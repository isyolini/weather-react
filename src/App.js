import React from "react";

import Search from "./Search";
import Card from "./Card";
import Git from "./Git";

export default function App() {
  return (
    <div className="App">
      <div className="container-md container-size">
        <Search />
        <Card />
      </div>
      <div className="footer">
        <Git />
      </div>
    </div>
  );
}
