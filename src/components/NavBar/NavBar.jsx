import FiltersList from '../FiltersList/FiltersList'
import SearchBox from '../SearchBox/SearchBox'
import "./NavBar.scss"
const NavBar = ({ searchWord, handleInput}) => {
  
  return (
    <div className='navBar'>
        <SearchBox searchWord={searchWord} handleInput={handleInput}/>
        <FiltersList />
    </div>
  )
}

export default NavBar