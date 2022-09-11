import React from "react";
import CardList from "../CardList/CardList";
import "./MainArea.scss";

const MainArea = ({ beerArr }) => {
  return (
    <div className="mainArea">
      <CardList beerArr={beerArr}/>
    </div>
  );
};

export default MainArea;
