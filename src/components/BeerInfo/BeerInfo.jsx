import React from "react";

import { useParams } from "react-router";

import "./BeerInfo.scss";

const BeerInfo = ({ beerArr }) => {
  const { beerId } = useParams();
  const beers = beerArr.find((beer) => {
    return beer.id == beerId;
  });

 const seperateSentence = beers.food_pairing.join(" ,");

  return (
    <article className="beer-info">
      <div className="beer-info__container">
        <img src={beers.image_url} className="beer-info__img beer-info__img--first" />
        <div className="beer-info__content">
          <h2 className="beer-info__heading">{beers.name}</h2>
          <h4 className="beer-info__tagline">{beers.tagline}</h4>
          <ul className="beer-info__facts">
            <hr></hr>
            <li>Released: {beers.first_brewed}</li>
            <li>Abv: {beers.abv}</li>
            <li>Ph: {beers.ph}</li>
            <hr></hr>
          </ul>
          <br />
          <p>{beers.description}</p>
          <br />
          <hr></hr>
          <h4>Food pairing</h4>
          <p>Enjoy this beer with: {seperateSentence}.</p>
        </div>
      </div>
    </article>
  );
};

export default BeerInfo;
