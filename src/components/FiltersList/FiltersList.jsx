import React from 'react'
import FiltersItem from '../FiltersItem/FiltersItem'
import "./FiltersList.scss"

const FiltersList = ({handleCheckbox}) => {
  return (
    <div>
        <FiltersItem handleCheckbox={handleCheckbox}/>
    </div>
  )
}

export default FiltersList