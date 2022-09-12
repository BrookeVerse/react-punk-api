import { useState, useEffect } from "react";

import MainArea from "./components/MainArea/MainArea";
import NavBar from "./components/NavBar/NavBar";

import beerList from "./assets/data/beer.js";

import "./App.scss";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://api.punkapi.com/v2/beers");
  const [beers, setBeers] = useState([]);

  const handleClick = () => {
    console.log("Hello");
    setApiUrl("https://api.punkapi.com/v2/beers?abv_gt=6");
  };
  console.log(apiUrl);
  
  useEffect(() => {
    const getBeers = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setBeers(data);
    };

    getBeers();
  }, [apiUrl]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchWord(cleanInput);

    if (searchWord !== "") {
      const newBeerList = beers.filter((beer) => {
        return beer.name.toLowerCase().includes(searchWord);
      });
      setFilterArr(newBeerList);
    } else {
      setFilterArr(beerList);
    }
  };

  return (
    <div className="App">
      <NavBar searchWord={searchWord} handleInput={handleInput} handleClick={handleClick} />
      <MainArea beerArr={searchWord.length < 1 ? beers : filterArr} />
    </div>
  );
}

export default App;
