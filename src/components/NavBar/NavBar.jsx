import FiltersList from '../FiltersList/FiltersList'
import SearchBox from '../SearchBox/SearchBox'
import "./NavBar.scss"
const NavBar = ({ searchWord, handleInput, handleCheckbox}) => {
  
  return (
    <div className='navBar'>
        <SearchBox searchWord={searchWord} handleInput={handleInput}/>
        <FiltersList handleCheckbox={handleCheckbox}/>
    </div>
  )
}

export default NavBar