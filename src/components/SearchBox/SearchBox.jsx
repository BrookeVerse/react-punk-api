import React from 'react'
import "./SearchBox.scss"
const SearchBox = ({label, searchTerm, handleInput}) => {
  return (
    <div>
      <input type="text" placeholder='Search...' name={label} value={searchTerm} onInput={handleInput} />
    </div>
  )
}

export default SearchBox