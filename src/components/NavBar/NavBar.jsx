import FiltersList from '../FiltersList/FiltersList'
import SearchBox from '../SearchBox/SearchBox'
import "./NavBar.scss"
const NavBar = ({ searchWord, handleInput, handleClick}) => {
  
  return (
    <div className='navBar'>
        <SearchBox searchWord={searchWord} handleInput={handleInput}/>
        <FiltersList handleClick={handleClick}/>
    </div>
  )
}

export default NavBar