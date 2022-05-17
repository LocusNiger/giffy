import "./App.css";
import React, { useEffect, useState } from "react";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  /* Llama a la fción. getGifs, luego seteo a gifs como un array de url's */
  useEffect(function () {
    getGifs({ keyword: "rick" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <h1>Hello dear</h1>
        <h2>This is a gif searcher</h2>
        <h3>Please enter the keyword:</h3>
        <input id="searcher" />
        {/* Recorro el array gifs */}
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="a gif" />
        ))}
      </section>
    </div>
  );
}

export default App;
