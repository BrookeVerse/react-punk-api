import React from 'react'
import "./CardList.scss"
import Card from '../Card/Card'
import beerList from "../../assets/data/beer.js"

const CardList = () => {
    const beerCards = beerList.map((beer, index) => {
        return <Card key={index} name={beer.name} info={beer.description} src={beer.image_url}/>
    })
  return (
    <div className='cardListContainer'>
        {beerCards}
    </div>
  )
}

export default CardList