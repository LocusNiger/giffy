import "./App.css";
import React, { useEffect, useState } from "react";

const apiUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=XFqiWoyn4nHms0AxsCQuaepcc2VnKztd&q=LeBron&limit=10&offset=0&rating=g&lang=en";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    console.log("Actualizando gifs");
    fetch(apiUrl) /* Realizo el fetch de la API. Devuelve una promesa => */
      .then((res) => res.json()) /* Transformo la rta. en JSON */
      .then((response) => {
        /* Accedemos al json para mostrar las imagenes. Nos devuelve DATA */
        const { data } = response; /* Data es un array de objetos, y cada obj. es un GIF */
        const gifs = data.map(
          (image) => image.images.downsized_medium.url
        ); /* En gifs tengo un array de gifs, lo recorro con map y extraigo de c/gif su url */
        setGifs(gifs); /* Seteo a gifs como un array de url's */
      });
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <h1>Hello Bron</h1>
        {/* Recorro el array gifs */}
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="a gif" />
        ))}
      </section>
    </div>
  );
}

export default App;
