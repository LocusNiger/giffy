import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

/* Recibe como prop el obj params (wouter). En él de encuentra el keyword */
export default function ListOfGifs({ params }) {
  /* Saco el keyword que recibímos mediante la ruta */
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  useEffect(
    function () {
      /* useEffect llama a la fción. getGifs y le pasa el keyword a buscar */
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
      /* Seteo en gifs el arreglo de urls */
    },
    [keyword]
    /* Keyword -> dependencia de useEffect. Se vuelve a renderizar cuando cambie */
  );

  return (
    <div>
      {gifs.map(({ title, url }) => (
        <Gif title={title} url={url} key={url} />
        /* Recorre el array de gifs y pasa las props al componente Gif */
      ))}
    </div>
  );
}
