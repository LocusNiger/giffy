import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Hello dear</h1>
        <h2>This is a gif searcher</h2>
        <h3>Please enter the keyword:</h3>
        <input id="searcher" />
        <ListOfGifs keyword="Draymond" />
      </section>
    </div>
  );
}

export default App;
