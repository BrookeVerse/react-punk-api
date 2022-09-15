import React from "react";
import "./Card.scss";

const Card = ({ name, info, src }) => {
  return (
    <div className="beerCard" name="card">
        <img width="35px" height="90px" src={src} alt="Beer Img" className="beerCard__img" name="cardImage"/>
        <h2 className="beerCard__heading" name="title">{name}</h2>
        <div>
         <p className="beerCard__content" name="descriptions">{info}</p>
        </div>
    </div>
  );
};

export default Card;
