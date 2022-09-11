import React from 'react'
import "./SearchBox.scss"
const SearchBox = ({ searchWord, handleInput}) => {
  return (
    <div>
      <form>
        <input type="text" placeholder='Search...' value={searchWord} onInput={handleInput} />
      </form>
    </div>
  )
}

export default SearchBox