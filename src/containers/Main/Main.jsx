import React from "react";
import MainArea from "../../components/MainArea/MainArea";
import Nav from "../Nav/Nav";
import "./Main.scss";

const Main = ({ beerArr, searchWord, handleInput, handleCheckbox }) => {
  return (
    <div className="main">
      <Nav searchWord={searchWord} handleInput={handleInput} handleCheckbox={handleCheckbox} />
      {beerArr && <MainArea beerArr={beerArr} />}
    </div>
  );
};

export default Main;
