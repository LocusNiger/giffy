import "./App.css";
import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState("420");
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className="App">
      <section className="App-content">
        <h1>Hello dear</h1>
        <h2>This is a gif searcher</h2>
        <h3>Please enter the keyword:</h3>
        <input id="searcher" onChange={handleKeyword} />
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
