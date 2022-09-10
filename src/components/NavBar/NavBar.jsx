import React, {useState} from 'react'
import FiltersList from '../FiltersList/FiltersList'
import SearchBox from '../SearchBox/SearchBox'
import "./NavBar.scss"
const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }
    console.log(searchTerm);
  return (
    <div className='navBar'>
        <SearchBox label= "beers" searchTerm={searchTerm} handleInput={handleInput}/>
        <FiltersList />
    </div>
  )
}

export default NavBar