import { useState, useEffect } from "react";

import MainArea from "./components/MainArea/MainArea";
import NavBar from "./components/NavBar/NavBar";

import beerList from "./assets/data/beer.js";

import "./App.scss";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://api.punkapi.com/v2/beers?page=1&per_page=80");
  const [beers, setBeers] = useState([]);

  const handleClick = (button) => {
    const click = button.target.id;
    switch (click) {
      case "ABV":
        setApiUrl("https://api.punkapi.com/v2/beers?abv_gt=6&page=1&per_page=80");
        break;
      case "Classic":
        setApiUrl("https://api.punkapi.com/v2/beers?brewed_before=01-2010&page=1&per_page=80");
        break;
      case "Acidic":
        setApiUrl("https://api.punkapi.com/v2/beers?ibu_lt=30&page=1&per_page=80");
        break;
      default:
        return false;
    }
  };

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
      {beers && <MainArea beerArr={searchWord.length < 1 ? beers : filterArr} />}
    </div>
  );
}

export default App;
