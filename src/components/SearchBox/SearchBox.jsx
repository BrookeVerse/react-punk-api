import React from 'react'
import "./SearchBox.scss"
const SearchBox = ({ searchWord, handleInput}) => {
  return (
    <div className='searchBox'>
      <form className='searchBox__form'>
        <input type="text" placeholder='Search...' value={searchWord} onInput={handleInput} className="searchBox__input"/>
      </form>
    </div>
  )
}

export default SearchBox