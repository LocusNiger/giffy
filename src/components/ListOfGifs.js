import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
/* Lista de Gifs */

/* Recibe como prop el keyword a buscar */
export default function ListOfGifs({ keyword }) {
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

  return gifs.map(({ title, url }) => <Gif title={title} url={url} key={url} />);
  /* Recorre el array de gifs y pasa las props al componente Gif */
}
