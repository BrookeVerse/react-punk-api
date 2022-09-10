import React from "react";
import "./Card.scss";

const Card = ({ name, info, src }) => {
  return (
    <div className="beerCard">
        <img width="35px" height="90px" src={src} alt="Beer Img" className="beerCard__img"/>
        <h2>{name}</h2>
        <p>{info}</p>
    </div>
  );
};

export default Card;
