import React from 'react'
import "./CardList.scss"
import Card from '../Card/Card'

const CardList = ({beerArr}) => {

  //This function is mapping through the array beings propped down from the app to produce the cards.
    const beerCards = beerArr.map((beer, index) => {
        return <Card key={index} name={beer.name} info={beer.description} src={beer.image_url} id={beer.id}/>
    })
//if these is no card to produce then this will be presented.
    if (beerCards.length === 0) {
      const beerCards = <div className='beerCards__unAvailable'><h3>No Beers Available</h3></div>
      return beerCards
    } 

  return (
    <div className='cardListContainer'>
        {beerCards}
    </div>
  )
}

export default CardList