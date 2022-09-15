import React from 'react'

import {useParams} from "react-router";

import "./BeerInfo.scss"

const BeerInfo = ({beerArr}) => {
    const {beerId} = useParams();
    const beers = beerArr.find((beer) => { return beer.id == beerId});
    console.log(beerArr);


  return (
    <article className='beer-info'>
        <div className="beer-info__banner">
        <img src={beers.image_url} className="beer-info__img beer-info__img--first" />
      </div>
      <div className="beer-info__content">
        <h2 className="beer-info__heading">{beers.name}</h2>
          <p>{beers.description}</p>
      </div>
      <div className="album-info__banner">
        <img src={beers.image_url} className="beer-info__img beer-info__img--last" />
      </div>
    </article>
  )
}

export default BeerInfo