import React from 'react'
import "./CardList.scss"
import Card from '../Card/Card'

const CardList = ({beerArr}) => {
    const beerCards = beerArr.map((beer, index) => {
        return <Card key={index} name={beer.name} info={beer.description} src={beer.image_url} id={beer.id}/>
    })

    if (beerCards.length === 0) {
      const beerCards = <div>No Beers Available</div>
      return beerCards
    } 

  return (
    <div className='cardListContainer'>
        {beerCards}
    </div>
  )
}

export default CardList