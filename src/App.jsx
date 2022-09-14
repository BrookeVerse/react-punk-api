import { useState, useEffect } from "react";

import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import punkImg from "./assets/images/punkbackground.gif";

import "./App.scss";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleCheckbox = (button) => {
    if (button.target.checked) {
      if (button.target.value === "ABV") {
        setBeers(beers.filter((beer) => beer.abv > 6));
      } else if (button.target.value === "Classic") {
        setBeers(beers.filter((beer) => Number(beer.first_brewed.slice(3)) < 2010));
      } else if (button.target.value === "Acidic") {
        setBeers(beers.filter((beer) => beer.ph < 4));
      }
    } else {
      getBeers();
    }
  };

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchWord(cleanInput);

    if (searchWord !== "") {
      const newBeerList = beers.filter((beer) => {
        return beer.name.toLowerCase().includes(searchWord);
      });
      setFilterArr(newBeerList);
    } else {
      setFilterArr(beers);
    }
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">Punk Ipa</h1>
      </header>
      <div className="app__content">
        <Nav searchWord={searchWord} handleInput={handleInput} handleCheckbox={handleCheckbox} />
        {beers && <Main beerArr={searchWord.length < 1 ? beers : filterArr} />}
      </div>
    </div>
  );
}

export default App;
