import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

/* Recibe como prop el obj params (wouter). En él se encuentra el keyword */
export default function ListOfGifs({ params }) {
  /* Saco el keyword que recibímos mediante la ruta */
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  /* useState para manejar el loader de la lista de gifs. Por defecto en false */
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      /* Antes de comenzar la búsqueda de gifs, el loader pasa a true */
      setLoading(true);
      /* useEffect llama a la fción. getGifs y le pasa el keyword a buscar */
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        /* Seteo en gifs el arreglo de urls */
        setLoading(false);
        /* Cuando carga la lista, el loader pasa a false de nuevo */
      });
    },
    [keyword]
    /* Keyword -> dependencia de useEffect. Se vuelve a renderizar cuando cambie */
  );

  /* Si está cargando la lista, muestra el Loader */
  if (loading) {
    return <div className="loader"></div>;
  } else {
    /* sino retorna la lista de gifs */
    return (
      <div>
        {gifs.map(({ title, url }) => (
          <Gif title={title} url={url} key={url} />
          /* Recorre el array de gifs y pasa las props al componente Gif */
        ))}
      </div>
    );
  }
}
