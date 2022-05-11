import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import ResultPeople from "./components/ResultPeople";
import ResultPlanets from "./components/ResultPlanets";
import ResultVehicles from "./components/ResultVehicles";
import ResultStarships from "./components/ResultStarships";
import logo from "./assets/Star_Wars_Logo..png";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [searchItem, setSearchItem] = useState("people");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:3001/search?name=${input}&check=${searchItem}`
      );
      setData(resp.data);
      console.log(resp.data);
    } catch {}
  };
  const handleSelect = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <main className="Main">
        <div className="search">
          <select onChange={handleSelect}>
            <option value="people">People</option>
            <option value="vehicles">Vehicles</option>
            <option value="starships">Starships</option>
            <option value="planets">Planets</option>
            <br></br>
          </select>
          <input onChange={handleChange} />

          <button onClick={handleSubmit}> search </button>
        </div>

        {data.length !== 0 && searchItem === "people" && (
          <div className="Container">
            {data.map((el) => (
              <ResultPeople key={el.id} {...el} />
            ))}
          </div>
        )}
        {data.length !== 0 && searchItem === "vehicles" && (
          <div className="Container">
            {data.map((el) => (
              <ResultVehicles key={el.id} {...el} />
            ))}
          </div>
        )}
        {data.length !== 0 && searchItem === "planets" && (
          <div className="Container">
            {data.map((el) => (
              <ResultPlanets key={el.id} {...el} />
            ))}
          </div>
        )}
        {data.length !== 0 && searchItem === "starships" && (
          <div className="Container">
            {data.map((el) => (
              <ResultStarships key={el.id} {...el} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
