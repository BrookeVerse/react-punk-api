import { useState, useEffect } from "react";

import MainArea from "./components/MainArea/MainArea";
import NavBar from "./components/NavBar/NavBar";

import "./App.scss";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      const res = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
      const data = await res.json();
      setBeers(data);
    };

    getBeers();
  }, [] );

  const handleClick = (button) => {
    const click = button.target.id;
    switch (click) {
      case "ABV":
        getApiAbv();
        break;
      case "Classic":
        getApiClassic();
        break;
      case "Acidic":
        getApiPh();
        break;
      default:
        return false;
    }
  };

  const getApiPh = () => {
    const phFilter = beers.filter((beer) => {
      return beer.ph < 4;
    });
    console.log(phFilter);
    setBeers(phFilter);
  };

  const getApiAbv = () => {
    const abvFilter = beers.filter((beer) => {
      return beer.abv > 6;
    });
    setBeers(abvFilter);
  };
  
  const getApiClassic = () => {
    const classicFilter = beers.filter((beer) => {
      const letsSee = beer.first_brewed.slice(3)
      return parseInt(letsSee) < 2010;
    })
    setBeers(classicFilter);
  }

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
    <div className="App">
      <NavBar searchWord={searchWord} handleInput={handleInput} handleClick={handleClick} />
      {beers && <MainArea beerArr={searchWord.length < 1 ? beers : filterArr} />}
    </div>
  );
}

export default App;
