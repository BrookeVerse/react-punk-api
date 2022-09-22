import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./containers/Main/Main";
import BeerInfo from "./components/BeerInfo/BeerInfo";

import "./App.scss";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [filterBeers, setFilterBeers] = useState([]);
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
      setFilterBeers(newBeerList);
    } else {
      setFilterBeers(beers);
    }
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">Fancy A Brew?</h1>
      </header>
      <div className="app__content">
        <Router>
          <Routes>
            <Route path="/beers/:beerId" element={<BeerInfo beerArr={searchWord.length < 1 ? beers : filterBeers} />}></Route>
            <Route
              path="/"
              element={
                <Main
                  beerArr={searchWord.length < 1 ? beers : filterBeers}
                  searchWord={searchWord}
                  handleInput={handleInput}
                  handleCheckbox={handleCheckbox}
                />
              }
            >
              {" "}
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
