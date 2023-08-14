import React from "react";
import City from "./City";
import Date from "./Date";
import Temperature from "./Temperature";
import Description from "./Description";
import Icon from "./Icon";
import "./Card.css";

export default function Card() {
  return (
    <div className="card-group">
      <div className="row justify-content-between">
        <div className="col-sm-5">
          <City />
          <Date />
          <Temperature />
          <Description />{" "}
        </div>
        <div className="col-sm-2">
          <Icon />
        </div>
        <div className="col-sm-5">
          <Icon />
        </div>
      </div>
    </div>
  );
}
