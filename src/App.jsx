import "./App.scss";
import { useState } from "react";
import MainArea from "./components/MainArea/MainArea";
import NavBar from "./components/NavBar/NavBar";
import beerList from "./assets/data/beer.js";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [filterArr, setFilterArr] = useState([])

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchWord(cleanInput);

    

    if (searchWord !== "") {
      const newBeerList = beerList.filter((beer) => {
        return beer.name.toLowerCase().includes(searchWord.toLowerCase())
      });
      setFilterArr(newBeerList)
    } else {
      setFilterArr(beerList)
    }
  };
  


  return (
    <div className="App">
      <NavBar searchWord={searchWord} handleInput={handleInput} />
      <MainArea beerArr={searchWord.length < 1 ? beerList : filterArr}/>
    </div>
  );
}

export default App;
