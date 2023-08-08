import React from "react";
import City from "./City";
import Date from "./Date";
import Temperature from "./Temperature";
import Description from "./Description";
import Icon from "./Icon";
import "./Card.css";

export default function Card() {
  return (
    <div className="card-mi">
      <div className="row">
        <div className="col-sm-6">
          <City />
          <Date />
          <Temperature />
          <Description />{" "}
        </div>
        <div className="col-sm-6">
          <Icon />
        </div>
      </div>
    </div>
  );
}
