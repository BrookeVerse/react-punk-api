import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./containers/Nav/Nav";
import Main from "./containers/Main/Main";
import BeerInfo from "./components/BeerInfo/BeerInfo";

import "./App.scss";

function App() {
  //All States being set
  const [searchWord, setSearchWord] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [beers, setBeers] = useState([]);

  //API being called for a database
  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
    const data = await res.json();
    setBeers(data);
  };

  //useEffect is stopping the API being called at each re-render
  useEffect(() => {
    getBeers();
  }, []);

  //handleCheckbox is checking each checkbox and when it is being checked it will run a functionn on 
  //the array of beers, else recalling the API initial data. 
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

  //handleInput is checking what is being typed in the searchbox and if something is typed filtering 
  //through the beer array to present a new list.
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

//This area is rendering in the componenets and using routing to present different pages.
//Also sending down props for the componenets to use including ternary operator. 
  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <h1 className="app__heading">Fancy A Brew?</h1>
        </header>
          <div className="app__content">
            <Nav searchWord={searchWord} handleInput={handleInput} handleCheckbox={handleCheckbox} />
        <Routes>
            <Route path="/beers/:beerId" element={<BeerInfo beerArr={searchWord.length < 1 ? beers : filterArr}/>}></Route>
            <Route path="/" element={<Main beerArr={searchWord.length < 1 ? beers : filterArr} />}> </Route>
        </Routes>
          </div>
      </div>
    </Router>
  );
} 

export default App;
