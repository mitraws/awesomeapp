import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <Pokemon
          name="Charizard"
          weight="90"
          awesome="yes"
          terrifying="yes"
          abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        />
        <Pokemon
          name="Bulbasaur"
          weight="6.9"
          awesome="yes"
          terrifying="yes"
          abilities="Overgrow, Chlorophyll"
        />
        <Pokemon
          name="Mewtwo"
          weight="122"
          awesome="yes"
          terrifying="no"
          abilities="Pressure, Unnerve, Steadfast, Insomnia"
        />
        <Pokemon
          name="Mega beedrill"
          weight="65"
          awesome="no"
          terrifying="no"
          abilities="Intimidate, Unnerve"
        />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur
        </a>
      </header>
    </div>
  );
}

export default App;
