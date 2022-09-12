import React from 'react'
import "./FiltersItem.scss"

const FiltersItem = ({handleClick}) => {
  return (
    <div className='filtersItem'>
      <h2>High ABV (6.0%)<button onClick={handleClick} id="ABV">click</button></h2>
      <h2>Classic Range<button onClick={handleClick} id="Classic">click</button></h2>
      <h2>IBU(under 30)<button onClick={handleClick} id="Acidic">click</button></h2>
    </div>
  )
}

export default FiltersItem