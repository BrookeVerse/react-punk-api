import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({ name, info, src, id }) => {
  return (
    <div className="beerCard" name="card">
      <Link to={`/beers/${id}`}>
        <img width="35px" height="90px" src={src} alt="Beer Img" className="beerCard__img" name="cardImage" />
      </Link>
      <h2 className="beerCard__heading" name="title">
        {name}
      </h2>
      <div>
        <p className="beerCard__content" name="descriptions">
          {info}
        </p>
      </div>
    </div>
  );
};

export default Card;
