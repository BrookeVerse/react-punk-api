import React from 'react'
import "./FiltersItem.scss"

const FiltersItem = ({handleClick}) => {
  return (
    <div className='filtersItem'>
      <h2>High ABV (6.0%)<button onClick={handleClick}>click</button></h2>
      <h2>Classic Range</h2>
      <h2>Acidic (ph 4)</h2>
    </div>
  )
}

export default FiltersItem