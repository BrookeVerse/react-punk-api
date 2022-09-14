import React from "react";
import "./Main.scss";
import MainArea from "../../components/MainArea/MainArea";

const Main = ({beerArr}) => {
  return <div>
    <MainArea beerArr={beerArr} />
  </div>;
};

export default Main;
