import React from "react";
import MainArea from "../../components/MainArea/MainArea";

import "./Main.scss";

const Main = ({beerArr}) => {
  return <div>
    {beerArr && <MainArea beerArr={beerArr} />}
  </div>;
};

export default Main;
