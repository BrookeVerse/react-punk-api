import React from "react";
import MainArea from "../../components/MainArea/MainArea";

import "./Main.scss";

const Main = ({beerArr}) => {
  return <div>
    <MainArea beerArr={beerArr} />
  </div>;
};

export default Main;
