import React from 'react'
import FiltersItem from '../FiltersItem/FiltersItem'
import "./FiltersList.scss"

const FiltersList = ({handleClick}) => {
  return (
    <div>
        <FiltersItem handleClick={handleClick}/>
    </div>
  )
}

export default FiltersList