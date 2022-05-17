import "./App.css";
import React, { useEffect, useState } from "react";
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";

function App() {
  const [gifs, setGifs] = useState([]);

  /* Llama a la fción. getGifs (retorna array de URL's) */
  useEffect(function () {
    getGifs({ keyword: "Kyrie" }).then((gifs) => setGifs(gifs));
    /* Seteo en gifs el arreglo de urls */
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <h1>Hello dear</h1>
        <h2>This is a gif searcher</h2>
        <h3>Please enter the keyword:</h3>
        <input id="searcher" />
        {/* Recorro el array gifs y muestro c/u */}
        {gifs.map((singleGif) => (
          <Gif title={singleGif.title} url={singleGif.url} key={singleGif.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
