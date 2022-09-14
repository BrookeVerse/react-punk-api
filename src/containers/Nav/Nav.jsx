import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

const Nav = ({searchWord, handleInput, handleCheckbox}) => {
  return (
    <div>
        <NavBar searchWord={searchWord} handleInput={handleInput} handleCheckbox={handleCheckbox} />
    </div>
  )
}

export default Nav